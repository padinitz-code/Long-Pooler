import React, { useState, useEffect, useCallback } from 'react';

/**
 * LongPolling Client Component
 * Provides real-time data updates using long-polling technique
 */
export const LongPollingClient = ({ 
  url, 
  onDataUpdate, 
  interval = 1000, 
  timeout = 25000,
  children,
  render = children 
}) => {
  const [data, setData] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);
  const [timestamp, setTimestamp] = useState(null);

  const pollForChanges = useCallback(async () => {
    try {
      const requestUrl = timestamp ? `${url}?timestamp=${timestamp}` : url;
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      // Check if data has changed or if it's the first request
      if (!timestamp || result.changed) {
        setData(result.content);
        onDataUpdate?.(result.content);
      }

      // Update timestamp for next request
      setTimestamp(result.timestamp);
      setIsConnected(true);
      setError(null);

      // Schedule next poll
      setTimeout(pollForChanges, interval);

    } catch (err) {
      if (err.name === 'AbortError') {
        // Request timed out, continue polling
        setTimeout(pollForChanges, interval);
      } else {
        setError(err.message);
        setIsConnected(false);
        // Retry after error
        setTimeout(pollForChanges, interval * 2);
      }
    }
  }, [url, timestamp, interval, timeout, onDataUpdate]);

  useEffect(() => {
    pollForChanges();
    
    return () => {
      // Cleanup function
    };
  }, [pollForChanges]);

  // Render function pattern
  if (typeof render === 'function') {
    return render({ data, isConnected, error, timestamp });
  }

  // Default render
  return (
    <div className="long-polling-client">
      {error && (
        <div className="error">
          Error: {error}
        </div>
      )}
      {!isConnected && !error && (
        <div className="connecting">
          Connecting...
        </div>
      )}
      {isConnected && (
        <div className="connected">
          Connected
        </div>
      )}
      {data && (
        <div className="data">
          {JSON.stringify(data, null, 2)}
        </div>
      )}
    </div>
  );
};

/**
 * Hook for using long-polling in functional components
 */
export const useLongPolling = (url, options = {}) => {
  const {
    interval = 1000,
    timeout = 25000,
    onDataUpdate
  } = options;

  const [data, setData] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);
  const [timestamp, setTimestamp] = useState(null);

  const pollForChanges = useCallback(async () => {
    try {
      const requestUrl = timestamp ? `${url}?timestamp=${timestamp}` : url;
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (!timestamp || result.changed) {
        setData(result.content);
        onDataUpdate?.(result.content);
      }

      setTimestamp(result.timestamp);
      setIsConnected(true);
      setError(null);

      setTimeout(pollForChanges, interval);

    } catch (err) {
      if (err.name === 'AbortError') {
        setTimeout(pollForChanges, interval);
      } else {
        setError(err.message);
        setIsConnected(false);
        setTimeout(pollForChanges, interval * 2);
      }
    }
  }, [url, timestamp, interval, timeout, onDataUpdate]);

  useEffect(() => {
    pollForChanges();
  }, [pollForChanges]);

  return { data, isConnected, error, timestamp };
};

/**
 * Standalone LongPolling class for non-React usage
 */
export class LongPolling {
  constructor(url, options = {}) {
    this.url = url;
    this.options = {
      interval: 1000,
      timeout: 25000,
      ...options
    };
    this.timestamp = null;
    this.isPolling = false;
    this.listeners = [];
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  start() {
    if (this.isPolling) return;
    this.isPolling = true;
    this.poll();
  }

  stop() {
    this.isPolling = false;
  }

  async poll() {
    if (!this.isPolling) return;

    try {
      const requestUrl = this.timestamp ? `${this.url}?timestamp=${this.timestamp}` : this.url;
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.options.timeout);

      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (!this.timestamp || result.changed) {
        this.listeners.forEach(listener => listener(result.content));
      }

      this.timestamp = result.timestamp;

      setTimeout(() => this.poll(), this.options.interval);

    } catch (err) {
      if (err.name === 'AbortError') {
        setTimeout(() => this.poll(), this.options.interval);
      } else {
        console.error('LongPolling error:', err);
        setTimeout(() => this.poll(), this.options.interval * 2);
      }
    }
  }
}

export default LongPolling;

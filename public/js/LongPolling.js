/**
 * LongPolling Client Library
 * Browser-compatible version for non-React usage
 */

class LongPolling {
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

// Export for ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LongPolling;
}

// Global variable for browser usage
if (typeof window !== 'undefined') {
  window.LongPolling = LongPolling;
}

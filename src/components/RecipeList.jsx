import React, { useState } from 'react';
import { LongPollingClient, useLongPolling } from '../LongPolling.jsx';

/**
 * Recipe List Component using LongPollingClient
 */
export const RecipeListWithComponent = () => {
  const [lastUpdate, setLastUpdate] = useState(null);

  const handleDataUpdate = (recipes) => {
    setLastUpdate(new Date().toLocaleTimeString());
  };

  return (
    <div className="recipe-list">
      <h3>Recipe List (Component-based)</h3>
      <p>Last updated: {lastUpdate || 'Never'}</p>
      
      <LongPollingClient
        url="/api/recipes"
        onDataUpdate={handleDataUpdate}
        interval={1000}
        render={({ data, isConnected, error }) => (
          <div>
            {error && <div className="error">Error: {error}</div>}
            {!isConnected && !error && <div>Connecting...</div>}
            {isConnected && <div className="status connected">Connected</div>}
            
            {data && (
              <ul className="recipes">
                {data.map((recipe, index) => (
                  <li key={index}>
                    <strong>{recipe.name}</strong> - ${recipe.price}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      />
    </div>
  );
};

/**
 * Recipe List Component using useLongPolling hook
 */
export const RecipeListWithHook = () => {
  const [lastUpdate, setLastUpdate] = useState(null);
  
  const { data, isConnected, error } = useLongPolling('/api/recipes', {
    interval: 1000,
    onDataUpdate: (recipes) => {
      setLastUpdate(new Date().toLocaleTimeString());
    }
  });

  return (
    <div className="recipe-list">
      <h3>Recipe List (Hook-based)</h3>
      <p>Last updated: {lastUpdate || 'Never'}</p>
      
      {error && <div className="error">Error: {error}</div>}
      {!isConnected && !error && <div>Connecting...</div>}
      {isConnected && <div className="status connected">Connected</div>}
      
      {data && (
        <ul className="recipes">
          {data.map((recipe, index) => (
            <li key={index}>
              <strong>{recipe.name}</strong> - ${recipe.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/**
 * Custom Data Monitor Component
 */
export const DataMonitor = ({ dataKey }) => {
  const { data, isConnected, error } = useLongPolling(`/api/data/${dataKey}`, {
    interval: 2000
  });

  return (
    <div className="data-monitor">
      <h4>Data Monitor: {dataKey}</h4>
      {error && <div className="error">Error: {error}</div>}
      {!isConnected && !error && <div>Connecting...</div>}
      {isConnected && <div className="status connected">Connected</div>}
      
      {data && (
        <div className="data">
          <p>ID: {data.id}</p>
          <p>Value: {data.value.toFixed(2)}</p>
          <p>Timestamp: {new Date(data.timestamp).toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
};

/**
 * Main App Component
 */
export const App = () => {
  return (
    <div className="app">
      <h1>Long-Polling JSX Demo</h1>
      <p>This demo shows real-time updates using long-polling with React components.</p>
      
      <div className="components">
        <RecipeListWithComponent />
        <hr />
        <RecipeListWithHook />
        <hr />
        <div className="monitors">
          <DataMonitor dataKey="temperature" />
          <DataMonitor dataKey="humidity" />
          <DataMonitor dataKey="pressure" />
        </div>
      </div>
    </div>
  );
};

export default App;

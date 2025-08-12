<p align="center"><img src="https://s7.postimg.cc/71hke1uaz/longpolling.jpg" width="450" height="300"></p>

# Long-Polling JSX

A modern Node.js/JSX implementation of long-polling for real-time applications. This is a complete rewrite of the original PHP/JavaScript library to work with modern web technologies.

## Features

- 🚀 **Modern Node.js/Express backend** with ES modules
- ⚛️ **React components** and hooks for easy integration
- 🔄 **Real-time updates** using long-polling technique
- 🎯 **Flexible API** supporting both component and hook patterns
- 🛡️ **Error handling** with automatic retry logic
- ⚡ **Configurable intervals** and timeouts
- 🌐 **CORS enabled** for cross-origin requests

## Installation

```bash
# Clone the repository
git clone https://github.com/edenreich/Long-Polling.git
cd Long-Polling

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Quick Start

### 1. Start the Server

```bash
npm run dev
```

The server will start on `http://localhost:3000` with:
- Demo page: `http://localhost:3000/`
- Recipes API: `http://localhost:3000/api/recipes`
- Health check: `http://localhost:3000/health`

### 2. Use in React Components

```jsx
import { LongPollingClient, useLongPolling } from './src/LongPolling.jsx';

// Component-based approach
function RecipeList() {
  return (
    <LongPollingClient
      url="/api/recipes"
      interval={1000}
      render={({ data, isConnected, error }) => (
        <div>
          {error && <div>Error: {error}</div>}
          {isConnected && <div>Connected!</div>}
          {data && (
            <ul>
              {data.map(recipe => (
                <li key={recipe.name}>{recipe.name} - ${recipe.price}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    />
  );
}

// Hook-based approach
function RecipeListHook() {
  const { data, isConnected, error } = useLongPolling('/api/recipes', {
    interval: 1000
  });

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {isConnected && <div>Connected!</div>}
      {data && (
        <ul>
          {data.map(recipe => (
            <li key={recipe.name}>{recipe.name} - ${recipe.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### 3. Use in Vanilla JavaScript

```html
<script type="module">
  import LongPolling from './public/js/LongPolling.js';
  
  const longPolling = new LongPolling('/api/recipes', { interval: 1000 });
  
  longPolling.subscribe(function(recipes) {
    console.log('New recipes:', recipes);
    // Update your UI here
  });
  
  longPolling.start();
</script>
```

## API Reference

### LongPollingClient Component

```jsx
<LongPollingClient
  url="/api/endpoint"           // API endpoint to poll
  interval={1000}               // Polling interval in ms (default: 1000)
  timeout={25000}               // Request timeout in ms (default: 25000)
  onDataUpdate={handleUpdate}   // Callback when data changes
  render={renderFunction}       // Render function for custom UI
  children={children}           // Alternative to render prop
/>
```

### useLongPolling Hook

```jsx
const { data, isConnected, error, timestamp } = useLongPolling(url, {
  interval: 1000,              // Polling interval in ms
  timeout: 25000,              // Request timeout in ms
  onDataUpdate: handleUpdate   // Callback when data changes
});
```

### LongPolling Class

```javascript
const longPolling = new LongPolling('/api/endpoint', {
  interval: 1000,
  timeout: 25000
});

longPolling.subscribe(callback);
longPolling.start();
longPolling.stop();
```

## Server-Side Implementation

The server provides a `LongPollingServer` class for handling data changes:

```javascript
import { LongPollingServer } from './src/server.jsx';

const longPollingServer = new LongPollingServer();

// Check for data changes
app.get('/api/data', async (req, res) => {
  const result = await longPollingServer.check('data-key', async () => {
    // Return your data here
    return await fetchDataFromDatabase();
  }, 1000);
  
  res.json(result);
});
```

## Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
NODE_ENV=development
```

### Babel Configuration

The project includes Babel configuration for JSX support:

```json
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

## Project Structure

```
Long-Polling/
├── src/
│   ├── LongPolling.jsx        # React components and hooks
│   ├── server.jsx             # Express server with JSX
│   └── components/
│       └── RecipeList.jsx     # Example React components
├── public/
│   └── js/
│       └── LongPolling.js     # Browser-compatible client
├── package.json
├── .babelrc
└── README.md
```

## Examples

### Real-time Chat

```jsx
function ChatRoom() {
  const { data: messages } = useLongPolling('/api/chat', {
    interval: 500
  });

  return (
    <div className="chat-room">
      {messages?.map(message => (
        <div key={message.id} className="message">
          <strong>{message.user}:</strong> {message.text}
        </div>
      ))}
    </div>
  );
}
```

### Live Dashboard

```jsx
function Dashboard() {
  const { data: metrics } = useLongPolling('/api/metrics', {
    interval: 2000
  });

  return (
    <div className="dashboard">
      <div className="metric">
        <h3>CPU Usage</h3>
        <span>{metrics?.cpu}%</span>
      </div>
      <div className="metric">
        <h3>Memory</h3>
        <span>{metrics?.memory}GB</span>
      </div>
    </div>
  );
}
```

## Performance Considerations

- **Polling Interval**: Choose appropriate intervals based on your data update frequency
- **Timeout Handling**: Set reasonable timeouts to prevent hanging requests
- **Error Retry**: The library automatically retries failed requests with exponential backoff
- **Memory Management**: Components automatically clean up when unmounted

## Browser Support

- Modern browsers with ES6+ support
- Fetch API support required
- AbortController support for request cancellation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Original Repository

This is a rewrite of the original [Long-Polling](https://github.com/edenreich/Long-Polling) library by edenreich, converted to work with Node.js and JSX.

## Support

For issues and questions, please check the original repository or create an issue in this fork.
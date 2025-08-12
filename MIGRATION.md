# Migration Guide: PHP to Node.js/JSX

This document explains the changes made when converting the original PHP/JavaScript Long-Polling library to a modern Node.js/JSX implementation.

## What Changed

### 1. **Backend Technology**
- **Before**: PHP with custom long-polling implementation
- **After**: Node.js with Express.js and modern ES modules

### 2. **Frontend Technology**
- **Before**: Vanilla JavaScript with XMLHttpRequest
- **After**: Modern JavaScript with Fetch API, React components, and hooks

### 3. **Architecture**
- **Before**: Single PHP file with embedded JavaScript
- **After**: Modular architecture with separate client and server code

## Code Comparison

### Server-Side (Backend)

#### Original PHP Version
```php
<?php
require_once __DIR__ . '/../vendor/autoload.php';

\Reich\PHP\LongPolling::check(300, function() {
    $recipes = file_get_contents('data.json');
    return $recipes;
});
?>
```

#### New Node.js Version
```javascript
// In server.jsx
const result = await longPollingServer.check('recipes', async () => {
    // Return your data here
    return await fetchDataFromDatabase();
}, 1000);

res.json(result);
```

### Client-Side (Frontend)

#### Original JavaScript Version
```javascript
var LongPolling = (function(window, undefined) {
    var listener;
    
    var listenForChanges = function(url, timestamp) {
        var xhr = new XMLHttpRequest();
        // ... XMLHttpRequest implementation
    };
    
    var options = {
        get: listenForChanges,
        subscribe: registerListener
    };
    
    return options;
})(window);

// Usage
LongPolling.get('server.php').subscribe(function(recipes) {
    // Handle data updates
});
```

#### New JavaScript Version
```javascript
// Modern class-based approach
const longPolling = new LongPolling('/api/recipes', { interval: 1000 });

longPolling.subscribe(function(recipes) {
    // Handle data updates
});

longPolling.start();
```

#### New React Component Version
```jsx
import { LongPollingClient } from './LongPolling.jsx';

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
```

#### New React Hook Version
```jsx
import { useLongPolling } from './LongPolling.jsx';

function RecipeList() {
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

## Key Improvements

### 1. **Modern JavaScript Features**
- ES6+ syntax (arrow functions, async/await, destructuring)
- Fetch API instead of XMLHttpRequest
- AbortController for request cancellation
- ES modules instead of IIFE pattern

### 2. **React Integration**
- Ready-to-use React components
- Custom hooks for easy integration
- Render props pattern for flexibility
- Automatic cleanup on unmount

### 3. **Better Error Handling**
- Automatic retry logic
- Timeout handling
- Network error recovery
- Graceful degradation

### 4. **Performance Improvements**
- Configurable polling intervals
- Request cancellation support
- Memory leak prevention
- Optimized re-renders

### 5. **Developer Experience**
- TypeScript-friendly structure
- Comprehensive documentation
- Multiple usage patterns
- Built-in demos and examples

## Migration Steps

### 1. **Update Dependencies**
```bash
# Remove old PHP dependencies
composer remove reich/longpolling

# Install new Node.js dependencies
npm install
```

### 2. **Update Server Code**
```javascript
// Replace PHP long-polling with Node.js version
import { LongPollingServer } from './src/server.jsx';

const longPollingServer = new LongPollingServer();

app.get('/api/data', async (req, res) => {
    const result = await longPollingServer.check('data-key', async () => {
        return await fetchDataFromDatabase();
    }, 1000);
    
    res.json(result);
});
```

### 3. **Update Client Code**
```javascript
// Option 1: Use the class-based approach
import LongPolling from './public/js/LongPolling.js';

const longPolling = new LongPolling('/api/data', { interval: 1000 });
longPolling.subscribe(handleDataUpdate);
longPolling.start();

// Option 2: Use React components
import { LongPollingClient } from './src/LongPolling.jsx';

<LongPollingClient url="/api/data" interval={1000} />

// Option 3: Use React hooks
import { useLongPolling } from './src/LongPolling.jsx';

const { data, isConnected, error } = useLongPolling('/api/data', { interval: 1000 });
```

## Backward Compatibility

The new library maintains the core concept of long-polling but provides multiple interfaces:

1. **Class-based API** - Similar to the original but modernized
2. **React Components** - For React applications
3. **React Hooks** - For functional components
4. **Vanilla JavaScript** - For non-React applications

## Testing the Migration

1. **Start the new server**: `npm run dev`
2. **Visit the demo**: `http://localhost:3000`
3. **Test the API**: `http://localhost:3000/api/recipes`
4. **Check health**: `http://localhost:3000/health`

## Benefits of the New Version

- **Better Performance**: Modern JavaScript engines and optimized algorithms
- **Easier Maintenance**: Modular code structure and clear separation of concerns
- **React Ready**: Built-in React support without additional libraries
- **Better Testing**: Easier to unit test individual components
- **Modern Tooling**: Babel, ES modules, and modern development workflow
- **Cross-Platform**: Works in Node.js, browsers, and React Native
- **Type Safety**: Ready for TypeScript integration
- **Documentation**: Comprehensive examples and API documentation

## Support

If you encounter issues during migration:
1. Check the new README.md for updated usage examples
2. Review the demo files in the `public/` directory
3. Examine the React component examples in `src/components/`
4. Test with the built-in demo server first

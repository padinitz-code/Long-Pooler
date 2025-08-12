import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, '../public')));

// Store for tracking data changes
const dataStore = new Map();
const clients = new Map();

/**
 * LongPolling Server Class
 * Handles server-side long-polling logic
 */
class LongPollingServer {
  constructor() {
    this.dataCache = new Map();
    this.lastModified = new Map();
  }

  /**
   * Check for data changes and return appropriate response
   * @param {string} key - Data identifier
   * @param {Function} dataProvider - Function that provides current data
   * @param {number} checkInterval - How often to check for changes (ms)
   * @returns {Object} Response with data and change status
   */
  async check(key, dataProvider, checkInterval = 1000) {
    try {
      const currentData = await dataProvider();
      const currentHash = JSON.stringify(currentData);
      const lastHash = this.dataCache.get(key);
      const lastModified = this.lastModified.get(key) || 0;
      
      const hasChanged = currentHash !== lastHash;
      const now = Date.now();
      
      if (hasChanged) {
        this.dataCache.set(key, currentHash);
        this.lastModified.set(key, now);
      }
      
      return {
        content: currentData,
        changed: hasChanged,
        timestamp: now,
        lastModified: lastModified
      };
    } catch (error) {
      console.error('LongPolling check error:', error);
      return {
        content: null,
        changed: false,
        timestamp: Date.now(),
        error: error.message
      };
    }
  }

  /**
   * Get data for a specific key
   * @param {string} key - Data identifier
   * @returns {Object} Current data state
   */
  getData(key) {
    return {
      content: this.dataCache.get(key),
      lastModified: this.lastModified.get(key) || 0
    };
  }

  /**
   * Force update for a specific key
   * @param {string} key - Data identifier
   * @param {any} newData - New data to set
   */
  forceUpdate(key, newData) {
    this.dataCache.set(key, JSON.stringify(newData));
    this.lastModified.set(key, Date.now());
  }
}

// Initialize LongPolling server
const longPollingServer = new LongPollingServer();

// Routes
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public/demo.html'));
});

// API Routes
app.get('/api/recipes', async (req, res) => {
  const timestamp = req.query.timestamp ? parseInt(req.query.timestamp) : 0;
  
  try {
    // Simulate data provider function
    const dataProvider = async () => {
      // In a real app, this could be a database query
      const recipes = [
        { name: 'Pasta Carbonara', price: 12.99 },
        { name: 'Margherita Pizza', price: 15.99 },
        { name: 'Caesar Salad', price: 8.99 }
      ];
      
      // Simulate occasional price changes
      if (Math.random() > 0.7) {
        recipes.forEach(recipe => {
          recipe.price = (recipe.price + (Math.random() - 0.5) * 2).toFixed(2);
        });
      }
      
      return recipes;
    };
    
    const result = await longPollingServer.check('recipes', dataProvider, 1000);
    res.json(result);
    
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

// Custom data endpoint
app.get('/api/data/:key', async (req, res) => {
  const { key } = req.params;
  const timestamp = req.query.timestamp ? parseInt(req.query.timestamp) : 0;
  
  try {
    const dataProvider = async () => {
      // Return mock data for the key
      return {
        id: key,
        value: Math.random() * 100,
        timestamp: Date.now()
      };
    };
    
    const result = await longPollingServer.check(key, dataProvider, 1000);
    res.json(result);
    
  } catch (error) {
    console.error(`Error fetching data for key ${key}:`, error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: Date.now(),
    uptime: process.uptime()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Long-Polling JSX Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🍕 Recipes API: http://localhost:${PORT}/api/recipes`);
});

export default app;

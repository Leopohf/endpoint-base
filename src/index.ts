import express from 'express';
import * as http from 'http';
import debug from 'debug';

import { CommonRoutesConfig } from './routes/common/common.routes.config';
import { MathRoutesConfig } from './routes/math/math.routes.config';
import { HealtCheck } from './routes/health-check/helt-check.routes.config';

// Create a new express app instance
const app: express.Application = express();
// Create server
const server = http.createServer(app);
// set port, listen for requests
const port: number = 3000;
// Create a set of routes
const routes: Array<CommonRoutesConfig> = [];
// Create debug element for the app
const debugLog: debug.IDebugger = debug('app');

// adding middleware to parse all incoming requests as JSON
app.use(express.json());

// adding routes to the app
routes.push(new MathRoutesConfig(app));
routes.push(new HealtCheck(app));

// starting server and listening for request on port 3000
server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  console.log(`Server running at http://localhost:${port}`);
});
import express from 'express';
import * as https from 'https';

import { CommonRoutesConfig } from './routes/common/common.routes.config';
import { MathRoutesConfig } from './routes/math/math.routes.config';

// Create a new express app instance
const app: express.Application = express();
// Create server
const server = https.createServer(app);
// set port, listen for requests
const port: number = 3000;
// Create a set of routes
const routes: Array<CommonRoutesConfig> = [];

// adding middleware to parse all incoming requests as JSON
app.use(express.json());

// adding routes to the app
routes.push(new MathRoutesConfig(app));


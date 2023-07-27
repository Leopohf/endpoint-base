import express from 'express';
import * as http from 'http';
import { Application } from 'express';
import { CommonRoutesConfig } from '../routes/common/common.routes.config';
import { debug } from 'debug';
import { MathRoutesConfig } from '../routes/math/math.routes.config';
import { HealtCheck } from '../routes/health-check/helt-check.routes.config';
import { NotFound } from '../routes/not-found/not-found.routes.config';

class App {
    private app: Application;
    public server: any;
    private port: number;
    private debugLog: debug.IDebugger;
    private routes: Array<CommonRoutesConfig> = [];

    constructor(appInit: {
        port: number;
    }) {
        // Create a new express app instance
        this.app = express();
        // Create server
        this.server = http.createServer(this.app);
        // set port, listen for requests
        this.port = appInit.port;
        // Create debug element for the app
        this.debugLog = debug('app');

        //adding middleware to parse all incoming requests as JSON
        this.app.use(express.json());

        //starting routes
        this.initRoutes();
    }

    // adding routes to the app
    private initRoutes(): void {
        this.routes.push(new MathRoutesConfig(this.app));
        this.routes.push(new HealtCheck(this.app));
        this.routes.push(new NotFound(this.app));
    }

    // starting server and listening for request on defined port
    public startServer(): void {
        this.server.listen(this.port, this.setRoutes());
        console.log(`Server running at http://localhost:${this.port}`);
    }

    // define routes for the app
    public setRoutes(): void {
        this.routes.forEach((route: CommonRoutesConfig) => {
            this.debugLog(`Routes configured for ${route.getName()}`);
        });
    }

    // stop server
    public stopServer(): void {
        this.server.close();
        console.log(`Server stopped at http://localhost:${this.port}`);
    }
}

export default App;
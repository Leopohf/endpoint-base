import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';

export class MathRoutesConfig extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'MathRoutes');
    }

    configureRoutes(): express.Application {
        return this.app;
    }

}
import { CommonRoutesConfig } from './common.routes.config';
import express from 'express';

export class MathRoutesConfig extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'MathRoutes');
    }

}
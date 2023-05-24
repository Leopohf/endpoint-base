import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';

import MathController  from '../../controllers/math-operation.controller';

export class MathRoutesConfig extends CommonRoutesConfig {

    private static ROUTE_MATH_PREFIX: string = '/math';
    private static ROUTE_MATH_SINGLE_PREFIX: string = '/single';
    private static ROUTE_MATH_MULTIPLE_PREFIX: string = '/multiple';

    constructor(app: express.Application) {
        super(app, 'MathRoutes');
    }

    configureRoutes(): express.Application {

        // route handlers
        // basic add, subtract, multiply, divide operations
        const SINGLE_ROUTE = `${MathRoutesConfig.ROUTE_MATH_PREFIX + MathRoutesConfig.ROUTE_MATH_SINGLE_PREFIX}`;
        this.app
            .route(`${SINGLE_ROUTE}/add`)
            .get(MathController.singleAdd);

        this.app
            .route(`${SINGLE_ROUTE}/subtract`)
            .get(MathController.singleSubtract);

        this.app
            .route(`${SINGLE_ROUTE}/multiply`)
            .get(MathController.singleMultiply);

        this.app
            .route(`${SINGLE_ROUTE}/divide`)
            .get(MathController.singleDivide);

        // multiple operations in one request
        const MULTIPLE_ROUTE = `${MathRoutesConfig.ROUTE_MATH_PREFIX + MathRoutesConfig.ROUTE_MATH_MULTIPLE_PREFIX}`;
        this.app
            .route(`${MULTIPLE_ROUTE}/add`)
            .get(MathController.multipleAdd);

        this.app
            .route(`${MULTIPLE_ROUTE}/subtract`)
            .get(MathController.multipleSubtract);

        this.app
            .route(`${MULTIPLE_ROUTE}/multiply`)
            .get(MathController.multipleMultiply);

        this.app
            .route(`${MULTIPLE_ROUTE}/divide`)
            .get(MathController.multipleDivide);

        return this.app;
    }

}
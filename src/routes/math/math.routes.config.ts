import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';

export class MathRoutesConfig extends CommonRoutesConfig {

    private static ROUTE_MATH_PREFIX = '/math';

    constructor(app: express.Application) {
        super(app, 'MathRoutes');
    }

    configureRoutes(): express.Application {

        // route handlers
        // basic add, subtract, multiply, divide operations
        this.app.route(`${MathRoutesConfig.ROUTE_MATH_PREFIX}/add`)
            .get((req: express.Request, res: express.Response) => {
                const { a, b } = req.body;
                res.status(200).send({ result: a + b });
            });

        this.app.route(`${MathRoutesConfig.ROUTE_MATH_PREFIX}/subtract`)
            .get((req: express.Request, res: express.Response) => {
                const { a, b } = req.body;
                res.status(200).send({ result: a - b });
            });

        this.app.route(`${MathRoutesConfig.ROUTE_MATH_PREFIX}/multiply`)
            .get((req: express.Request, res: express.Response) => {
                const { a, b } = req.body;
                res.status(200).send({ result: a * b });
            });

        this.app.route(`${MathRoutesConfig.ROUTE_MATH_PREFIX}/divide`)
            .get((req: express.Request, res: express.Response) => {
                const { a, b } = req.body;
                res.status(200).send({ result: a / b });
            });

        return this.app;
    }

}
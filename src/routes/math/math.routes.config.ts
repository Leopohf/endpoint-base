import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
import { MathSingleOperation } from '../../models/in/math-single-operation.dto';
import { MathSingleResult } from '../../models/out/math-single-result.dto';
import { Result } from '../../models/out/result.dto';
import { status } from '../../models/constants/status.type';

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
                const operators: MathSingleOperation = req.body;
                const result: Result = this.formatResponse({ result: operators.operator1 + operators.operator2 }, 200);
                res.status(result.statusCode).send(result);
            });

        this.app.route(`${MathRoutesConfig.ROUTE_MATH_PREFIX}/subtract`)
            .get((req: express.Request, res: express.Response) => {
                const operators: MathSingleOperation = req.body;
                const result: Result = this.formatResponse({ result: operators.operator1 - operators.operator2 }, 200);
                res.status(result.statusCode).send(result);
            });

        this.app.route(`${MathRoutesConfig.ROUTE_MATH_PREFIX}/multiply`)
            .get((req: express.Request, res: express.Response) => {
                const operators: MathSingleOperation = req.body;
                const result: Result = this.formatResponse({ result: operators.operator1 * operators.operator2 }, 200);
                res.status(result.statusCode).send(result);
            });

        this.app.route(`${MathRoutesConfig.ROUTE_MATH_PREFIX}/divide`)
            .get((req: express.Request, res: express.Response) => {
                const operators: MathSingleOperation = req.body;
                const result: Result = this.formatResponse({ result: operators.operator1 / operators.operator2 }, 200);
                res.status(result.statusCode).send(result);
            });

        return this.app;
    }

    private formatResponse(data: MathSingleResult, statusCode: status, errorMessage?: string): Result {
        return {
            data: data,
            statusCode: statusCode,
            errorMessage: errorMessage
        };
    }
}
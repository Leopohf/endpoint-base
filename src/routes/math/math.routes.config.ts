import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
import { MathSingleOperation } from '../../models/in/math-single-operation.dto';
import { MathSingleResult } from '../../models/out/math-single-result.dto';
import { Result } from '../../models/out/result.dto';
import { status } from '../../models/constants/status.type';
import { MathMultipleResult } from '../../models/out/math-multiple-result.dto';
import { MathMultipleOperation } from '../../models/in/math-multiple-operation.dto';

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
        this.app.route(`${MathRoutesConfig.ROUTE_MATH_PREFIX + MathRoutesConfig.ROUTE_MATH_SINGLE_PREFIX}/add`)
            .get((req: express.Request, res: express.Response) => {
                const operators: MathSingleOperation = req.body;
                const result: Result = this.formatResponse({ result: operators.operator1 + operators.operator2 }, 200);
                res.status(result.statusCode).send(result);
            });

        this.app.route(`${MathRoutesConfig.ROUTE_MATH_PREFIX + MathRoutesConfig.ROUTE_MATH_SINGLE_PREFIX}/subtract`)
            .get((req: express.Request, res: express.Response) => {
                const operators: MathSingleOperation = req.body;
                const result: Result = this.formatResponse({ result: operators.operator1 - operators.operator2 }, 200);
                res.status(result.statusCode).send(result);
            });

        this.app.route(`${MathRoutesConfig.ROUTE_MATH_PREFIX + MathRoutesConfig.ROUTE_MATH_SINGLE_PREFIX}/multiply`)
            .get((req: express.Request, res: express.Response) => {
                const operators: MathSingleOperation = req.body;
                const result: Result = this.formatResponse({ result: operators.operator1 * operators.operator2 }, 200);
                res.status(result.statusCode).send(result);
            });

        this.app.route(`${MathRoutesConfig.ROUTE_MATH_PREFIX + MathRoutesConfig.ROUTE_MATH_SINGLE_PREFIX}/divide`)
            .get((req: express.Request, res: express.Response) => {
                const operators: MathSingleOperation = req.body;
                const result: Result = this.formatResponse({ result: operators.operator1 / operators.operator2 }, 200);
                res.status(result.statusCode).send(result);
            });

        // multiple operations in one request
        this.app.route(`${MathRoutesConfig.ROUTE_MATH_PREFIX + MathRoutesConfig.ROUTE_MATH_MULTIPLE_PREFIX}/add`)
            .get((req: express.Request, res: express.Response) => {
                const operators: MathMultipleOperation = req.body;
                const result: Result = this.formatResponse({results: operators.operations.map(o => o.operator1 + o.operator2)}, 200);
                res.status(result.statusCode).send(result);
            });

        this.app.route(`${MathRoutesConfig.ROUTE_MATH_PREFIX + MathRoutesConfig.ROUTE_MATH_MULTIPLE_PREFIX}/subtract`)
            .get((req: express.Request, res: express.Response) => {
                const operators: MathMultipleOperation = req.body;
                const result: Result = this.formatResponse({results: operators.operations.map(o => o.operator1 - o.operator2)}, 200);
                res.status(result.statusCode).send(result);
            });

        this.app.route(`${MathRoutesConfig.ROUTE_MATH_PREFIX + MathRoutesConfig.ROUTE_MATH_MULTIPLE_PREFIX}/multiply`)
            .get((req: express.Request, res: express.Response) => {
                const operators: MathMultipleOperation = req.body;
                const result: Result = this.formatResponse({results: operators.operations.map(o => o.operator1 * o.operator2)}, 200);
                res.status(result.statusCode).send(result);
            });

        this.app.route(`${MathRoutesConfig.ROUTE_MATH_PREFIX + MathRoutesConfig.ROUTE_MATH_MULTIPLE_PREFIX}/divide`)
            .get((req: express.Request, res: express.Response) => {
                const operators: MathMultipleOperation = req.body;
                const result: Result = this.formatResponse({results: operators.operations.map(o => o.operator1 / o.operator2)}, 200);
                res.status(result.statusCode).send(result);
            });

        return this.app;
    }

    private formatResponse(data: MathSingleResult| MathMultipleResult, statusCode: status, errorMessage?: string): Result {
        return {
            data: data,
            statusCode: statusCode,
            errorMessage: errorMessage
        };
    }
}
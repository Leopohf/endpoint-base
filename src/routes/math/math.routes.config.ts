import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';

export class MathRoutesConfig extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'MathRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/math/add')
            .get((req: express.Request, res: express.Response) => {
                const { a, b } = req.body;
                res.status(200).send({ result: a + b });
            });

        this.app.route('/math/subtract')
            .get((req: express.Request, res: express.Response) => {
                const { a, b } = req.body;
                res.status(200).send({ result: a - b });
            });

        this.app.route('/math/multiply')
            .get((req: express.Request, res: express.Response) => {
                const { a, b } = req.body;
                res.status(200).send({ result: a * b });
            });

        this.app.route('/math/divide')
            .get((req: express.Request, res: express.Response) => {
                const { a, b } = req.body;
                res.status(200).send({ result: a / b });
            });
        
        return this.app;
    }

}
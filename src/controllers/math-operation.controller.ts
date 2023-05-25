import express from "express";
import { MathSingleOperation } from "../models/in/math-single-operation.dto";
import { MathSingleResult } from "../models/out/math-single-result.dto";
import { MathMultipleOperation } from "../models/in/math-multiple-operation.dto";
import { MathMultipleResult } from "../models/out/math-multiple-result.dto";
import { Result } from "../models/out/result.dto";
import { Status } from "../models/constants/status.type";

class MathController {

    // single operation controlls ==============================================
    singleAdd(req: express.Request, res: express.Response): void {
        const operators: MathSingleOperation = req.body;
        const result: Result = {
            data: {
                result: operators.operator1 + operators.operator2
            } as MathSingleResult,
        };
        res.status(Status.SUCCESS).send(result as Result);
    }

    singleSubtract(req: express.Request, res: express.Response): void {
        const operators: MathSingleOperation = req.body;
        const result: Result = {
            data: {
                result: operators.operator1 - operators.operator2
            } as MathSingleResult,
        };
        res.status(Status.SUCCESS).send(result as Result);
    }

    singleMultiply(req: express.Request, res: express.Response): void {
        const operators: MathSingleOperation = req.body;
        const result: Result = {
            data: {
                result: operators.operator1 * operators.operator2
            } as MathSingleResult,
        };
        res.status(Status.SUCCESS).send(result as Result);
    }

    singleDivide(req: express.Request, res: express.Response): void {
        const operators: MathSingleOperation = req.body;
        let result: Result;
        if (operators.operator2 !== 0) {
            result = {
                data: {
                    result: operators.operator1 / operators.operator2
                } as MathSingleResult,
            };
        } else {
            result = {
                data: {
                    result: null
                },
                errorMessage: "Cannot divide by 0"
            };
        }
        res.status(Status.SUCCESS).send(result as Result);
    }

    // multiple operation controlls ==============================================
    multipleAdd(req: express.Request, res: express.Response): void {
        const operators: MathMultipleOperation = req.body;
        const result: Result = {
            data: {
                results: operators.operations.map(o => o.operator1 + o.operator2)
            } as MathMultipleResult,
        };
        res.status(Status.SUCCESS).send(result as Result);
    }

    multipleSubtract(req: express.Request, res: express.Response): void {
        const operators: MathMultipleOperation = req.body;
        const result: Result = {
            data: {
                results: operators.operations.map(o => o.operator1 - o.operator2)
            } as MathMultipleResult,
        };
        res.status(Status.SUCCESS).send(result as Result);
    }

    multipleMultiply(req: express.Request, res: express.Response): void {
        const operators: MathMultipleOperation = req.body;
        const result: Result = {
            data: {
                results: operators.operations.map(o => o.operator1 * o.operator2)
            } as MathMultipleResult,
        };
        res.status(Status.SUCCESS).send(result as Result);
    }

    multipleDivide(req: express.Request, res: express.Response): void {
        const operators: MathMultipleOperation = req.body;
        const result: Result = {
            data: {
                results: operators.operations.map(o => o.operator2!== 0 ? o.operator1 / o.operator2 : null)
            } as MathMultipleResult,
        };
        if(result.data.results.includes(null)){
            result.errorMessage = "Cannot divide by 0";
        }
        res.status(Status.SUCCESS).send(result as Result);
    }

}

export default new MathController();
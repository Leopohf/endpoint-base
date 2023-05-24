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
        } as Result;
        res.status(Status.SUCCESS).send(result);
    }

    singleSubtract(req: express.Request, res: express.Response): void {
        const operators: MathSingleOperation = req.body;
        const result: Result = {
            data: {
                result: operators.operator1 - operators.operator2
            } as MathSingleResult,
        } as Result;
        res.status(Status.SUCCESS).send(result);
    }

    singleMultiply(req: express.Request, res: express.Response): void {
        const operators: MathSingleOperation = req.body;
        const result: Result = {
            data: {
                result: operators.operator1 * operators.operator2
            } as MathSingleResult,
        } as Result;
        res.status(Status.SUCCESS).send(result);
    }

    singleDivide(req: express.Request, res: express.Response): void {
        const operators: MathSingleOperation = req.body;
        const result: Result = {
            data: {
                result: operators.operator1 / operators.operator2
            } as MathSingleResult,
        } as Result;
        res.status(Status.SUCCESS).send(result);
    }

    // multiple operation controlls ==============================================
    multipleAdd(req: express.Request, res: express.Response): void {
        const operators: MathMultipleOperation = req.body;
        const result: Result = {
            data: {
                results: operators.operations.map(o => o.operator1 + o.operator2)
            } as MathMultipleResult,
        } as Result;
        res.status(Status.SUCCESS).send(result);
    }

    multipleSubtract(req: express.Request, res: express.Response): void {
        const operators: MathMultipleOperation = req.body;
        const result: Result = {
            data: {
                results: operators.operations.map(o => o.operator1 - o.operator2)
            } as MathMultipleResult,
        } as Result;
        res.status(Status.SUCCESS).send(result);
    }

    multipleMultiply(req: express.Request, res: express.Response): void {
        const operators: MathMultipleOperation = req.body;
        const result: Result = {
            data: {
                results: operators.operations.map(o => o.operator1 * o.operator2)
            } as MathMultipleResult,
        } as Result;
        res.status(Status.SUCCESS).send(result);
    }

    multipleDivide(req: express.Request, res: express.Response): void {
        const operators: MathMultipleOperation = req.body;
        const result: Result = {
            data: {
                results: operators.operations.map(o => o.operator1 / o.operator2)
            } as MathMultipleResult,
        } as Result;
        res.status(Status.SUCCESS).send(result);
    }

    private formatResponse(data: MathSingleResult | MathMultipleResult, errorMessage?: string): Result {
        return {
            data: data,
            errorMessage: errorMessage
        };
    }

}

export default new MathController();
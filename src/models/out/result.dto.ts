import { status } from "../constants/status.type";

export interface Result {
    statusCode: status;
    errorMessage?: string;
    data: any;
}
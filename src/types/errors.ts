import {AxiosError} from "axios";

enum Error {
    INVALID_FORM = 'INVALID_FORM'
}

interface IFiledMessage {
    readonly field: string;
    readonly message: string;
}

interface IErrorResponse {

    readonly timestamp: string
    readonly error: Error
    readonly message: String | undefined
    readonly fieldMessages: IFiledMessage[] | undefined
}

export {
    Error
};

export type {
    IErrorResponse,
    IFiledMessage
};

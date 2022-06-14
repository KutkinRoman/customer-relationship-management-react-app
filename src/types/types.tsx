import {UserRole} from "../model/user/UserRole";

export enum EntityStatus {
    ACTIVE = 'ACTIVE',
    NOT_ACTIVE = 'NOT_ACTIVE',
    DELETE = 'DELETE'
}

export interface ICustomerRequestCompact {
    readonly id: number
    readonly createDate: string
}

export interface VisitCurrent {
    readonly personId: number;
    readonly dateTime: string;
    readonly visitId: number;
    readonly info: number;
    readonly personName: number;
}

export interface CashBook {
    cashSumEnd: number;
    nonCashSumEnd: number;
    sumEndTotal: number;
    cashSumCreditTotal: number;
    nonCashSumCreditTotal: number;
    sumCreditTotal: number;
    transactions: CashTransaction[];
}

export interface CashTransaction {
    readonly id: number;
    readonly dateTime: string;
    readonly info: string;
    readonly sum: number;
    readonly description: string;
    status: EntityStatus;
}

export interface IAuthResponse {
    accessToken: string
    refreshToken: string
}

export interface IAccessTokenDecode {
    sub: string
    roles: UserRole[]
}



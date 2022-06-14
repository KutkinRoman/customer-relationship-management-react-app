import {AUTH_API} from "./api";
import {CashBook} from "../types/types";

export class CashTransactionService {

    public static async getCashBook() {
        return await AUTH_API.get<CashBook>('/api/v1/transactions')
    }
}
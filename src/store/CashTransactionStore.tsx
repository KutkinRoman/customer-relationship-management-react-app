import {FetchDataStore} from "./FetchDataStore";
import {CashBook} from "../types/types";
import {CashTransactionService} from "../service/CashTransactionService";

export class CashTransactionStore extends FetchDataStore<CashBook> {

    constructor() {
        super(null, CashTransactionService.getCashBook);
    }
}
import {AUTH_API} from "./api";
import {IPage} from "../model/Page";
import {ICoachTransaction} from "../model/coach/CoachTransaction";
import {ICoachBalance} from "../model/coach/CoachBalance";
import {ICoachSumCredit} from "../model/coach/CoachSumCredit";

export class CoachTransactionService {

    public static async getTransactionsByCoachId(coachId: number, page?: number, size?: number) {
        return await AUTH_API.get<IPage<ICoachTransaction>>('/api/v1/coach/transactions', {
            params: {
                coachId,
                page,
                size
            }
        })
    }

    public static async getBalanceByCoachId(coachId: number) {
        return await AUTH_API.get<ICoachBalance>('/api/v1/coach/transactions/balance', {
            params: {
                coachId
            }
        })
    }

    public static async getSumCreditByCoachId(coachId: number, startDate: any, endDate: any) {
        return await AUTH_API.get<ICoachSumCredit>('/api/v1/coach/transactions/credit', {
            params: {
                coachId,
                startDate,
                endDate
            }
        })
    }

}
import {makeAutoObservable} from "mobx";
import {ICoachBalance} from "../../model/coach/CoachBalance";
import {ICoachSumCredit} from "../../model/coach/CoachSumCredit";
import {IPage} from "../../model/Page";
import {ICoachTransaction} from "../../model/coach/CoachTransaction";
import {CoachTransactionService} from "../../service/CoachTransactionService";
import {addHours, endOfMonth, startOfMonth} from "date-fns";

export class ProfileCoachTransactionStore {

    coachId: number

    isLoadingBalance: boolean
    isLoadingSumCredit: boolean
    isLoadingPage: boolean

    balance?: ICoachBalance
    sumCredit?: ICoachSumCredit
    pages?: Array<IPage<ICoachTransaction>>

    constructor() {
        this.coachId = 0
        this.isLoadingBalance = true;
        this.isLoadingSumCredit = true;
        this.isLoadingPage = true;
        makeAutoObservable(this)
    }

    setCoachId(coachId: number) {
        this.coachId = coachId
    }

    setIsLoadingBalance(isLoading: boolean) {
        this.isLoadingBalance = isLoading
    }

    setIsLoadingSumCredit(isLoading: boolean) {
        this.isLoadingSumCredit = isLoading
    }

    setBalance(balance: ICoachBalance) {
        this.balance = balance
    }

    setSumCredit(sumCredit: ICoachSumCredit) {
        this.sumCredit = sumCredit
    }

    async fetchBalance() {
        this.setIsLoadingBalance(true)
        try {
            const response = await CoachTransactionService.getBalanceByCoachId(this.coachId)
            this.setBalance(response.data)
        } finally {
            this.setIsLoadingBalance(false)
        }
    }

    fetchSumCreditByMonth(date: Date) {
        const startDate = addHours(startOfMonth(date), 3).toISOString().substring(0, 10)
        const endDate = addHours(endOfMonth(date), 3).toISOString().substring(0, 10)
        this.fetchSumCredit(startDate, endDate)
    }

    async fetchSumCredit(startDate: string, endDate: string) {
        this.setIsLoadingSumCredit(true)
        try {
            const response = await CoachTransactionService.getSumCreditByCoachId(this.coachId, startDate, endDate)
            this.setSumCredit(response.data)
        } finally {
            this.setIsLoadingSumCredit(false)
        }
    }

}
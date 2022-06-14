import {AUTH_API} from "./api";
import {Coach} from "../model/coach/Coach";
import {CoachFull} from "../model/coach/CoachFull";

export class CoachService {

    public static async getCoachList() {
        return await AUTH_API.get<Coach[]>('/api/v1/coach/list')
    }

    public static async getCoachBalanceList() {
        return await AUTH_API.get<CoachFull[]>('/api/v1/coach/balance/list')
    }

}

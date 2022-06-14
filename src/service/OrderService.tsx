import {VisitCurrent} from "../types/types";
import {AUTH_API} from "./api";

export class OrderService {

    public static async getCurrentVisits() {
        return await AUTH_API.get<VisitCurrent[]>('/api/v1/orders/current-visits')
    }
}
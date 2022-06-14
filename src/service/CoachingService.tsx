import {API, AUTH_API} from "./api";
import {ICoachingDirection} from "../model/coach/CoachingDirection";
import {ICoachingSession} from "../model/coach/CoachingSession";

export class CoachingService {

    public static async getCoachingDirections() {
        return await AUTH_API.get<ICoachingDirection[]>('/api/v1/coaching/direction')
    }

    public static async getCoachingDirectionsPublic() {
        return await API.get<ICoachingDirection[]>('/api/v1/coaching/direction/public')
    }

    public static async getCoachingSessionByDate(date: any) {
        return await AUTH_API.get<ICoachingSession[]>('/api/v1/coaching/sessions', {
            params: {
                date
            }
        })
    }

    public static async getCoachingSessionByDatePublic(date: any) {
        return await API.get<ICoachingSession[]>('/api/v1/coaching/sessions', {
            params: {
                date
            }
        })
    }


}
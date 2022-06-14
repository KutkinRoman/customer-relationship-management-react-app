import {FetchDataStore} from "../FetchDataStore";
import {CoachService} from "../../service/CoachService";
import {Coach} from "../../model/coach/Coach";

export class CoachStore extends FetchDataStore<Coach[]> {

    constructor() {
        super([], CoachService.getCoachList);
    }

}
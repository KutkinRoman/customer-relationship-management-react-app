import {FetchDataStore} from "../FetchDataStore";
import {Conversation, IConversation} from "../../model/conversation/Conversation";
import {ConversationService} from "../../service/ConversationService";

export class ConversationStore extends FetchDataStore<IConversation[]> {

    constructor() {
        super(null, ConversationService.getConversations);
    }

    setData(value: IConversation[]) {
        super.setData(value.map(v => new Conversation(v)));
    }
}
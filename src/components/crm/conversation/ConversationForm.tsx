import React, {FC} from 'react';
import {ConversationFormStore} from "../../../store/conversation/ConversationFormStore";
import AppButton from "../../UI/button/AppButton";
import PageContentItem from "../../UI/page-content/PageContentItem";
import ConversationMessageItem from "./ConversationMessageItem";
import {observer} from "mobx-react-lite";
import {ConversationMessage} from "../../../model/conversation/ConversationMessage";

interface ConversationFormProps {
    store: ConversationFormStore
    handleOpenTimeTable: (message: ConversationMessage) => void
}

const ConversationForm: FC<ConversationFormProps> = observer(
    ({
         store,
         handleOpenTimeTable
     }) => {
        return (
            <React.Fragment>
                {store.conversation?.messages.map(message =>
                    <PageContentItem
                        sx={{marginTop: '10px', padding: '5px'}}
                    >
                        <ConversationMessageItem
                            key={`conversationMessageItem_${message.id || Math.random()}`}
                            store={store}
                            message={message}
                            handleOpenTimeTable={handleOpenTimeTable}
                        />
                    </PageContentItem>
                )
                }
                <PageContentItem
                    sx={{marginTop: '10px'}}
                >
                    <AppButton
                        variant={'text'}
                        onClick={() => store.createNewMessage()}
                    >
                        Добавить новое сообщение
                    </AppButton>
                </PageContentItem>
            </React.Fragment>
        )
            ;
    });

export default ConversationForm;
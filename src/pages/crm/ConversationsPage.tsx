import React, {useContext, useEffect, useState} from 'react';
import {Container, Grid} from "@mui/material";
import {ConversationStore} from "../../store/conversation/ConversationStore";
import ConversationCard from "../../components/crm/conversation/ConversationCard";
import {observer} from "mobx-react-lite";
import {ConversationFormStore} from "../../store/conversation/ConversationFormStore";
import useModal from "../../hooks/useModal";
import ConversationFormModal from "../../components/crm/conversation/ConversationFormModal";
import {IConversation} from "../../model/conversation/Conversation";
import {ConversationMessage} from "../../model/conversation/ConversationMessage";
import MessagesSessionsTimeTable from "../../components/crm/conversation/time-table/MessagesSessionsTimeTable";
import {CoachingContext} from "../../context/CoachingContext";
import {CoachingTimeTableContext} from "../../context/CoachingTimeTableContext";

const ConversationsPage = observer(() => {

    const coachingDirectionStore = useContext(CoachingContext)
    const coachingTimeTableStore = useContext(CoachingTimeTableContext)
    const [conversationStore] = useState(() => new ConversationStore())
    const [conversationFormStore] = useState(() => new ConversationFormStore())
    const formModal = useModal()
    const timeTableModal = useModal()

    const initFormByConversation = (conversation: IConversation) => {
        conversationFormStore.setConversation(conversation)
        formModal.handleOpen()
    }

    const handleOpenTimeTable = (message: ConversationMessage) => {
        if (message.coachingDirectionId) {
            coachingDirectionStore?.setCurrentDirectionById(message.coachingDirectionId)
            coachingTimeTableStore?.setMessage(message)
            timeTableModal.handleOpen()
        }
    }

    useEffect(() => {
        if (!conversationStore.isLoading) {
            conversationStore.fetch()
        }
    }, [])


    return (
        <React.Fragment>
            <Container
                sx={{marginTop: '50px'}}
            >
                <Grid
                    container
                    spacing={2}
                >
                    {conversationStore.isLoading &&
                        [...new Array(4)].map(() =>
                            <Grid
                                item
                                xs={12}
                                md={6}
                                key={`conversationCardSkeleton_${Math.random()}`}
                            >
                                <ConversationCard
                                    isLoading={true}
                                />
                            </Grid>
                        )
                    }
                    {conversationStore.data?.map(conversation =>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            key={`conversationCard_${conversation.id}`}
                        >
                            <ConversationCard
                                hover={true}
                                conversation={conversation}
                                initFormByConversation={initFormByConversation}
                            />
                        </Grid>
                    )
                    }
                </Grid>
            </Container>
            <ConversationFormModal
                store={conversationFormStore}
                isOpen={formModal.isOpen}
                handleClose={formModal.handleClose}
                handleOpenTimeTable={handleOpenTimeTable}
            />
            <MessagesSessionsTimeTable
                isOpen={timeTableModal.isOpen}
                handleClose={timeTableModal.handleClose}
            />
        </React.Fragment>
    );
});

export default ConversationsPage;
import React, {FC} from 'react';
import {IConversation} from "../../../model/conversation/Conversation";
import {Box, CardContent} from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import AppIconButton from "../../UI/button/AppIconButton";
import EditIcon from '@mui/icons-material/Edit';
import AppDivider from "../../UI/divider/AppDivider";
import AppCard from "../../UI/page-content/AppCard";
import {Heading, SubTitle} from "../../UI/typography/Typography";
import AppAvatar from "../../UI/avatar/AppAvatar";
import {useMouseEnter} from "../../../hooks/useMouseEnter";

interface ConversationCardProps {
    conversation?: IConversation
    initFormByConversation?: (conversation: IConversation) => void
    hover?: boolean
}

const ConversationCard: FC<ConversationCardProps> =
    ({
         conversation,
         initFormByConversation,
         hover
     }) => {

        const {mouseEnter, onMouseEnter, onMouseLeave} = useMouseEnter()


        return (
            <Box
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <AppCard
                    sx={{borderRadius: '16px'}}
                    hover={hover}
                >
                    <CardHeader
                        avatar={
                            <AppAvatar>
                                {conversation?.conversationTitle && conversation.conversationTitle.length > 1
                                    ? conversation?.conversationTitle.substring(0, 2)
                                    : '?'
                                }
                            </AppAvatar>
                        }
                        action={
                            (initFormByConversation && conversation)
                            &&
                            <AppIconButton
                                onClick={() => initFormByConversation(conversation)}
                                color={mouseEnter ? 'primary' : 'inherit'}
                            >
                                <EditIcon/>
                            </AppIconButton>
                        }
                        title={
                            <Heading>
                                {conversation?.conversationTitle || '?'}
                            </Heading>
                        }
                        subheader={
                            <SubTitle>
                                {conversation?.groupTitle}
                            </SubTitle>
                        }
                    />
                    <AppDivider/>
                    <CardContent>
                        <SubTitle>
                            ID группы: {conversation?.groupId}
                        </SubTitle>
                        <SubTitle>
                            ID беседы: {conversation?.peerId}
                        </SubTitle>
                        <SubTitle>
                            Сообщения: {conversation?.messages.length}
                        </SubTitle>
                    </CardContent>
                    <AppDivider/>
                    <CardContent>
                        <SubTitle
                            color={conversation?.isUnavailable ? 'secondary.main' : 'error.main'}
                        >
                            Беседа{conversation?.isUnavailable ? ' доступна ' : ' недоступна '}для отправки сообщений
                        </SubTitle>
                    </CardContent>
                </AppCard>
            </Box>
        )
            ;
    };

export default ConversationCard;
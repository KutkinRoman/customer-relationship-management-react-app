import React, {FC} from 'react';
import {IConversation} from "../../../model/conversation/Conversation";
import {CardContent} from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import AppIconButton from "../../UI/button/AppIconButton";
import EditIcon from '@mui/icons-material/Edit';
import AppDivider from "../../UI/divider/AppDivider";
import AppCard from "../../UI/page-content/AppCard";
import {Caption, Heading, SubTitle} from "../../UI/typography/Typography";

interface ConversationCardProps {
    conversation?: IConversation
    initFormByConversation?: (conversation: IConversation) => void
}

const ConversationCard: FC<ConversationCardProps> =
    ({
         conversation,
         initFormByConversation
     }) => {
        return (
            <AppCard
                sx={{borderRadius: '16px'}}
            >
                <CardHeader
                    avatar={
                        <Avatar
                            aria-label={'recipe'}
                        >
                            {conversation?.conversationTitle && conversation.conversationTitle.length > 1
                                ? conversation?.conversationTitle.substring(0, 2)
                                : '?'
                            }
                        </Avatar>
                    }
                    action={
                        (initFormByConversation && conversation)
                        &&
                        <AppIconButton
                            onClick={() => initFormByConversation(conversation)}
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
                    <Caption
                        color={conversation?.isUnavailable ? 'secondary.main' : 'error.main'}
                    >
                        Беседа{conversation?.isUnavailable ? ' доступна ' : ' недоступна '}для отправки сообщений
                    </Caption>
                </CardContent>
            </AppCard>
        )
            ;
    };

export default ConversationCard;
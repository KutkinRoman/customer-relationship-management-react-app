import React, {FC} from 'react';
import {IConversation} from "../../../model/conversation/Conversation";
import {CardContent, Typography} from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import AppIconButton from "../../UI/button/AppIconButton";
import EditIcon from '@mui/icons-material/Edit';
import AppDivider from "../../UI/divider/AppDivider";

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
            <Card
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
                            color={'secondary'}
                            onClick={() => initFormByConversation(conversation)}
                        >
                            <EditIcon/>
                        </AppIconButton>
                    }
                    title={
                        <Typography
                            variant={'h6'}
                            color={'secondary'}
                        >
                            {conversation?.conversationTitle || '?'}
                        </Typography>
                    }
                    subheader={conversation?.groupTitle}
                />
                <AppDivider/>
                <CardContent>
                    <Typography
                        variant={'subtitle2'}
                        color={'text.secondary'}
                    >
                        ID группы: {conversation?.groupId}
                    </Typography>
                    <Typography
                        variant={'subtitle2'}
                        color={'text.secondary'}
                    >
                        ID беседы: {conversation?.peerId}
                    </Typography>
                    <Typography
                        variant={'subtitle2'}
                        color={'text.secondary'}
                    >
                        Сообщения: {conversation?.messages.length}
                    </Typography>
                </CardContent>
                <AppDivider/>
                <CardContent>
                    <Typography
                        variant={'subtitle2'}
                        color={conversation?.isUnavailable ? 'success.main' : 'error.main'}
                    >
                        Беседа{conversation?.isUnavailable ? ' доступна ' : ' недоступна '}для отправки сообщений
                    </Typography>
                </CardContent>
            </Card>
        )
            ;
    };

export default ConversationCard;
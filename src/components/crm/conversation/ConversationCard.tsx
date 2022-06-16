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
    isLoading?: boolean
    initFormByConversation?: (conversation: IConversation) => void
    hover?: boolean
}

const ConversationCard: FC<ConversationCardProps> =
    ({
         conversation,
         isLoading,
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
                            <AppAvatar
                                isLoading={isLoading}
                            >
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
                                tooltipTitle={'Редактировать сообщения'}
                                onClick={() => initFormByConversation(conversation)}
                                color={mouseEnter ? 'primary' : 'inherit'}
                            >
                                <EditIcon/>
                            </AppIconButton>
                        }
                        title={
                            <Heading
                                isLoading={isLoading}
                            >
                                {conversation?.conversationTitle || '?'}
                            </Heading>
                        }
                        subheader={
                            <SubTitle
                                isLoading={isLoading}
                            >
                                {conversation?.groupTitle}
                            </SubTitle>
                        }
                    />
                    <AppDivider/>
                    <CardContent>
                        <SubTitle
                            isLoading={isLoading}
                        >
                            ID группы: {conversation?.groupId}
                        </SubTitle>
                        <SubTitle
                            isLoading={isLoading}
                        >
                            ID беседы: {conversation?.peerId}
                        </SubTitle>
                        <SubTitle
                            isLoading={isLoading}
                        >
                            Сообщения: {conversation?.messages.length}
                        </SubTitle>
                    </CardContent>
                    <AppDivider/>
                    <CardContent>
                        <SubTitle
                            color={conversation?.isUnavailable ? 'secondary.main' : 'error.main'}
                            isLoading={isLoading}
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
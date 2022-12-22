import React, {FC, useContext} from 'react';
import {ICustomerRequest} from "../../../../model/customer/CustomerRequest";
import AppCard from "../../../UI/page-content/AppCard";
import CardHeader from "@mui/material/CardHeader";
import AppAvatar from "../../../UI/avatar/AppAvatar";
import {Caption, Heading, SubTitle} from "../../../UI/typography/Typography";
import AppDivider from "../../../UI/divider/AppDivider";
import {observer} from "mobx-react-lite";
import {CustomerRequestEventColorContext} from "../../../../context/CustomerRequestEventColorContext";
import {DateTimeUtils} from "../../../../utils/DateTimeUtils";
import {Box, CardContent, Link, ListItemText} from "@mui/material";

interface Props {
    request?: ICustomerRequest
    isLoading?: boolean
    handleClickCard?: (request: ICustomerRequest) => void
}

const CustomerRequestCard: FC<Props> = observer(
    ({
         request,
         isLoading,
         handleClickCard
     }) => {


        const colorStore = useContext(CustomerRequestEventColorContext)

        function handleOnClick() {
            if (handleClickCard && request) {
                handleClickCard(request)
            }
        }

        return (
            <AppCard
                hover={true}
                sx={{
                    ":hover": {
                        cursor: 'pointer'
                    }
                }}
            >
                <Box
                    onClick={handleOnClick}
                >
                    <CardHeader
                        sx={{
                            backgroundColor: request ? colorStore.getBackgroundColorByEvent(request?.currentStatus.value) : '',
                            borderTopLeftRadius: '16px',
                            borderTopRightRadius: '16px',
                        }}
                        avatar={
                            <AppAvatar
                                isLoading={isLoading}
                                color={'primary.main'}
                            >
                                {request?.person.firstName}
                            </AppAvatar>
                        }
                        action={
                            <Box
                                sx={{
                                    backgroundColor: 'background.paper',
                                    padding: '5px',
                                    borderRadius: '16px',
                                    minWidth: '300px',
                                    marginLeft: '10px',
                                    textAlign: 'center'
                                }}
                                boxShadow={2}
                            >
                                <SubTitle
                                    isLoading={isLoading}
                                >
                                    {request?.currentStatus.title}
                                </SubTitle>
                            </Box>
                        }
                        title={
                            <SubTitle
                                isLoading={isLoading}
                            >
                                Клиент
                            </SubTitle>
                        }
                        subheader={
                            <Heading
                                isLoading={isLoading}
                            >
                                {request?.person.fullName}
                            </Heading>
                        }
                    />
                    <AppDivider/>
                    <CardHeader
                        avatar={
                            <AppAvatar
                                isLoading={isLoading}
                                color={'secondary.main'}
                            >
                                {request?.coach?.firstName}
                            </AppAvatar>
                        }
                        title={
                            <SubTitle
                                isLoading={isLoading}
                            >
                                Тренер
                            </SubTitle>
                        }
                        subheader={
                            <Heading
                                isLoading={isLoading}
                            >
                                {request?.coach?.fullName}
                            </Heading>
                        }
                    />
                    <AppDivider/>
                    <CardContent
                        sx={{
                            display: 'flex'
                        }}
                    >
                        <ListItemText
                            primary={
                                <Caption
                                    isLoading={isLoading}
                                >
                                    Дата и время заявки
                                </Caption>
                            }
                            secondary={
                                <SubTitle
                                    isLoading={isLoading}
                                >
                                    {DateTimeUtils.toDDmmYYYYmmHH(request?.createDateTime)}
                                </SubTitle>
                            }
                        />
                        <ListItemText
                            primary={
                                <Caption
                                    isLoading={isLoading}
                                >
                                    Дата и время тренировки
                                </Caption>
                            }
                            secondary={
                                <SubTitle
                                    isLoading={isLoading}
                                >
                                    {DateTimeUtils.toDDmmYYYYmmHH(request?.planDateTime)}
                                </SubTitle>
                            }
                        />
                        <ListItemText
                            primary={
                                <Caption
                                    isLoading={isLoading}
                                >
                                    Направление
                                </Caption>
                            }
                            secondary={
                                <SubTitle
                                    isLoading={isLoading}
                                >
                                    {request?.coachingDirection?.title}
                                </SubTitle>
                            }
                        />
                        <ListItemText
                            primary={
                                <Caption
                                    isLoading={isLoading}
                                    color={request?.callDateTime ? 'primary.main' : ''}
                                >
                                    Дата и время звонка
                                </Caption>
                            }
                            secondary={
                                <SubTitle
                                    isLoading={isLoading}
                                    color={request?.callDateTime ? 'primary.main' : ''}
                                >
                                    {DateTimeUtils.toDDmmYYYYmmHH(request?.callDateTime)}
                                </SubTitle>
                            }
                        />
                    </CardContent>
                    <AppDivider/>
                    <CardContent>
                        <ListItemText
                            primary={
                                <Caption
                                    isLoading={isLoading}
                                >
                                    Дополнительная информация
                                </Caption>
                            }
                            secondary={
                                <SubTitle
                                    isLoading={isLoading}
                                >
                                    {request?.info}
                                </SubTitle>
                            }
                        />
                    </CardContent>
                </Box>
                <AppDivider/>
                <CardContent>
                    <ListItemText
                        secondary={
                            <SubTitle isLoading={isLoading}>
                                {request?.person.info.pageLinkVk
                                    ?
                                    <Link
                                        href={request.person.info.pageLinkVk}
                                        target={'_blank'}
                                    >
                                        {request.person.info.pageLinkVk + '\n'}
                                    </Link>
                                    : '.\n'
                                }
                                <Link
                                    href={`http://spartak-fitnes.ru/profile/${request?.person.id}/orders`}
                                    target={'_blank'}
                                >
                                    История покупок
                                </Link>
                            </SubTitle>
                        }
                    />
                </CardContent>
            </AppCard>
        )
            ;
    });

export default CustomerRequestCard;
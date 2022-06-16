import React, {FC, useContext, useEffect, useState} from 'react';
import {ConversationMessage} from "../../../model/conversation/ConversationMessage";
import {AppTextField} from "../../UI/form/AppTextField";
import AppTimePicker from "../../UI/date-time-picker/AppTimePicker";
import {Box, MenuItem, Typography} from "@mui/material";
import AppFormItem from "../../UI/form/AppFormItem";
import AppSwitch from "../../UI/form/AppSwitch";
import {DayOfWeek} from "../../../model/date/DaysOfWeek";
import {ConversationFormStore} from "../../../store/conversation/ConversationFormStore";
import {observer} from "mobx-react-lite";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AppIconButton from "../../UI/button/AppIconButton";
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import SaveIcon from '@mui/icons-material/Save';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AppFormAction from "../../UI/form/AppFormAction";
import CircularProgress from '@mui/material/CircularProgress';
import {EntityStatus} from "../../../types/types";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {CoachingContext} from "../../../context/CoachingContext";
import AppButton from "../../UI/button/AppButton";
import {AlertContext} from "../../../context/AlertContext";

const minRowsTextField: number = 3;
const maxRowsTextField: number = 12;

interface ConversationMessageItemProps {
    store: ConversationFormStore
    message: ConversationMessage
    handleOpenTimeTable: (message: ConversationMessage) => void
}

const ConversationMessageItem: FC<ConversationMessageItemProps> = observer(
    ({
         store,
         message,
         handleOpenTimeTable
     }) => {

        const {alertSuccessSave} = useContext(AlertContext)
        const coachingStore = useContext(CoachingContext)

        const [rows, setRows] = useState<number>(minRowsTextField)

        function handleIncRows() {
            setRows(maxRowsTextField)
        }

        function handleDicRows() {
            setRows(minRowsTextField)
        }

        useEffect(() => {
            if (message.isUpdate) {
                alertSuccessSave()
                message.setIsUpdate(false)
            }
        }, [message.isUpdate])

        return (
            <Box>
                <Box>
                    <Box>
                        <AppFormItem>
                            <Box
                                display={'flex'}
                                justifyContent={'flex-end'}
                            >
                                <AppIconButton
                                    disabled={rows <= minRowsTextField}
                                    onClick={handleDicRows}
                                >
                                    <ArrowDropUpIcon/>
                                </AppIconButton>
                                <AppIconButton
                                    disabled={rows >= maxRowsTextField}
                                    onClick={handleIncRows}
                                >
                                    <ArrowDropDownIcon/>
                                </AppIconButton>
                            </Box>
                            <AppTextField
                                label={'Текст сообщения'}
                                rows={rows}
                                value={message.text}
                                onChange={e => message.setText(e.target.value)}
                            />
                        </AppFormItem>
                        <AppFormItem>
                            <AppTimePicker
                                label={'Время отправки'}
                                value={message.sendingTime}
                                setValue={newValue => message.setSendingTime(newValue)}
                            />
                        </AppFormItem>
                    </Box>
                    <AppFormItem>
                        <AppTextField
                            label={'Способ отправки'}
                            select={true}
                            options={coachingStore?.data || []}
                            optionNull={'День недели'}
                            value={message.coachingDirectionId}
                            onChange={e => message.setCoachingDirectionId(parseInt(e.target.value))}
                            renderOption={option =>
                                <MenuItem
                                    key={option.title}
                                    value={option.id}
                                >
                                    Авто: {option.title}
                                </MenuItem>
                            }
                        />
                    </AppFormItem>
                    {!message.coachingDirectionId &&
                        <AppFormItem
                            title={'День недели'}
                        >
                            <Box>
                                <AppSwitch
                                    text={'ПН'}
                                    checked={message.isDayOfWeek(DayOfWeek.MONDAY)}
                                    handleOnChange={checked => store.checkedDayOfWeekByMessage(checked, message, DayOfWeek.MONDAY)}
                                />
                                <AppSwitch
                                    text={'ВТ'}
                                    checked={message.isDayOfWeek(DayOfWeek.TUESDAY)}
                                    handleOnChange={checked => store.checkedDayOfWeekByMessage(checked, message, DayOfWeek.TUESDAY)}
                                />
                                <AppSwitch
                                    text={'СР'}
                                    checked={message.isDayOfWeek(DayOfWeek.WEDNESDAY)}
                                    handleOnChange={checked => store.checkedDayOfWeekByMessage(checked, message, DayOfWeek.WEDNESDAY)}
                                />
                                <AppSwitch
                                    text={'ЧТ'}
                                    checked={message.isDayOfWeek(DayOfWeek.THURSDAY)}
                                    handleOnChange={checked => store.checkedDayOfWeekByMessage(checked, message, DayOfWeek.THURSDAY)}
                                />
                                <AppSwitch
                                    text={'ПТ'}
                                    checked={message.isDayOfWeek(DayOfWeek.FRIDAY)}
                                    handleOnChange={checked => store.checkedDayOfWeekByMessage(checked, message, DayOfWeek.FRIDAY)}
                                />
                                <AppSwitch
                                    text={'СБ'}
                                    checked={message.isDayOfWeek(DayOfWeek.SATURDAY)}
                                    handleOnChange={checked => store.checkedDayOfWeekByMessage(checked, message, DayOfWeek.SATURDAY)}
                                />
                                <AppSwitch
                                    text={'ВС'}
                                    checked={message.isDayOfWeek(DayOfWeek.SUNDAY)}
                                    handleOnChange={checked => store.checkedDayOfWeekByMessage(checked, message, DayOfWeek.SUNDAY)}
                                />
                            </Box>
                        </AppFormItem>
                    }
                    {message.coachingDirectionId &&
                        <AppFormAction>
                            <AppButton
                                variant={'text'}
                                onClick={() => handleOpenTimeTable(message)}
                            >
                                Открыть расписание
                            </AppButton>
                        </AppFormAction>
                    }
                </Box>
                <AppFormAction>
                    <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <Typography
                            variant={'subtitle2'}
                            color={message?.isOutMessage ? 'secondary.main' : 'error.main'}
                        >
                            Сообщение{message?.isOutMessage ? ' ' : ' не '}отправляется
                        </Typography>
                        <Box
                            textAlign={'end'}
                        >
                            {message.isLoading
                                ?
                                <CircularProgress
                                    color={'secondary'}
                                />
                                :
                                <React.Fragment>
                                    {message.id &&
                                        <React.Fragment>
                                            <AppIconButton
                                                tooltipTitle={'Удалить'}
                                                onClick={() => store.deleteMessage(message)}
                                            >
                                                <DeleteForeverIcon/>
                                            </AppIconButton>
                                            {message.isOutMessage
                                                ?
                                                <AppIconButton
                                                    tooltipTitle={'Приостановить отправку сообщения'}
                                                    onClick={() => store.updateStatus(message, EntityStatus.NOT_ACTIVE)}
                                                >
                                                    <AppBlockingIcon/>
                                                </AppIconButton>
                                                :
                                                <AppIconButton
                                                    tooltipTitle={'Возобновить отправку сообщения'}
                                                    onClick={() => store.updateStatus(message, EntityStatus.ACTIVE)}
                                                >
                                                    <ConnectWithoutContactIcon/>
                                                </AppIconButton>
                                            }
                                        </React.Fragment>
                                    }
                                    <AppIconButton
                                        tooltipTitle={'Сохранить'}
                                        disabled={!message.isEdit}
                                        onClick={() => store.saveMessage(message)}
                                    >
                                        <SaveIcon/>
                                    </AppIconButton>
                                </React.Fragment>
                            }
                        </Box>
                    </Box>
                </AppFormAction>
            </Box>
        )
            ;
    });

export default ConversationMessageItem;
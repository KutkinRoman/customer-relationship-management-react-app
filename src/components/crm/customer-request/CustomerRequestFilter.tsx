import React, {FC} from 'react';
import {CustomerRequestFilterStore} from "../../../store/customer-request/CustomerRequestFilterStore";
import {Box, Checkbox, FormControlLabel, Typography} from "@mui/material";
import {CustomerRequestEventCheckBox} from "../../../model/customer/CustomerRequestEvent";
import {observer} from "mobx-react-lite";
import AppDivider from "../../UI/divider/AppDivider";
import AppButton from "../../UI/button/AppButton";
import AppButtonGroup from "../../UI/button/AppButtonGroup";
import AppDateRangePickerSmall from "../../UI/date-time-picker/AppDateRangePickerSmall";
import CustomerRequestEventColorPicker from "./CustomerRequestEventColorPicker";

interface CustomerRequestFilterItemProps {
    children: React.ReactNode
}

const CustomerRequestFilterItem: FC<CustomerRequestFilterItemProps> = ({children}) => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            padding={'10px 5px'}
        >
            {children}
        </Box>
    )
}

interface CustomerRequestFilterProps {
    filter: CustomerRequestFilterStore
    fetchFilter: () => void
    reset: () => void
}

const CustomerRequestFilter: FC<CustomerRequestFilterProps> = observer(
    ({
         filter,
         fetchFilter,
         reset
     }) => {

        const handleChange = (event: CustomerRequestEventCheckBox, checked: boolean) => {
            event.setIsChecked(checked)
        }

        return (
            <Box
                display={'flex'}
                flexDirection={'column'}
            >
                <CustomerRequestFilterItem>
                    <AppDateRangePickerSmall
                        title={'Дата заявки'}
                        value={filter.createDateRange}
                        setValue={newValue => filter.setCreateDateRange(newValue)}
                    />
                    <AppDateRangePickerSmall
                        title={'Дата тренировки'}
                        value={filter.planDateRange}
                        setValue={newValue => filter.setPlanDateRange(newValue)}
                    />
                    <AppDateRangePickerSmall
                        title={'Дата звонка'}
                        value={filter.callDateRange}
                        setValue={newValue => filter.setCallDateRange(newValue)}
                    />
                </CustomerRequestFilterItem>
                <AppDivider/>
                <CustomerRequestFilterItem>
                    {filter.events.map(event =>
                        <Box
                            key={`customerRequestEvent_${event.value}`}
                            display={'flex'}
                        >
                            <CustomerRequestEventColorPicker
                                event={event.value}
                            />
                            <FormControlLabel

                                label={
                                    <Typography
                                        variant={'caption'}
                                        color={'text.secondary'}
                                    >
                                        {event.title}
                                    </Typography>
                                }
                                control={
                                    <Checkbox
                                        sx={{padding: '0 5px'}}
                                        checked={event.isChecked}
                                        onChange={(e, checked) => handleChange(event, checked)}
                                        inputProps={{'aria-label': 'controlled'}}
                                    />
                                }

                            />
                        </Box>
                    )}
                    <FormControlLabel
                        sx={{paddingLeft: '30px'}}
                        label={
                            <Typography
                                variant={'caption'}
                                color={'text.secondary'}
                            >
                                ВСЕ
                            </Typography>
                        }
                        control={
                            <Checkbox
                                sx={{padding: '0 5px'}}
                                checked={filter.isCheckedAll}
                                onChange={(e, checked) => filter.setIsCheckedAll(checked)}
                                inputProps={{'aria-label': 'controlled'}}
                            />
                        }

                    />
                </CustomerRequestFilterItem>
                <AppDivider/>
                <CustomerRequestFilterItem>
                    <AppButtonGroup>
                        <AppButton
                            fullWidth={true}
                            onClick={reset}
                        >
                            Сбросить
                        </AppButton>
                        <AppButton
                            fullWidth={true}
                            onClick={fetchFilter}
                        >
                            Фильтр
                        </AppButton>
                    </AppButtonGroup>
                </CustomerRequestFilterItem>
            </Box>
        );
    });

export default CustomerRequestFilter;
import React, {FC, useContext} from 'react';
import {CustomerRequestFilterStore} from "../../../store/customer-request/CustomerRequestFilterStore";
import {Box, Checkbox, FormControlLabel, Typography} from "@mui/material";
import {CustomerRequestEventCheckBox} from "../../../model/customer/CustomerRequestEvent";
import {observer} from "mobx-react-lite";
import AppDivider from "../../UI/divider/AppDivider";
import AppButton from "../../UI/button/AppButton";
import AppButtonGroup from "../../UI/button/AppButtonGroup";
import CustomerRequestEventColorPicker from "./CustomerRequestEventColorPicker";
import ViewListIcon from '@mui/icons-material/ViewList';
import TableChartIcon from '@mui/icons-material/TableChart';
import AppIconButton from "../../UI/button/AppIconButton";
import {CustomerRequestEventColorContext} from "../../../context/CustomerRequestEventColorContext";

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

        const colorStore = useContext(CustomerRequestEventColorContext)

        const handleChange = (event: CustomerRequestEventCheckBox, checked: boolean) => {
            event.setIsChecked(checked)
        }

        return (
            <Box
                display={'flex'}
                flexDirection={'column'}
            >
                <AppDivider/>
                <CustomerRequestFilterItem>
                    {filter.events.map(event =>
                        <Box
                            key={`customerRequestEvent_${event.value}`}
                            bgcolor={colorStore.getBackgroundColorByEvent(event.value)}
                            borderRadius={'5px'}
                        >
                            <Box
                                display={'flex'}
                                boxShadow={1}
                                bgcolor={'background.paper'}
                                borderRadius={'5px'}
                                sx={{
                                    opacity: '0.85'
                                }}
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
                        </Box>
                    )}
                    <FormControlLabel
                        sx={{paddingLeft: '30px'}}
                        label={
                            <Typography
                                variant={'caption'}
                                color={'text.secondary'}
                            >
                                {filter.isCheckedAll
                                    ? 'Снять выделение'
                                    : 'Выделить все'
                                }
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
                            size={'small'}
                            fullWidth={true}
                            onClick={reset}
                        >
                            Сбросить
                        </AppButton>
                        <AppButton
                            size={'small'}
                            fullWidth={true}
                            onClick={fetchFilter}
                        >
                            Фильтр
                        </AppButton>
                    </AppButtonGroup>
                </CustomerRequestFilterItem>
                <CustomerRequestFilterItem>
                    <Box
                        textAlign={'end'}
                    >
                        <AppIconButton
                            tooltipTitle={'Список'}
                            color={filter.mode === 'list' ? 'primary' : 'inherit'}
                            onClick={() => filter.setMode('list')}
                        >
                            <ViewListIcon
                                fontSize={'small'}
                            />
                        </AppIconButton>
                        <AppIconButton
                            tooltipTitle={'Таблица'}
                            color={filter.mode === 'table' ? 'primary' : 'inherit'}
                            onClick={() => filter.setMode('table')}
                        >
                            <TableChartIcon
                                fontSize={'small'}
                            />
                        </AppIconButton>
                    </Box>
                </CustomerRequestFilterItem>
            </Box>
        );
    });

export default CustomerRequestFilter;
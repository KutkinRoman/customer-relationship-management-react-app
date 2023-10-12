import React, {FC} from 'react';
import {Box, TextField, Typography} from "@mui/material";
import AppDateRangePicker from "./AppDateRangePicker";
import {DateRange} from "@mui/lab";

interface AppDateRangePickerSmallProps {
    title: string
    value: DateRange<Date>
    setValue: (newValue: DateRange<Date>) => void
}

const AppDateRangePickerSmall: FC<AppDateRangePickerSmallProps> =
    ({
         title,
         value,
         setValue
     }) => {

        return (
            <AppDateRangePicker
                value={value}
                setValue={setValue}
                startText={''}
                endText={''}
                renderInput={((startProps, endProps) =>
                        <Box
                            display={'flex'}
                            alignItems={'flex-end'}
                        >
                            <Typography
                                color={'text.secondary'}
                                sx={{fontSize: 12, minWidth: '150px'}}
                            >
                                {title}
                            </Typography>
                            <TextField
                                {...startProps}
                                color={'primary'}
                                type={'date'}
                                variant={'standard'}
                                InputProps={{
                                    sx: {
                                        margin: 0,
                                        padding: 0,
                                        fontSize: 12,
                                        marginRight: 1
                                    }
                                }}
                            />
                            <TextField
                                {...endProps}
                                color={'primary'}
                                type={'date'}
                                variant={'standard'}
                                InputProps={{
                                    sx: {
                                        margin: 0,
                                        padding: 0,
                                        fontSize: 12,
                                    }
                                }}
                            />
                        </Box>
                )}
            />
        )
    };

export default AppDateRangePickerSmall;
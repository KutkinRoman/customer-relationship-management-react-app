import React, {FC, useEffect, useState} from 'react';
import {MobileTimePicker} from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import {OverridableStringUnion} from "@mui/types";
import {TextFieldPropsColorOverrides} from "@mui/material/TextField/TextField";
import {DateTimeUtils} from "../../../utils/DateTimeUtils";

interface AppTimePickerProps {
    label: string
    value: string | undefined
    setValue: (newValue: string | undefined) => void
    color?: OverridableStringUnion<'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning', TextFieldPropsColorOverrides>
    fullWidth?: boolean
    variant?: 'standard' | 'outlined' | 'filled'

}

const AppTimePicker: FC<AppTimePickerProps> =
    ({
         label,
         value,
         setValue,
         fullWidth,
         color,
         variant
     }) => {

        const [date, setDate] = useState<Date | null>(null)

        const handleOnChange = (date: Date | null) => {
            setDate(date)
            if (date) {
                setValue(DateTimeUtils.toISOTimeString(date))
            } else {
                setValue(undefined)
            }
        }

        useEffect(() => {
            if (value) {
                setDate(new Date(`1970-01-01T${value}`))
            }
        }, [])


        return (
            <MobileTimePicker
                label={label}
                value={date}
                onChange={handleOnChange}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        fullWidth={fullWidth || true}
                        color={color || 'secondary'}
                        variant={variant || 'standard'}
                    />
                }
            />
        );
    };

export default AppTimePicker;
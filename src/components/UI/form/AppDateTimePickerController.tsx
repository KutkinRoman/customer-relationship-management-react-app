import React, {FC} from 'react';
import {AppTextFieldProps} from "./AppTextField";
import {Control} from "react-hook-form/dist/types/form";
import {FieldErrors} from "react-hook-form/dist/types/errors";
import {Controller} from "react-hook-form";
import TextField from "@mui/material/TextField";
import {MobileDateTimePicker} from "@mui/x-date-pickers";

interface AppDateTimePickerControllerProps extends AppTextFieldProps {
    name: string
    control: Control
    errors: FieldErrors
}

const AppDateTimePickerController: FC<AppDateTimePickerControllerProps> =
    ({
         name,
         control,
         errors,
         label,
         fullWidth,
         color,
         variant
     }) => {

        return (
                <Controller
                    name={name}
                    control={control}
                    render={({field: {onChange, value}}) =>
                        <MobileDateTimePicker
                            label={label}
                            value={value}
                            onChange={onChange}
                            renderInput={(params) =>
                                <TextField
                                    fullWidth={fullWidth || true}
                                    color={color || 'primary'}
                                    variant={variant || 'standard'}
                                    error={!!errors[name]}
                                    helperText={errors[name] ? errors[name].message || `${label} Error!` : ''}
                                    {...params}
                                />
                            }
                        />

                    }
                />
        );
    };

export default AppDateTimePickerController;
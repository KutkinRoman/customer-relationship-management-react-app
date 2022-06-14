import React, {FC} from 'react';
import {MobileDatePicker} from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import {AppTextFieldProps} from "./AppTextField";
import {Control} from "react-hook-form/dist/types/form";
import {FieldErrors} from "react-hook-form/dist/types/errors";
import {Controller} from "react-hook-form";

interface AppDatePickerControllerProps extends AppTextFieldProps {
    name: string
    control: Control
    errors: FieldErrors
}


const AppDatePickerController: FC<AppDatePickerControllerProps> =
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
                    <MobileDatePicker
                        label={label}
                        value={value}
                        onChange={onChange}
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                id={name}
                                fullWidth={fullWidth || true}
                                color={color || 'secondary'}
                                variant={variant || 'standard'}
                                error={!!errors[name]}
                                helperText={errors[name] ? errors[name].message || `${label} Error!` : ''}
                            />
                        }
                    />
                }
            />
        );
    };

export default AppDatePickerController;
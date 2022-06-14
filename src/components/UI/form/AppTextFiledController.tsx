import React, {FC} from "react";
import {Controller} from "react-hook-form";
import {Control} from "react-hook-form/dist/types/form";
import {TextField} from "@mui/material";
import {AppTextFieldProps} from "./AppTextField";
import {FieldErrors} from "react-hook-form/dist/types/errors";

interface AppTextFieldControllerProps extends AppTextFieldProps {
    id?: string
    name: string
    control: Control
    errors?: FieldErrors
}


const AppTextFieldController: FC<AppTextFieldControllerProps> =
    ({
         id,
         name,
         control,
         errors,
         select,
         options,
         renderOption,
         fullWidth,
         type,
         color,
         label,
         variant,
         rows
     }) => {
        return (
            <Controller
                name={name}
                control={control}
                render={({field: {onChange, value}}) =>
                    <TextField
                        id={id || `id${Math.random()}`}
                        select={select || false}
                        fullWidth={fullWidth || true}
                        type={type || 'text'}
                        color={color || 'secondary'}
                        label={label}
                        variant={variant || 'standard'}
                        value={value || ''}
                        onChange={onChange}
                        error={errors && !!errors[name]}
                        helperText={errors && errors[name] ? errors[name].message || `${label} Error!` : ''}
                        multiline={!!rows}
                        rows={rows || 1}
                        autoComplete={'new-password'}
                    >
                        {(select && options && renderOption) &&
                            options.map(option =>
                                renderOption(option)
                            )}
                    </TextField>
                }
            />
        )
    };


export default AppTextFieldController;
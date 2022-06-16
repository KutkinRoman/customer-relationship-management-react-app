import React, {FC} from 'react';
import {MenuItem, TextField} from "@mui/material";
import {OverridableStringUnion} from "@mui/types";
import {TextFieldPropsColorOverrides} from "@mui/material/TextField/TextField";
import {MuiTextFieldProps} from "@mui/x-date-pickers/internals";

interface AppTextFieldProps {
    textFieldProps?: MuiTextFieldProps
    readOnly?: boolean
    select?: boolean
    optionNull?: string
    options?: any[]
    renderOption?: (option: any) => React.ReactNode
    color?: OverridableStringUnion<'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning', TextFieldPropsColorOverrides>
    type?: React.InputHTMLAttributes<unknown>['type']
    fullWidth?: boolean
    label: string
    variant?: 'standard' | 'outlined' | 'filled'
    value?: unknown,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    rows?: number,
    disabled?: boolean

}

const AppTextField: FC<AppTextFieldProps> =
    ({
         textFieldProps,
         readOnly,
         select,
         options,
         optionNull,
         renderOption,
         fullWidth,
         type,
         color,
         label,
         variant,
         rows,
         value,
         onChange,
         disabled
     }) => {

        return (
            <TextField
                {...textFieldProps}
                select={select || false}
                fullWidth={fullWidth || true}
                type={type || 'text'}
                color={color || 'primary'}
                label={label}
                variant={variant || 'standard'}
                value={value}
                onChange={onChange}
                multiline={!!rows}
                rows={rows || 1}
                disabled={disabled || false}
                InputProps={{
                    readOnly,
                    style: {
                        color: 'primary.main'
                    }
                }}
            >
                {(select && options && optionNull) &&
                    <MenuItem value={''}>
                        {optionNull}
                    </MenuItem>
                }
                {(select && options && renderOption) &&
                    options.map(option =>
                        renderOption(option)
                    )}
            </TextField>
        );
    };

export {
    AppTextField
};

export type {
    AppTextFieldProps
};


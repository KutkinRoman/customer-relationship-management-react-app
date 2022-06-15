import React, {FC, MouseEventHandler} from 'react';
import {Button, Tooltip} from "@mui/material";
import {OverridableStringUnion} from "@mui/types";
import {
    ButtonPropsColorOverrides,
    ButtonPropsSizeOverrides,
    ButtonPropsVariantOverrides
} from "@mui/material/Button/Button";

interface AppButtonProps {
    size?: OverridableStringUnion<'small' | 'medium' | 'large', ButtonPropsSizeOverrides>
    color?: OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
        ButtonPropsColorOverrides>
    variant?: OverridableStringUnion<'text' | 'outlined' | 'contained',
        ButtonPropsVariantOverrides>,
    borderRadius?: string
    className?: string
    tooltipTitle?: string
    children?: React.ReactNode | string | null,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    fullWidth?: boolean
    submit?: boolean;
    disabled?: boolean
}

const AppButton: FC<AppButtonProps> =
    ({
         size,
         color,
         borderRadius,
         variant,
         tooltipTitle,
         children,
         fullWidth,
         onClick,
         submit,
         disabled
     }) => {
        return (
            <Tooltip title={tooltipTitle || ''}>
                <Button
                    fullWidth={fullWidth || true}
                    size={size}
                    color={color}
                    sx={{borderRadius: borderRadius || '10px'}}
                    variant={variant || 'contained'}
                    onClick={onClick}
                    type={submit ? 'submit' : 'button'}
                    disabled={disabled || false}
                >
                    {children}
                </Button>
            </Tooltip>
        );
    };

export default AppButton;

export type {
    AppButtonProps
}
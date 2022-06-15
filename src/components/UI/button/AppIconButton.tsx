import React, {FC, MouseEventHandler} from 'react';
import {OverridableStringUnion} from "@mui/types";
import {IconButton, IconButtonPropsColorOverrides, Theme, Tooltip} from "@mui/material";
import {IconButtonPropsSizeOverrides} from "@mui/material/IconButton/IconButton";
import {SxProps} from "@mui/system";

interface AppIconButtonProps {
    size?: OverridableStringUnion<'small' | 'medium' | 'large', IconButtonPropsSizeOverrides>
    color?: OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
        IconButtonPropsColorOverrides>
    className?: string
    tooltipTitle?: string
    onClick?: MouseEventHandler | undefined;
    children?: React.ReactNode | string | null,
    disabled?: boolean
    submit?: boolean
    sx?: SxProps<Theme>
}

const AppIconButton: FC<AppIconButtonProps> =
    ({
         size,
         color,
         tooltipTitle,
         onClick,
         children,
         disabled,
         submit,
         sx,
     }) => {
        return (
            <Tooltip title={tooltipTitle || ''}>
                <IconButton
                    sx={sx}
                    size={size}
                    color={color || 'primary'}
                    disabled={disabled || false}
                    onClick={onClick}
                    type={submit ? 'submit' : undefined}
                >
                    {children}
                </IconButton>
            </Tooltip>
        );
    };

export default AppIconButton;
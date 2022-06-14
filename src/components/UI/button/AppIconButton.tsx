import React, {FC, MouseEventHandler} from 'react';
import {OverridableStringUnion} from "@mui/types";
import {IconButton, IconButtonPropsColorOverrides, Tooltip} from "@mui/material";
import {IconButtonPropsSizeOverrides} from "@mui/material/IconButton/IconButton";

interface AppIconButtonProps {
    size?: OverridableStringUnion<'small' | 'medium' | 'large', IconButtonPropsSizeOverrides>
    color?: OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
        IconButtonPropsColorOverrides>
    className?: string
    tooltipTitle?: string
    onClick?: MouseEventHandler | undefined;
    children?: React.ReactNode | string | null,
    disabled?: boolean
}

const AppIconButton: FC<AppIconButtonProps> =
    ({
         size,
         color,
         tooltipTitle,
         onClick,
         children,
         disabled,
     }) => {
        return (
            <Tooltip title={tooltipTitle || ''}>
                <IconButton
                    size={size}
                    color={color}
                    disabled={disabled || false}
                    onClick={onClick}
                >
                    {children}
                </IconButton>
            </Tooltip>
        );
    };

export default AppIconButton;
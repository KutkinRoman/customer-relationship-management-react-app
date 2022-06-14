import React, {FC} from 'react';
import {ButtonGroup} from "@mui/material";
import {OverridableStringUnion} from "@mui/types";
import {ButtonGroupPropsColorOverrides, ButtonGroupPropsVariantOverrides} from "@mui/material/ButtonGroup/ButtonGroup";

interface AppButtonGroupProps {
    children: React.ReactNode
    className?: string
    color?: OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
        ButtonGroupPropsColorOverrides>;
    variant?: OverridableStringUnion<'text' | 'outlined' | 'contained',
        ButtonGroupPropsVariantOverrides>;
    fullWidth?: boolean
    orientation?: 'vertical' | 'horizontal';
}

const AppButtonGroup: FC<AppButtonGroupProps> =
    ({
         className,
         color,
         variant,
         fullWidth,
         orientation,
         children
     }) => {
        return (
            <ButtonGroup
                orientation={orientation}
                className={className}
                color={color || 'primary'}
                variant={variant || 'contained'}
                sx={{borderRadius: '16px'}}
                fullWidth={fullWidth || true}
            >
                {children}
            </ButtonGroup>
        );
    };

export default AppButtonGroup;
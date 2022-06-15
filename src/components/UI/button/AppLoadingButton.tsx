import React, {FC} from 'react';
import {AppButtonProps} from "./AppButton";
import {CircularProgress, Tooltip} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';

interface AppLoadingButtonProps extends AppButtonProps {
    loading: boolean
}

const AppLoadingButton: FC<AppLoadingButtonProps> =
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
         disabled,
         loading
     }) => {
        return (
            <Tooltip title={tooltipTitle || ''}>
                <LoadingButton
                    loading={loading}
                    loadingIndicator={
                        <CircularProgress
                            color={'primary'}
                            size={20}
                        />
                    }
                    fullWidth={fullWidth || true}
                    size={size}
                    color={color || 'primary'}
                    sx={{borderRadius: borderRadius || '16px'}}
                    variant={variant || 'contained'}
                    onClick={onClick}
                    type={submit ? 'submit' : 'button'}
                    disabled={disabled || false}
                >
                    {children}
                </LoadingButton>
            </Tooltip>
        );
    };

export default AppLoadingButton;
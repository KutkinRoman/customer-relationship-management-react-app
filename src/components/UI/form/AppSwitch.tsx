import React, {FC} from 'react';
import {FormControlLabel, Switch, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";

interface AppSwitchProps {
    text: string
    checked: boolean
    handleOnChange: (checked: boolean) => void,
    colorTitle?: string
}

const AppSwitch: FC<AppSwitchProps> = observer(
    ({
         text,
         checked,
         handleOnChange,
         colorTitle
     }) => {
        return (
            <FormControlLabel
                label={
                    <Typography
                        variant={'body1'}
                        color={colorTitle || 'text.primary'}
                        minWidth={'70px'}
                    >
                        {text}
                    </Typography>
                }
                control={
                    <Switch
                        color={'secondary'}
                        checked={checked}
                        onChange={event => handleOnChange(event.target.checked)}
                    />
                }
            />
        );
    });

export default AppSwitch;
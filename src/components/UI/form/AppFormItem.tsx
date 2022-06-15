import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import {SubTitle} from "../typography/Typography";

interface AppFormItemProps {
    title?: string
    children: React.ReactNode
}

const AppFormItem: FC<AppFormItemProps> = ({children, title}) => {
    return (
        <Box
            borderRadius={'16px'}
            bgcolor={'divider'}
            padding={'10px'}
            margin={'5px'}
        >
            {title &&
                <SubTitle>
                    {title}
                </SubTitle>
            }
            {children}
        </Box>
    );
};

export default AppFormItem;
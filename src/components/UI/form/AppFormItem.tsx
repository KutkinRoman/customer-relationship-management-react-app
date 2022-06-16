import React, {FC} from 'react';
import {Box} from "@mui/material";
import {SubTitle} from "../typography/Typography";

interface AppFormItemProps {
    title?: string
    children: React.ReactNode
}

const AppFormItem: FC<AppFormItemProps> = ({children, title}) => {
    return (
        <Box
            borderRadius={'16px'}
            bgcolor={'input.container'}
            padding={'10px'}
            margin={'15px'}
            boxShadow={2}
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
import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";

interface AppFormItemProps {
    title?: string
    children: React.ReactNode
}

const AppFormItem: FC<AppFormItemProps> = ({children, title}) => {
    return (
        <Box
            borderRadius={'16px'}
            padding={'15px'}
            margin={'15px'}
            bgcolor={'primary.light'}
        >
            {title &&
                <Typography
                    variant={'body2'}
                    color={'text.secondary'}
                >
                    {title}
                </Typography>
            }
            {children}
        </Box>
    );
};

export default AppFormItem;
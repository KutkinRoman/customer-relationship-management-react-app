import React, {FC} from 'react';
import {Box} from "@mui/material";

interface AppFormActionProps {
    children: React.ReactNode
}

const AppFormAction: FC<AppFormActionProps> = ({children}) => {
    return (
        <Box
            borderRadius={'16px'}
            padding={'15px'}
            margin={'15px'}
        >
            {children}
        </Box>
    );
};

export default AppFormAction;
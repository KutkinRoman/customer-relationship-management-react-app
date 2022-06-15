import React, {FC} from 'react';
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import {Box} from "@mui/material";

interface AppCardProps {
    children: React.ReactNode,
    sx?: SxProps<Theme>;
}

const AppCard: FC<AppCardProps> = ({children, sx}) => {
    return (
        <Box
            bgcolor={'background.paper'}
            sx={{...sx, borderRadius: '16px'}}
            boxShadow={5}
        >
            {children}
        </Box>
    );
};

export default AppCard;
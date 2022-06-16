import React, {FC} from 'react';
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import {Box} from "@mui/material";
import {useMouseEnter} from "../../../hooks/useMouseEnter";

interface AppCardProps {
    children: React.ReactNode,
    sx?: SxProps<Theme>;
    hover?: boolean
}

const AppCard: FC<AppCardProps> = ({children, sx, hover}) => {

    const {mouseEnter, onMouseEnter, onMouseLeave} = useMouseEnter()
    
    return (
        <Box
            bgcolor={'background.paper'}
            sx={{...sx, borderRadius: '16px'}}
            boxShadow={(hover && mouseEnter) ? 22 : 1}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </Box>
    );
};

export default AppCard;
import React, {FC} from 'react';
import {Box} from "@mui/material";
import classes from './index.module.css'
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

interface PageContentProps {
    children: React.ReactNode
    sx?: SxProps<Theme>;
}

const PageContent: FC<PageContentProps> = ({children, sx}) => {
    return (
        <Box
            className={classes.content}
            sx={{...sx}}
        >
            {children}
        </Box>
    );
};

export default PageContent;
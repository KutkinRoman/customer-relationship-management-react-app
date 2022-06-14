import React, {FC} from 'react';
import {Box} from "@mui/material";
import classes from './index.module.css'
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

interface PageContentProps {
    className?: string
    children?: React.ReactNode
    sx?: SxProps<Theme>
}

const PageContentItem: FC<PageContentProps> =
    ({
         className,
         children,
         sx
     }) => {
        return (
            <Box
                className={[classes.item, className].join(' ')}
                bgcolor={'background.paper'}
                sx={{...sx, borderRadius: '16px'}}
                boxShadow={5}
            >
                {children}
            </Box>
        );
    };

export default PageContentItem;
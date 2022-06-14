import React, {FC} from 'react';
import {Box} from "@mui/material";
import classes from './index.module.css'
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import Card from "@mui/material/Card";

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
            <Card
                // className={[classes.item, className].join(' ')}
                // bgcolor={'background.paper'}
                sx={{...sx, borderRadius: '16px'}}
                // boxShadow={5}
            >
                {children}
            </Card>
        );
    };

export default PageContentItem;
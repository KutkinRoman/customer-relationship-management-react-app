import React, {FC} from 'react';
import {Box} from "@mui/material";
import cl from "./Wrapper.module.css";
import defaultBackgroundImage from '../../../assect/images/default_background_image.jpg'

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper: FC<WrapperProps> = ({children}) => {
    return (
        <Box
            id={'AppWrapper'}
            className={cl.wrapper}
            bgcolor={'background.default'}
        >
            <Box
                className={cl.wrapperBackground}
                sx={{backgroundImage: `url(${defaultBackgroundImage})`}}
            />
            {children}
        </Box>
    );
};

export default Wrapper;
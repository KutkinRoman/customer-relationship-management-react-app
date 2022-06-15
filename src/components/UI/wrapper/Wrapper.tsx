import React, {FC} from 'react';
import {Box} from "@mui/material";
import cl from "./Wrapper.module.css";
import defaultBackgroundImage from '../../../assect/images/background_ligth_mode.jpg'
import {styled} from "@mui/material/styles";

interface WrapperProps {
    children: React.ReactNode
}

const BackgroundLinearGradientStyled = styled(Box)(({theme}) => ({
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    // @ts-ignore
    background: theme.palette.background.linearGradient,
}))

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
            <BackgroundLinearGradientStyled/>
            {children}
        </Box>
    );
};

export default Wrapper;
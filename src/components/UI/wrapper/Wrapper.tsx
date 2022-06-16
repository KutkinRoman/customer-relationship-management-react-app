import React, {FC, useEffect, useState} from 'react';
import {Box} from "@mui/material";
import cl from "./Wrapper.module.css";
import defaultBackgroundImage from '../../../assect/images/background_image.jpg'
import backgroundImage from '../../../assect/images/default_background_image.jpg'
import {styled} from "@mui/material/styles";
import CustomizationThemePanel from "../theme/CustomizationThemePanel";

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

    const [image, setImage] = useState(defaultBackgroundImage)

    useEffect(() => {
        setTimeout(() => {
            setImage(backgroundImage)
        }, 1500)
    }, [])

    return (
        <Box
            id={'AppWrapper'}
            className={cl.wrapper}
            bgcolor={'background.default'}
        >
            <Box
                className={cl.wrapperBackground}
                sx={{backgroundImage: `url(${image})`}}
            />
            <BackgroundLinearGradientStyled/>
            {children}

            <CustomizationThemePanel/>
        </Box>
    );
};

export default Wrapper;
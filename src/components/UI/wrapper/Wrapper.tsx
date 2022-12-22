import React, {FC, useContext} from 'react';
import {Box} from "@mui/material";
import cl from "./Wrapper.module.css";
import {styled} from "@mui/material/styles";
import CustomizationThemePanel from "../theme/CustomizationThemePanel";
import {ImageContext} from "../../../context/ImageContext";
import {observer} from "mobx-react-lite";
import Iframe from "react-iframe";

interface WrapperProps {
    children: React.ReactNode
    isShowCustomThemePanel?: boolean
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

const Wrapper: FC<WrapperProps> = observer(({children, isShowCustomThemePanel}) => {

    const imageContext = useContext(ImageContext)

    return (
        <Box
            id={'AppWrapper'}
            className={cl.wrapper}
            bgcolor={'background.default'}
        >
            <Box
                className={cl.wrapperBackground}
                sx={{backgroundImage: `url(${imageContext.backgroundImage})`}}
            />
            <BackgroundLinearGradientStyled/>
            {children}
            {isShowCustomThemePanel && <CustomizationThemePanel/>}
        </Box>
    );
});

export default Wrapper;
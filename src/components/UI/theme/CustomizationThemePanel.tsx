import React, {useContext} from 'react';
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import DialogContent from "@mui/material/DialogContent";
import {
    CustomizationThemePanelContent,
    CustomizationThemePanelHeader,
    CustomizationThemePanelPaper,
    SettingsFabStyled
} from "./styles";
import useModal from "../../../hooks/useModal";
import {Fab} from "@mui/material";
import ColorPicker from "./ColorPicker";
import {CustomThemeContext} from "../../../context/CustomThemeContext";
import AppCard from "../page-content/AppCard";
import {Heading} from "../typography/Typography";
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import {observer} from "mobx-react-lite";
import AppLoadingButton from "../button/AppLoadingButton";
import CustomizationBackgroundModal from "./CustomizationBackgroundModal";
import AppFormAction from "../form/AppFormAction";
import {AuthContext} from "../../../context/AuthContext";
import AppDivider from "../divider/AppDivider";
import AppButton from "../button/AppButton";

const CustomizationThemePanel = observer(() => {

    const theme = useContext(CustomThemeContext)
    const auth = useContext(AuthContext)
    const {isOpen, handleClose, handleOpen} = useModal()


    function savePalette() {
        handleClose()
        if (auth?.isAuth && auth.user) {
            theme.saveCurrentPaletteByUsernameId(auth.user.username)
        }
    }

    function handleUpdateUserPalette() {
        handleClose()
        theme.updateUserPalette()
    }

    function handleDeleteUserPalette() {
        if (auth?.user) {
            handleClose()
            theme.deletePaletteByUsername(auth.user.username)
        }
    }

    function handleReset() {
        handleClose()
        theme.resetTheme()
    }

    return (
        <React.Fragment>
            <SettingsFabStyled>
                <Fab
                    color={'primary'}
                    onClick={handleOpen}
                >
                    <SettingsInputComponentIcon/>
                </Fab>
            </SettingsFabStyled>
            <SwipeableDrawer
                anchor={'right'}
                open={isOpen}
                onClose={handleClose}
                onOpen={() => ''}
                BackdropProps={{
                    sx: {
                        backgroundColor: 'transparent'
                    }
                }}
            >
                <CustomizationThemePanelPaper>
                    <CustomizationThemePanelHeader>
                        <Heading
                            color={'primary.main'}
                        >
                            {`Кастомизация`}
                        </Heading>
                    </CustomizationThemePanelHeader>
                    <CustomizationThemePanelContent>
                        <DialogContent
                            dividers={true}
                        >
                            <AppCard
                                hover={true}
                                sx={{marginBottom: '15px'}}
                            >
                                <ColorPicker
                                    title={'Цвет фона'}
                                    getColor={() => theme.palette.backgroundColor}
                                    setColor={color => theme.palette.setBackgroundColor(color)}
                                    update={() => theme.update()}
                                />
                            </AppCard>
                            <AppCard
                                hover={true}
                                sx={{marginBottom: '15px'}}
                            >
                                <ColorPicker
                                    title={'Первичный цвет'}
                                    getColor={() => theme.palette.primaryColor}
                                    setColor={color => theme.palette.setPrimaryColor(color)}
                                    update={() => theme.update()}
                                />
                            </AppCard>
                            <AppCard
                                hover={true}
                                sx={{marginBottom: '15px'}}
                            >
                                <ColorPicker
                                    title={'Вторичный цвет'}
                                    getColor={() => theme.palette.secondaryColor}
                                    setColor={color => theme.palette.setSecondaryColor(color)}
                                    update={() => theme.update()}
                                />
                            </AppCard>
                            <AppCard
                                hover={true}
                                sx={{marginBottom: '15px'}}
                            >
                                <ColorPicker
                                    title={'Цвет текста'}
                                    getColor={() => theme.palette.textColor}
                                    setColor={color => theme.palette.setTextColor(color)}
                                    update={() => theme.update()}
                                />
                            </AppCard>
                        </DialogContent>
                        <AppFormAction>
                            <AppButton
                                onClick={handleReset}
                                disabled={!theme.isUpdate}
                            >
                                Сбросить
                            </AppButton>
                            <AppLoadingButton
                                onClick={savePalette}
                                disabled={!theme.isUpdate}
                                loading={theme.isLoading}
                            >
                                Сохранить
                            </AppLoadingButton>
                            <AppDivider/>
                            <CustomizationBackgroundModal
                                handleClosePanel={handleClose}
                            />
                            <AppDivider/>
                            <AppButton
                                disabled={!theme.userPalette || theme.isUserTheme}
                                onClick={handleUpdateUserPalette}
                            >
                                Custom
                            </AppButton>
                            <React.Fragment>
                                <AppDivider/>
                                <AppButton
                                    disabled={!theme.userPalette}
                                    onClick={handleDeleteUserPalette}
                                >
                                    Delete
                                </AppButton>
                            </React.Fragment>
                        </AppFormAction>
                    </CustomizationThemePanelContent>
                </CustomizationThemePanelPaper>
            </SwipeableDrawer>
        </React.Fragment>
    );
});

export default CustomizationThemePanel;
import React from 'react';
import {AppModal} from "../modal/AppModal";
import useModal from "../../../hooks/useModal";
import AppButton from "../button/AppButton";
import {Box} from "@mui/material";
import Dropzone from "../dropzone/dropzone";

const CustomizationBackgroundModal = () => {

    const {isOpen, handleOpen, handleClose} = useModal()

    return (
        <React.Fragment>
            <AppButton
                onClick={handleOpen}
            >
                Добавить изображение
            </AppButton>
            <AppModal
                isOpen={isOpen}
                handleClose={handleClose}
            >
                <Box
                    width={'90vw'}
                    height={'90vh'}
                >
                    <Dropzone/>
                </Box>
            </AppModal>
        </React.Fragment>
    );
};

export default CustomizationBackgroundModal;
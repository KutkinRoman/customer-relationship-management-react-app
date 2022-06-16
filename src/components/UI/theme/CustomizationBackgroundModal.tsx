import React, {FC, useContext} from 'react';
import {AppModal} from "../modal/AppModal";
import useModal from "../../../hooks/useModal";
import AppButton from "../button/AppButton";
import {Box} from "@mui/material";
import AppDropzone from "../dropzone/Dropzone";
import {useReader} from "../../../hooks/useReader";
import Fab from '@mui/material/Fab';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {ImageContext} from "../../../context/ImageContext";
import {observer} from "mobx-react-lite";
import {AuthContext} from "../../../context/AuthContext";

interface Props {
    handleClosePanel: () => void
}

const CustomizationBackgroundModal: FC<Props> = observer(({handleClosePanel}) => {

    const auth = useContext(AuthContext)
    const imageContext = useContext(ImageContext)
    const {isOpen, handleOpen, handleClose} = useModal()
    const {read, result, clear} = useReader()

    const onDrop = (files: File[]) => {
        read(files[0])
    }

    const save = () => {
        handleClosePanel()
        handleClose()
        if (result) {
            imageContext.setBackgroundImage(result)
        }
        if (auth?.user) {
            imageContext.saveBackgroundImageByUsernameId(auth.user.username, result)
        }
    }


    return (
        <React.Fragment>
            <AppButton
                onClick={handleOpen}
            >
                Фоновое изображение
            </AppButton>
            <AppModal
                isOpen={isOpen}
                handleClose={handleClose}
            >
                <Box
                    width={'90vw'}
                    height={'90vh'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    {result
                        ?
                        <React.Fragment>
                            <img
                                src={result}
                                alt={'image'}
                                style={{
                                    width: '85vw',
                                    height: '85vh'
                                }}
                            />
                            <Box
                                marginLeft={'10px'}
                            >
                                <Fab
                                    sx={{marginBottom: '10px'}}
                                    color={'primary'}
                                    onClick={clear}
                                >
                                    <HighlightOffIcon
                                        fontSize={'large'}
                                    />
                                </Fab>
                                <Fab
                                    color={'primary'}
                                    onClick={save}
                                >
                                    <SaveAsIcon
                                        fontSize={'large'}
                                    />
                                </Fab>
                            </Box>
                        </React.Fragment>
                        :
                        <AppDropzone
                            onDrop={onDrop}
                        />
                    }
                </Box>
            </AppModal>
        </React.Fragment>
    );
});

export default CustomizationBackgroundModal;
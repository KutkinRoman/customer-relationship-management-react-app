import React, {FC} from 'react';
import Modal from '@mui/material/Modal';
import {Box, Typography} from "@mui/material";
import AppIconButton from "../button/AppIconButton";
import CloseIcon from '@mui/icons-material/Close';
import AppDivider from "../divider/AppDivider";

interface AppModalProps {
    isOpen: boolean
    handleClose: () => void
    isStatic?: boolean,
    renderFooter?: React.ReactNode
    children?: React.ReactNode,
    title?: string
    isLoading?: boolean
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
};

const modalTopStyle = {
    display: 'flex',
    justifyContent: 'flex-end'
}

const modalContentStyle = {
    bgcolor: 'background.paper',
    borderRadius: '16px',
    boxShadow: 24,
}


const AppModal: FC<AppModalProps> =
    ({
         isOpen,
         handleClose,
         isStatic,
         title,
         isLoading,
         renderFooter,
         children
     }) => {

        function handleStaticClose() {
            if (isStatic) {
                return
            }
            handleClose()
        }

        return (
            <Modal
                open={isOpen}
                onClose={handleStaticClose}
            >
                <Box
                    sx={modalStyle}
                >
                    <Box
                        sx={modalTopStyle}
                    >
                        <AppIconButton
                            color={'primary'}
                            onClick={handleClose}
                            disabled={isLoading || false}
                        >
                            <CloseIcon/>
                        </AppIconButton>
                    </Box>
                    <Box
                        sx={modalContentStyle}
                    >
                        {title &&
                            <React.Fragment>
                                <Box
                                    padding={'5px'}
                                    textAlign={'start'}
                                >
                                    <Typography
                                        variant={'h6'}
                                        color={'text.secondary'}
                                    >
                                        {title}
                                    </Typography>
                                </Box>
                                <AppDivider/>
                            </React.Fragment>
                        }
                        {children &&
                            <Box
                                padding={'5px'}
                            >
                                {children}
                            </Box>
                        }
                        {renderFooter &&
                            <React.Fragment>
                                <AppDivider/>
                                <Box
                                    padding={'5px'}
                                    textAlign={'end'}
                                >
                                    {renderFooter}
                                </Box>
                            </React.Fragment>
                        }
                    </Box>
                </Box>
            </Modal>
        );
    };

export
{
    AppModal
}
    ;

export type
{
    AppModalProps
}
    ;

import * as React from 'react';
import {FC} from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import AppIconButton from "../button/AppIconButton";
import {Container} from "@mui/material";
import {Heading} from "../typography/Typography";

const TransitionDialog = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide
        direction={'up'}
        ref={ref}
        {...props}
    />;
});

interface AppFullScreenDialogProps {
    title?: string
    isOpen: boolean
    handleClose: () => void
    children: React.ReactNode
}

const AppFullScreenDialog: FC<AppFullScreenDialogProps> =
    ({
         title,
         isOpen,
         handleClose,
         children
     }) => {

        return (
            <div>
                <Dialog
                    fullScreen
                    open={isOpen}
                    onClose={handleClose}
                    TransitionComponent={TransitionDialog}
                >
                    <AppBar
                        color={'secondary'}
                    >
                        <Toolbar>
                            <Heading
                                sx={{ml: 2, flex: 1}}
                            >
                                {title}
                            </Heading>
                            <AppIconButton
                                onClick={handleClose}
                            >
                                <CloseIcon/>
                            </AppIconButton>
                        </Toolbar>
                    </AppBar>
                    <Container
                        sx={{marginTop: '64px'}}
                    >
                        {children}
                    </Container>
                </Dialog>
            </div>
        );
    }


export default AppFullScreenDialog;
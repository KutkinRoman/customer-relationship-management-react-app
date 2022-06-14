import React, {FC, useContext} from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {CalendarThemeContext} from "../../../context/CalendarThemeContext";
import {Box, ThemeProvider, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import dayjs from "dayjs";
import DialogContent from '@mui/material/DialogContent';

const ModalPaper = styled(Box)(({theme}) => ({
    width: '650px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    // position: 'relative'
}))


const ModalHeader = styled(Box)(({theme}) => ({
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    // position: 'absolute',
    // left: 0,
    // top: 0,
    // right: 0,
}))

const ModalContent = styled(Box)(({theme}) => ({
    padding: '10px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxHeight: '500px'
}))

interface CalendarModalProps {
    day?: dayjs.Dayjs
    isOpen: boolean,
    handleClose: () => void;
    children: React.ReactNode
}

const CalendarModal: FC<CalendarModalProps> = ({day, isOpen, handleClose, children}) => {

    const {theme} = useContext(CalendarThemeContext)

    return (
        <ThemeProvider
            theme={theme}
        >
            <SwipeableDrawer
                anchor={'left'}
                open={isOpen}
                onClose={handleClose}
                onOpen={() => ''}
            >
                <ModalPaper>
                    <ModalHeader>
                        <Typography
                            variant={'h5'}
                            color={'primary'}
                        >
                            {day?.format("dddd").toUpperCase()}
                        </Typography>
                        <Typography
                            variant={'h6'}
                            color={'secondary'}
                        >
                            {day?.format("DD MMMM YYYY").toUpperCase()} ГОД
                        </Typography>
                    </ModalHeader>
                    <ModalContent>
                        <DialogContent
                            dividers={true}
                        >
                            {children}
                        </DialogContent>
                    </ModalContent>
                </ModalPaper>
            </SwipeableDrawer>
        </ThemeProvider>
    )
};

export default CalendarModal;
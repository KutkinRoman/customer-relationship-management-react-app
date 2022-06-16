import React, {useContext} from 'react';
import {Box, Fab, Fade} from "@mui/material";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import AppIconButton from "../../UI/button/AppIconButton";
import {observer} from "mobx-react-lite";
import {CustomerRequestEventColorContext} from "../../../context/CustomerRequestEventColorContext";

const CustomerRequestFab = observer(() => {

    const colorStore = useContext(CustomerRequestEventColorContext)

    return (
        <Fade
            in={colorStore.isUpdate}
        >
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 10,
                    left: 10,
                }}
            >
                <Fab
                    color={'primary'}
                >
                    <AppIconButton
                        tooltipTitle={'Сохранить цвет'}
                        color={'inherit'}
                        onClick={() => colorStore.save()}
                    >
                        <SaveAsIcon/>
                    </AppIconButton>
                </Fab>
            </Box>
        </Fade>
    );
});

export default CustomerRequestFab;
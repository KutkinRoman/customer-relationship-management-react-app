import React, {FC, useContext, useEffect} from 'react';
import {AppModal} from "../../UI/modal/AppModal";
import useModal from "../../../hooks/useModal";
import AppIconButton from "../../UI/button/AppIconButton";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import {CustomerRequestEventEnum} from "../../../model/customer/CustomerRequestEvent";
import {CustomerRequestEventColorContext} from "../../../context/CustomerRequestEventColorContext";
import {observer} from "mobx-react-lite";
import ColorPicker from "../../UI/theme/ColorPicker";

interface Props {
    event: CustomerRequestEventEnum
}

const CustomerRequestEventColorPicker: FC<Props> = observer(({event}) => {

        const colorStore = useContext(CustomerRequestEventColorContext)

        const {isOpen, handleOpen, handleClose} = useModal()

        return (
            <React.Fragment>
                <AppIconButton
                    size={'small'}
                    onClick={handleOpen}
                >
                    <InvertColorsIcon
                        fontSize={'small'}
                        sx={{color: colorStore.getColorByEvent(event)}}
                    />
                </AppIconButton>
                <AppModal
                    isOpen={isOpen}
                    handleClose={handleClose}
                >
                    <ColorPicker
                        getColor={() => colorStore.getColorByEvent(event)}
                        setColor={color => colorStore.setColorByEvent(event, color)}
                    />
                </AppModal>
            </React.Fragment>
        );
    })
;

export default CustomerRequestEventColorPicker;
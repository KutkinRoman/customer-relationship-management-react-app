import React, {FC, useContext, useState} from 'react';
import {CoachingTimeTableStore} from "../../../store/coach/CoachingTimeTableStore";
import {observer} from "mobx-react-lite";
import CalendarModal from "../../UI/calendar/CalendarModal";
import CoachingSessionForm from "./CoachingSessionForm";
import {Box, Button} from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {CoachingContext} from "../../../context/CoachingContext";
import {ICoachingDirection} from "../../../model/coach/CoachingDirection";
import {CoachingSession, ICoachingSession} from "../../../model/coach/CoachingSession";
import {DateTimeUtils} from "../../../utils/DateTimeUtils";

interface CoachingSessionsModalProps {
    store?: CoachingTimeTableStore
    isOpen: boolean
    handleClose: () => void
}

const CoachingSessionsModal: FC<CoachingSessionsModalProps> = observer(
    ({
         store,
         isOpen,
         handleClose
     }) => {

        const coachingDirectionStore = useContext(CoachingContext)
        const [newSessions, setNewSessions] = useState<ICoachingSession[]>([])
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
        const openMenu = Boolean(anchorEl);
        const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget);
        };
        const handleCloseMenu = () => {
            setAnchorEl(null);

        };

        const handleClickMenuItem = (direction: ICoachingDirection) => {
            handleCloseMenu()
            let data = ''
            if (store && store.sessions?.length && store.sessions[0].dateTime) {
                data = store.sessions[0].dateTime
            }
            setNewSessions(
                [
                    ...newSessions,
                    new CoachingSession(
                        data, direction
                    )
                ]
            )
        }

        return (
            <CalendarModal
                day={store?.currentDay}
                isOpen={isOpen}
                handleClose={handleClose}
            >
                <Box
                    marginBottom={'5px'}
                >
                    <React.Fragment>
                        <Button
                            id="fade-button"
                            aria-controls={openMenu ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true' : undefined}
                            onClick={handleClickMenu}
                        >
                            ДОБАВИТЬ
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={handleCloseMenu}
                            TransitionComponent={Fade}
                        >
                            {coachingDirectionStore?.data?.map(direction =>
                                <MenuItem
                                    key={`menuItemCoachingDirection${direction.id}`}
                                    onClick={() => handleClickMenuItem(direction)}
                                >
                                    {direction.title}
                                </MenuItem>
                            )}
                        </Menu>
                    </React.Fragment>
                </Box>
                {newSessions.map(session =>
                    <CoachingSessionForm
                        key={`newSession_${Math.random()}`}
                        session={session}
                    />
                )
                }
                {store &&
                    store.sessions?.map(session =>
                        <CoachingSessionForm
                            key={`sessions_${session.id}`}
                            session={session}
                        />
                    )
                }
            </CalendarModal>
        );
    });

export default CoachingSessionsModal;
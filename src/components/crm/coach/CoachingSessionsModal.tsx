import React, {FC} from 'react';
import {CoachingTimeTableStore} from "../../../store/coach/CoachingTimeTableStore";
import {observer} from "mobx-react-lite";
import CalendarModal from "../../UI/calendar/CalendarModal";
import CoachingSessionForm from "./CoachingSessionForm";


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
        return (
            <CalendarModal
                day={store?.currentDay}
                isOpen={isOpen}
                handleClose={handleClose}
            >
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
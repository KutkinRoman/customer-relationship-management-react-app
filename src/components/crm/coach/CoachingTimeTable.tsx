import React, {FC, useContext, useEffect, useState} from 'react';
import {ICoachingSession} from "../../../model/coach/CoachingSession";
import {CoachingService} from "../../../service/CoachingService";
import Calendar from "../../UI/calendar/Calendar";
import dayjs from "dayjs";
import DayItem from "../../UI/calendar/DayItem";
import DaySkeleton from "../../UI/calendar/DaySkeleton";
import {AppTextField} from "../../UI/form/AppTextField";
import AppFormAction from "../../UI/form/AppFormAction";
import {MenuItem} from "@mui/material";
import {CoachingContext} from "../../../context/CoachingContext";
import {observer} from "mobx-react-lite";
import {CoachingTimeTableContext} from "../../../context/CoachingTimeTableContext";

interface CoachingDayItemProps {
    day: dayjs.Dayjs
}

const CoachingDayItem: FC<CoachingDayItemProps> = observer(({day}) => {

    const coachingDirectionStore = useContext(CoachingContext)
    const coachingTimeTableStore = useContext(CoachingTimeTableContext)

    const [isLoading, setIsLoading] = useState(false)
    const [sessions, setSessions] = useState<ICoachingSession[]>()

    const fetch = async () => {
        setIsLoading(true)
        try {
            const response = await CoachingService.getCoachingSessionByDate(day.format('YYYY-MM-DD'))
            setSessions(response.data)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (!isLoading) {
            fetch()
        }
        return setSessions([])
    }, [])


    return (
        <React.Fragment>
            {isLoading &&
                <DaySkeleton/>
            }
            {sessions?.map((session) => {

                    if (coachingDirectionStore?.currentDirectionId && coachingDirectionStore.currentDirectionId !== session.direction.id) {
                        return ''
                    }

                    return (
                        <DayItem
                            time={session.time}
                            title={session.direction.title}
                            description={session.coach.compactName}
                        >
                            {coachingTimeTableStore?.message &&
                                <input
                                    type={'checkbox'}
                                    style={{margin: '2px'}}
                                    checked={coachingTimeTableStore.message.sessionIds?.includes(session.id)}
                                    onChange={event => coachingTimeTableStore?.message?.checkedBySessionId(event.target.checked, session.id)}
                                />
                            }
                        </DayItem>
                    )
                }
            )}
        </React.Fragment>
    )
})


const CoachingSideBar: FC = observer(() => {

    const coachingTimeTableStore = useContext(CoachingTimeTableContext)
    const coachingDirectionStore = useContext(CoachingContext)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        coachingDirectionStore?.setCurrentDirectionById(parseInt(e.target.value))
    }

    return (
        <AppFormAction>
            <AppTextField
                select={true}
                color={'primary'}
                label={'Направление'}
                variant={'standard'}
                options={coachingDirectionStore?.data || []}
                value={coachingDirectionStore?.currentDirectionId || null}
                onChange={handleOnChange}
                optionNull={'ВСЕ'}
                disabled={!!coachingTimeTableStore?.message}
                renderOption={(option) =>
                    <MenuItem
                        key={`coachingDirection${option.id}`}
                        value={option.id}
                    >
                        {option.title}
                    </MenuItem>
                }
            />
        </AppFormAction>
    )
})

const CoachingTimeTable: FC = observer(() => {

    return (
        <Calendar
            title={'Расписание тренировок'}
            renderSideBar={() =>
                <CoachingSideBar/>
            }
            renderDayContent={day =>
                <CoachingDayItem
                    day={day}
                />
            }
        />
    );
});

export default CoachingTimeTable;
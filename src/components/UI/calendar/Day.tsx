import dayjs from "dayjs";
import React, {FC} from "react";
import classes from "./index.module.css"
import Card from "@mui/material/Card";
import {Box, Typography} from "@mui/material";
import Zoom from '@mui/material/Zoom';

interface DayProps {
    day: dayjs.Dayjs,
    updateDays: dayjs.Dayjs[]
    currentMonthNumber: number,
    rowIdx: number,
    dayIx: number,
    renderDayContent?: (day: dayjs.Dayjs, updateDays: dayjs.Dayjs[]) => React.ReactNode
}

const Day: FC<DayProps> =
    ({
         day,
         updateDays,
         currentMonthNumber,
         rowIdx,
         dayIx,
         renderDayContent
     }) => {

        return (
            <Zoom
                in={true}
            >
                <Box
                    className={classes.day}
                    sx={{
                        // borderColor: dayIx <= 4 ? 'secondary.light' : 'primary.light',
                        borderColor: 'divider',
                        opacity: day.month() === currentMonthNumber ? '1' : '0.4'
                    }}
                >
                    {day.format("DD.MM.YYYY") === dayjs().format('DD.MM.YYYY') &&
                        <Box
                            className={classes.todayBadge}
                            bgcolor={'primary.main'}
                        />
                    }
                    <header
                        className={classes.dayHeader}
                    >
                        <Typography
                            className={classes.dayOfWeek}
                            variant={'subtitle2'}
                            color={'text.disabled'}
                        >
                            {day.format("dd").toUpperCase()}
                        </Typography>
                        <Typography
                            className={classes.dayOfMonth}
                            variant={'subtitle2'}
                            color={'text.secondary'}
                        >
                            {day.format("DD.MM").toUpperCase()}
                        </Typography>
                    </header>
                    <Box
                        className={classes.dayContent}
                    >
                        {renderDayContent && renderDayContent(day, updateDays)}
                    </Box>
                </Box>
            </Zoom>
        );
    }

export default Day;

import React, {FC} from "react";
import Day from "./Day";
import classes from "./index.module.css"
import dayjs from "dayjs";

interface MonthProps {
    month: dayjs.Dayjs[][],
    updateDays: dayjs.Dayjs[]
    currentMonthNumber: number,
    renderDayContent?: (day: dayjs.Dayjs, updateDays: dayjs.Dayjs[]) => React.ReactNode
}

const Month: FC<MonthProps> =
    ({
         month,
         updateDays,
         currentMonthNumber,
         renderDayContent
     }) => {
        return (
            <div
                className={classes.month}
            >
                {month.map((row, i) => (
                    <div
                        key={i}
                        className={classes.week}
                    >
                        {row.map((day, idx) => (
                            <Day
                                key={`day_${day.toISOString()}`}
                                day={day}
                                currentMonthNumber={currentMonthNumber}
                                rowIdx={i}
                                dayIx={idx}
                                updateDays={updateDays}
                                renderDayContent={renderDayContent}
                            />
                        ))}
                    </div>
                ))}
            </div>
        );
    }

export default Month;

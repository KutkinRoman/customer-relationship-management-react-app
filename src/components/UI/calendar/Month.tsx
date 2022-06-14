import React, {FC} from "react";
import Day from "./Day";
import classes from "./index.module.css"
import dayjs from "dayjs";

interface MonthProps {
    month: dayjs.Dayjs[][],
    currentMonthNumber: number,
    renderDayContent?: (day: dayjs.Dayjs) => React.ReactNode
}

const Month: FC<MonthProps> =
    ({
         month,
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
                                renderDayContent={renderDayContent}
                            />
                        ))}
                    </div>
                ))}
            </div>
        );
    }

export default Month;

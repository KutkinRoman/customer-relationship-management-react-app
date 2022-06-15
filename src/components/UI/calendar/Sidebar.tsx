import React, {FC} from "react";
import SmallCalendar from "./small/SmallCalendar";
import classes from "./index.module.css"
import dayjs from "dayjs";

interface SidebarProps {
    currentMonth: dayjs.Dayjs[][],
    currentMonthNumber: number,
    handlePrevMonth: () => void,
    handleNextMonth: () => void,
    selectedMonth: () => void,
    currentMonthTextFormat: string,
    renderSideBar?: (updateMonth: () => void, currentMonthISODataString: () => string) => React.ReactNode
    updateMonth: () => void
    currentMonthISODataString: () => string
}

const Sidebar: FC<SidebarProps> =
    ({
         currentMonth,
         currentMonthNumber,
         handleNextMonth,
         handlePrevMonth,
         selectedMonth,
         currentMonthTextFormat,
         renderSideBar,
         updateMonth,
         currentMonthISODataString
     }) => {
        return (
            <div
                className={classes.sidebar}
            >
                <SmallCalendar
                    currentMonth={currentMonth}
                    currentMonthNumber={currentMonthNumber}
                    handleNextMonth={handleNextMonth}
                    handlePrevMonth={handlePrevMonth}
                    selectedMonth={selectedMonth}
                    currentMonthTextFormat={currentMonthTextFormat}
                />
                {renderSideBar && renderSideBar(updateMonth, currentMonthISODataString)}
            </div>
        );
    }

export default Sidebar
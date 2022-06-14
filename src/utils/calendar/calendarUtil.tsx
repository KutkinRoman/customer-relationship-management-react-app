import dayjs from "dayjs";

const startDayOfWeek = 1

export function getMonth(month = dayjs().month()) {
    month = Math.floor(month);

    const year = dayjs().year();

    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

    let currentMonthCount = startDayOfWeek - firstDayOfTheMonth;

    return new Array(6).fill([]).map(() => {

        return new Array(7).fill(null).map(() => {

            currentMonthCount++;

            return dayjs(new Date(year, month, currentMonthCount));

        });
    });
}

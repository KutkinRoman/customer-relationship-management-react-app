export class DateTimeUtils {

    static toISODateString(date: Date | null) {
        if (date) {
            const d = new Date(date).toLocaleDateString()
            return `${d.substring(6, 10)}-${d.substring(3, 5)}-${d.substring(0, 2)}`;
        }
    }

    static toISODateTimeString(date: Date | null): string {
        if (date) {
            date = new Date(date)
            const d = date.toLocaleDateString()
            return `${d.substring(6, 10)}-${d.substring(3, 5)}-${d.substring(0, 2)}T${date.toTimeString().substring(0, 8)}`;
        }
        return ''
    }

    static toISOTimeString(date: Date | null) {
        if (date) {
            date = new Date(date)
            return `${date.toTimeString().substring(0, 8)}`;
        }
    }

    static toDDmmYYYYmmHH(date: Date | undefined) {
        if (date) {
            date = new Date(date)
            const d = date.toLocaleDateString()
            return `${d.substring(0, 2)}.${d.substring(3, 5)}.${d.substring(6, 10)} ${date.toTimeString().substring(0, 5)}`;
        }
        return ''
    }

    static toDDmmYYYY(date: Date | undefined) {
        if (date) {
            const d = new Date(date).toLocaleDateString()
            return `${d.substring(0, 2)}.${d.substring(3, 5)}.${d.substring(6, 10)}`;
        }
        return ''
    }


}
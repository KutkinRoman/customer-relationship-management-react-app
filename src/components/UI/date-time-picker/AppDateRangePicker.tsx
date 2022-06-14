import * as React from 'react';
import {FC} from 'react';
import {DateRange, DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker';
import {MuiTextFieldProps} from "@mui/x-date-pickers/internals";

interface AppDateRangePickerProps {
    value: DateRange<Date>
    setValue: (newValue: DateRange<Date>) => void
    startText: string
    endText: string
    renderInput: (startProps: MuiTextFieldProps, endProps: MuiTextFieldProps) => React.ReactElement;
}

const AppDateRangePicker: FC<AppDateRangePickerProps> =
    ({
         startText,
         endText,
         value,
         setValue,
         renderInput
     }) => {

        return (
            <DateRangePicker
                startText={startText}
                endText={endText}
                value={value}
                onChange={setValue}
                renderInput={renderInput}
            />
        );
    };

export default AppDateRangePicker;
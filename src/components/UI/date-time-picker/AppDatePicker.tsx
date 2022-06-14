import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

const AppDatePicker = () => {

    const [value, setValue] = useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    return (
        <DatePicker
            label="Date desktop"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
        />
    );
};

export default AppDatePicker;
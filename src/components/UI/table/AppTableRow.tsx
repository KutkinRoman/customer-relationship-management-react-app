import React, {FC, MouseEventHandler} from 'react';
import TableRow from "@mui/material/TableRow";
import {TableRowClasses} from "@mui/material/TableRow/tableRowClasses";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material";

interface AppTableRowProps {
    children?: React.ReactNode;
    classes?: Partial<TableRowClasses>;
    hover?: boolean;
    selected?: boolean;
    tabIndex?: number | undefined;
    onClick?: MouseEventHandler<any> | undefined;
    sx?: SxProps<Theme>;
}

const AppTableRow: FC<AppTableRowProps> = (props) => {
    return (
        <TableRow
            {...props}
            sx={{backgroundColor: 'background.default'}}
        />
    );
};

export default AppTableRow;
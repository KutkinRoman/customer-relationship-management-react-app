import React, {FC} from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {Skeleton} from "@mui/material";

interface AppSkeletonRowProps {
    columns: number
}

const AppSkeletonRow: FC<AppSkeletonRowProps> = ({columns}) => {
    return (
        <TableRow>
            {[...new Array(columns)].map((value, index, array) =>
                <TableCell
                    key={`skeletonTableCell_${index}_${Math.random()}_`}
                >
                    <Skeleton/>
                </TableCell>
            )}
        </TableRow>
    );
};

export default AppSkeletonRow;
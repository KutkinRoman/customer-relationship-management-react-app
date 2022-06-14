import React from 'react';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import AppSkeletonRow from "./AppSkeletonRow";


interface AppTableProps<T> {
    columns: string[]
    rows: T[]
    renderRow: (row: T) => React.ReactNode
    isLoading?: boolean
    maxSkeletonRows?: number
}

function AppTable<T>(props: AppTableProps<T>) {

    const getMaxSkeletonRows = () => {
        if (props.rows.length > 0) {
            return props.rows.length
        }
        return props.maxSkeletonRows || 2
    }

    return (
        <TableContainer
            sx={{borderRadius: '16px'}}
        >
            <Table
                stickyHeader
                aria-label="sticky table"
            >
                <TableHead>
                    <TableRow>
                        {props.columns.map((value, index, array) => (
                            <TableCell
                                key={`column_${index}_${value}`}
                            >
                                {value}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props?.isLoading &&
                        [...new Array(getMaxSkeletonRows())].map((value, index, array) =>
                            <AppSkeletonRow
                                key={`appSkeletonRow_${index}_${Math.random()}`}
                                columns={props.columns.length}
                            />
                        )
                    }
                    {!props?.isLoading &&
                        props.rows.map((row) => props.renderRow(row))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export {
    AppTable
};

import React, {FC, useContext} from 'react';
import {ICustomerRequest} from "../../../model/customer/CustomerRequest";
import {AppTable} from "../../UI/table/AppTable";
import {Link, TableCell, Typography} from "@mui/material";
import {DateTimeUtils} from "../../../utils/DateTimeUtils";
import AppTableRow from "../../UI/table/AppTableRow";
import {Body, Caption} from "../../UI/typography/Typography";
import {CustomerRequestEventColorContext} from "../../../context/CustomerRequestEventColorContext";
import {observer} from "mobx-react-lite";

interface CustomerRequestTableProps {
    requests: ICustomerRequest[]
    isLoading: boolean
    handleClickTableRow: (customerRequest: ICustomerRequest) => void
}

interface TableRowProps {
    request: ICustomerRequest
    handleClickTableRow: (customerRequest: ICustomerRequest) => void
}

const columns: string[] = [
    'Дата заявки',
    'Клиент',
    'Тренировка',
    'Текущий статус',
    'Доп инфо',
    'Дата звонка'
]

const TableRow: FC<TableRowProps> = observer(({request, handleClickTableRow}) => {

    const colorStore = useContext(CustomerRequestEventColorContext)

    return (
        <AppTableRow
            hover
            tabIndex={-1}
            onClick={() => handleClickTableRow(request)}
        >
            <TableCell>
                <Typography
                    variant={'body2'}
                >
                    {DateTimeUtils.toDDmmYYYYmmHH(request.createDateTime)}
                </Typography>
            </TableCell>
            <TableCell>
                <Body>
                    {request.person.lastName}
                </Body>
                <Body>
                    {request.person.firstName}
                </Body>
                <Body>
                    {request.person.info.telephone}
                </Body>
                <Caption>
                    <Link
                        component={'a'}
                        href={request.person.info.pageLinkVk}
                        target={'_blank'}
                        color={'text.primary'}
                    >
                        {request.person.info.pageLinkVk}
                    </Link>
                </Caption>
            </TableCell>
            <TableCell>
                <Body>
                    {request.coach?.compactName}
                </Body>
                <Body>
                    {request.coachingDirection?.title}
                </Body>
                <Body>
                    {DateTimeUtils.toDDmmYYYYmmHH(request.planDateTime)}
                </Body>
            </TableCell>
            <TableCell>
                <Body
                    sx={{
                        color: colorStore.getColorByEvent(request.currentStatus.value)
                    }}
                >
                    {request.currentStatus.title}
                </Body>
            </TableCell>
            <TableCell
                sx={{maxWidth: '200px'}}
            >
                <Caption>
                    {request.info}
                </Caption>
            </TableCell>
            <TableCell>
                <Caption>
                    {DateTimeUtils.toDDmmYYYYmmHH(request.callDateTime)}
                </Caption>
            </TableCell>
        </AppTableRow>
    )
})

const CustomerRequestTable: FC<CustomerRequestTableProps> = observer(
    ({
         requests,
         isLoading,
         handleClickTableRow
     }) => {

        return (
            <AppTable
                columns={columns}
                rows={requests}
                isLoading={isLoading}
                maxSkeletonRows={8}
                renderRow={request =>
                    <React.Fragment
                        key={`customerRequestRow_${request.id}`}
                    >
                        <TableRow
                            request={request}
                            handleClickTableRow={handleClickTableRow}
                        />
                    </React.Fragment>
                }
            />
        );
    });

export default CustomerRequestTable;
import React, {FC} from 'react';
import {ICustomerRequest} from "../../../../model/customer/CustomerRequest";
import {Grid} from "@mui/material";
import CustomerRequestCard from "./CustomerRequestCard";

interface Props {
    requests: ICustomerRequest[]
    isLoading?: boolean,
    handleClickCard?: (request: ICustomerRequest) => void
}

const CustomerRequestList: FC<Props> =
    ({
         requests,
         isLoading,
         handleClickCard
     }) => {
        return (
            <Grid
                container
                spacing={2}
            >
                {isLoading &&
                    [...new Array(10)].map(() =>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            key={`customerRequestSkeleton_${Math.random()}`}
                        >
                            <CustomerRequestCard
                                isLoading={true}
                            />
                        </Grid>
                    )
                }
                {requests.map(request =>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        key={`customerRequestCard_${request.id}`}
                    >
                        <CustomerRequestCard
                            request={request}
                            handleClickCard={handleClickCard}
                        />
                    </Grid>
                )}
            </Grid>
        );
    };

export default CustomerRequestList;
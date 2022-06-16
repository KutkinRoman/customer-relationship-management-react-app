import React, {createContext, FC} from 'react';

import {CustomerRequestEventColorStore} from "../store/customer-request/CustomerRequestEventColorStore";

const store = new CustomerRequestEventColorStore()

interface Props {
    children: React.ReactNode

}

const CustomerRequestEventColorContextProvider: FC<Props> = ({children}) => {
    return (
        <React.Fragment>
            {children}
            {/*<CustomerRequestFab/>*/}
        </React.Fragment>
    );
};

const CustomerRequestEventColorContext = createContext<CustomerRequestEventColorStore>(store)

export {
    CustomerRequestEventColorContextProvider,
    CustomerRequestEventColorContext
} ;
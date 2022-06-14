import React, {ReactNode} from "react";
import {AppParams, AppPaths} from "./AppPaths";
import HomePage from "../pages/public/HomePage";
import CoachingTimeTablePage from "../pages/public/CoachingTimeTablePage";
import NotFoundPage from "../pages/public/NotFoundPage";
import PersonSearchPage from "../pages/crm/PersonSearchPage";
import PersonRegistrationPage from "../pages/crm/PersonRegistrationPage";
import CashPage from "../pages/crm/CashPage";
import CoachPage from "../pages/crm/CoachPage";
import ProductPage from "../pages/crm/ProductPage";
import CustomerRequestsPage from "../pages/crm/CustomerRequestsPage";
import NewCustomerRequestsPage from "../pages/crm/NewCustomerRequestsPage";
import ConversationsPage from "../pages/crm/ConversationsPage";
import CoachingTimeTableCRMPage from "../pages/crm/CoachingTimeTableCRMPage";

interface IAppRoute {
    readonly path: string
    readonly element: ReactNode
}

class AppRoute implements IAppRoute {
    readonly path: string;
    readonly element: ReactNode;

    constructor(path: string, element: ReactNode) {
        this.path = path;
        this.element = element;
    }
}

const publicRoutes: IAppRoute[] = [
    new AppRoute(AppPaths.index, <HomePage/>),
    new AppRoute(AppPaths.coachingTimeTable, <CoachingTimeTablePage/>),
    new AppRoute("/*", <NotFoundPage/>)
]

const CRMRoutes: IAppRoute[] = [
    new AppRoute("", <PersonSearchPage/>),
    new AppRoute(AppPaths.registration, <PersonRegistrationPage/>),
    new AppRoute(AppPaths.registration + '/:' + AppParams.personId, <PersonRegistrationPage/>),
    new AppRoute(AppPaths.cash, <CashPage/>),
    new AppRoute(AppPaths.coach, <CoachPage/>),
    new AppRoute(AppPaths.products, <ProductPage/>),
    new AppRoute(AppPaths.customerRequests, <CustomerRequestsPage/>),
    new AppRoute(AppPaths.newCustomerRequests, <NewCustomerRequestsPage/>),
    new AppRoute(AppPaths.conversations, <ConversationsPage/>),
    new AppRoute(AppPaths.coachingTimeTable, <CoachingTimeTableCRMPage/>),
    new AppRoute("/*", <NotFoundPage/>)
]

export {
    publicRoutes,
    CRMRoutes
};

export type {IAppRoute};

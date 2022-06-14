import React, {FC} from 'react';
import Wrapper from "../UI/wrapper/Wrapper";
import NavBar from "../UI/navbar/NavBar";
import Footer from "../UI/footer/Footer";
import PageContent from "../UI/page-content/PageContent";
import {Route, Routes} from "react-router-dom";
import {CRMNavItems} from "../../router/AppNavItem";
import {CRMRoutes} from "../../router/AppRoute";
import {PersonFormContextProvider} from "../../context/PersonFormContext";
import {CoachingContextProvider} from "../../context/CoachingContext";
import {CoachContextProvider} from "../../context/CoachContext";
import {CoachingTimeTableContextProvider} from "../../context/CoachingTimeTableContext";

const CRMWrapper: FC = () => {
    return (
        <PersonFormContextProvider>
            <CoachingContextProvider>
                <CoachingTimeTableContextProvider>
                    <CoachContextProvider>
                        <Wrapper>
                            <NavBar
                                items={CRMNavItems}
                            />
                            <PageContent>
                                <Routes>
                                    {CRMRoutes.map(route =>
                                        <Route
                                            key={`CRMPage_${route.path}`}
                                            path={route.path}
                                            element={route.element}
                                        />
                                    )}
                                </Routes>
                            </PageContent>
                            <Footer/>
                        </Wrapper>
                    </CoachContextProvider>
                </CoachingTimeTableContextProvider>
            </CoachingContextProvider>
        </PersonFormContextProvider>
    );
};

export default CRMWrapper;
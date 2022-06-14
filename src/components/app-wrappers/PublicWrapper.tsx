import React from 'react';
import Wrapper from "../UI/wrapper/Wrapper";
import NavBar from "../UI/navbar/NavBar";
import PageContent from "../UI/page-content/PageContent";
import Footer from "../UI/footer/Footer";
import {Route, Routes} from "react-router-dom";
import {publicNavItems} from "../../router/AppNavItem";
import {publicRoutes} from "../../router/AppRoute";

const PublicWrapper = () => {
    return (
        <Wrapper>
            <NavBar
                items={publicNavItems}
            />
            <PageContent>
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            key={`publicPage_${route.path}`}
                            path={route.path}
                            element={route.element}
                        />
                    )}
                </Routes>
            </PageContent>
            <Footer/>
        </Wrapper>
    );
};

export default PublicWrapper;
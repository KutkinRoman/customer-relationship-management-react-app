import React, {useEffect, useMemo} from 'react';
import Wrapper from "../UI/wrapper/Wrapper";
import {profileCoachNavItems} from "../../router/AppNavItem";
import NavBar from "../UI/navbar/NavBar";
import Footer from "../UI/footer/Footer";
import PageContent from "../UI/page-content/PageContent";
import {Route, Routes} from "react-router-dom";
import {profileRoutes} from "../../router/AppRoute";
import {ProfileContextProvider, useProfile} from "../../context/ProfileContext";

const ProfileWrapper = () => {
    return (
        <ProfileContextProvider>
            <ProfileContent/>
        </ProfileContextProvider>
    );
};

const ProfileContent = () => {

    const {person} = useProfile()

    const navItems: any = useMemo(() => {
        if (person && person.isCoach) {
            return profileCoachNavItems
        }
        return profileRoutes
    }, [person])

    return (
        <Wrapper>
            <NavBar items={navItems}/>
            <PageContent>
                <Routes>
                    {profileRoutes.map(route =>
                        <Route
                            key={`ProfilePage_${route.path}`}
                            path={route.path}
                            element={route.element}
                        />
                    )}
                </Routes>
            </PageContent>
            <Footer/>
        </Wrapper>
    )
}

export default ProfileWrapper;
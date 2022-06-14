import React, {FC, useContext} from 'react';
import {AppBar, Box, Container, Fade, Slide, Toolbar, useScrollTrigger} from "@mui/material";
import NavBarItem from "./NavBarItem";
import {useNavigate} from 'react-router-dom'
import {IAppNavItem} from "../../../router/AppNavItem";
import LogoutIcon from '@mui/icons-material/Logout';
import AppIconButton from "../button/AppIconButton";
import {AuthContext} from "../../../context/AuthContext";

interface NavBarProps {
    items: IAppNavItem[]
}

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const NavBar: FC<NavBarProps> = ({items}) => {

    const navigate = useNavigate()
    const authStore = useContext(AuthContext)

    const handleOnClickItem = (item: IAppNavItem) => {
        navigate(item.path)
    }

    return (
        <HideOnScroll>
            <AppBar
                sx={{backgroundColor: 'navbar'}}
            >
                <Container
                    maxWidth={'xl'}
                >
                    <Toolbar>
                        {items.map(item =>
                            <NavBarItem
                                key={`navItem_${item.path}`}
                                item={item}
                                handleOnClickItem={handleOnClickItem}
                            />
                        )}
                        <Box
                            width={'100%'}
                            textAlign={'end'}
                        >
                            {authStore?.isAuth &&
                                <AppIconButton
                                    color={'primary'}
                                    onClick={() => authStore.logout()}
                                >
                                    <LogoutIcon/>
                                </AppIconButton>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    );
};


export default NavBar;
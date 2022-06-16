import React, {FC, useContext} from 'react';
import {Box, Container, Slide, Toolbar, useScrollTrigger} from "@mui/material";
import NavBarItem from "./NavBarItem";
import {useNavigate} from 'react-router-dom'
import {IAppNavItem} from "../../../router/AppNavItem";
import LogoutIcon from '@mui/icons-material/Logout';
import AppIconButton from "../button/AppIconButton";
import {AuthContext} from "../../../context/AuthContext";
import {AppBarStyled} from "./styles";
import AppModeSwitch from "../swith/AppModeSwitch";
import {CustomThemeContext} from "../../../context/CustomThemeContext";
import {observer} from "mobx-react-lite";

interface NavBarProps {
    items: IAppNavItem[]
}

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const {children, window} = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const NavBar: FC<NavBarProps> = observer(({items}) => {

    const navigate = useNavigate()
    const authStore = useContext(AuthContext)
    const customTheme = useContext(CustomThemeContext)
    const handleOnClickItem = (item: IAppNavItem) => {
        navigate(item.path)
    }

    return (
        <HideOnScroll>
            <AppBarStyled>
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
                            <AppModeSwitch
                                mode={customTheme.theme.palette.mode}
                                changeMode={() => customTheme.changeTheme()}
                            />
                            {authStore?.isAuth &&
                                <AppIconButton
                                    onClick={() => authStore.logout()}
                                >
                                    <LogoutIcon/>
                                </AppIconButton>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBarStyled>
        </HideOnScroll>
    );
});


export default NavBar;
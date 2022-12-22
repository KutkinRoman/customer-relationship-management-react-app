import React from 'react';
import {IAppNavItem} from "../../../router/AppNavItem";
import AppIconButton from "../button/AppIconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {Box, Drawer} from "@mui/material";
import useModal from "../../../hooks/useModal";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {Heading, SubTitle} from "../typography/Typography";

interface DrawerProps {
    items: IAppNavItem[]
}

const AppDrawer = ({items}: DrawerProps) => {

    const {
        handleOpen,
        handleClose,
        isOpen
    } = useModal()


    return (
        <div>
            <AppIconButton>
                <MenuIcon onClick={handleOpen}/>
            </AppIconButton>
            <Drawer
                anchor={'left'}
                open={isOpen}
                onClose={handleClose}
            >
                <Box
                    role="presentation"
                    onClick={handleClose}
                >
                    <List>
                        {items.map(item =>
                            <ListItem key={item.path}>
                                <ListItemButton>
                                    <SubTitle>
                                        {item.title}
                                    </SubTitle>
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                </Box>
            </Drawer>
        </div>
    );
};

export default AppDrawer;
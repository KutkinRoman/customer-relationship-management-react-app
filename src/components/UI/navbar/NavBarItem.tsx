import React, {FC} from 'react';
import {IAppNavItem} from "../../../router/AppNavItem";
import {Box, Button} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, {bindMenu, bindTrigger} from 'material-ui-popup-state';


interface NavBarItemProps {
    item: IAppNavItem,
    handleOnClickItem: (item: IAppNavItem) => void
}

const NavBarItem: FC<NavBarItemProps> =
    ({
         item,
         handleOnClickItem
     }) => {

        return (
            <React.Fragment>
                {item.items
                    ? <PopupState
                        variant={'popover'}
                        popupId={`navBarItem_${item.path}`}
                    >
                        {(popupState) => (
                            <React.Fragment>
                                <Button
                                    {...bindTrigger(popupState)}
                                    size={'small'}
                                    // endIcon={<KeyboardArrowDownIcon/>}
                                >
                                    {item.title}
                                </Button>
                                <Menu {...bindMenu(popupState)}
                                >
                                    {item.items?.map(menuItem =>
                                        <MenuItem
                                            key={`navBarMenuItem_${menuItem.path}`}
                                            onClick={popupState.close}
                                        >
                                            <Box
                                                onClick={() => handleOnClickItem(menuItem)}
                                            >
                                                {menuItem.title}
                                            </Box>
                                        </MenuItem>
                                    )}
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                    : <Button
                        size={'large'}
                        onClick={() => handleOnClickItem(item)}
                    >
                        {item.title}
                    </Button>
                }
            </React.Fragment>
        );
    };

export default NavBarItem;
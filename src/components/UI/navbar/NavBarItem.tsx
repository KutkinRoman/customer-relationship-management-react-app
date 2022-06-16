import React, {FC, useMemo} from 'react';
import {IAppNavItem} from "../../../router/AppNavItem";
import {Box, Button} from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, {bindMenu, bindTrigger} from 'material-ui-popup-state';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {useLocation} from 'react-router-dom'

interface NavBarItemProps {
    item: IAppNavItem,
    handleOnClickItem: (item: IAppNavItem) => void
}

const NavBarItem: FC<NavBarItemProps> =
    ({
         item,
         handleOnClickItem
     }) => {

        const location = useLocation()

        const isPath = useMemo(() => {
            return item.indexPath && location.pathname.startsWith(item.getPathName())
        }, [location.pathname])

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
                                    sx={{minWidth: '100px', color: 'text.secondary'}}
                                    size={'large'}
                                    startIcon={
                                        isPath
                                            ? <FiberManualRecordIcon
                                                fontSize={'small'}
                                                color={'primary'}
                                            />
                                            : ''
                                    }
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
                        startIcon={
                            isPath
                                ? <FiberManualRecordIcon
                                    fontSize={'small'}
                                    color={'primary'}
                                />
                                : ''
                        }
                        sx={{minWidth: '100px', color: 'text.secondary'}}
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
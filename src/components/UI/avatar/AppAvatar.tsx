import Avatar from '@mui/material/Avatar';

import React, {FC} from 'react';

interface AppAvatarProps{
    children: React.ReactNode
}

const AppAvatar: FC<AppAvatarProps> = (props) => {
    return (
        <Avatar
            sx={{backgroundColor: 'secondary.main'}}
        >
            {props.children}
        </Avatar>
    );
};

export default AppAvatar;
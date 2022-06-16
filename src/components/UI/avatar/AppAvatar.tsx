import Avatar from '@mui/material/Avatar';

import React, {FC} from 'react';
import {Skeleton} from "@mui/material";


interface AppAvatarProps {
    children: React.ReactNode
    isLoading?: boolean
    size?: number
    color?: string
}

const AppAvatar: FC<AppAvatarProps> =
    ({
         children,
         isLoading,
         size = 50,
         color = 'secondary.main'
     }) => {

        return (
            <React.Fragment>
                {isLoading
                    ?
                    <Skeleton
                        variant={'circular'}
                        width={size}
                        height={size}
                        color={color}
                    />
                    :
                    <Avatar
                        sx={{
                            backgroundColor: color,
                            width: size,
                            height: size
                        }}
                    >
                        {children}
                    </Avatar>
                }
            </React.Fragment>

        );
    };

export default AppAvatar;
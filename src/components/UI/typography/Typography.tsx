import React, {FC} from 'react';
import {Skeleton, Typography} from "@mui/material";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

interface Props {
    children: React.ReactNode
    color?: string
    sx?: SxProps<Theme>;
    isLoading?: boolean
}

export const Heading: FC<Props> = (props) => {
    return (
        <Typography
            variant={'h6'}
            color={props.color || 'text.primary'}
            sx={props.sx}
        >
            {props.isLoading
                ?
                <Skeleton
                    animation={'wave'}
                />
                : props.children
            }
        </Typography>
    );
};

export const SubTitle: FC<Props> = (props) => {
    return (
        <Typography
            variant={'subtitle2'}
            color={props.color || 'text.secondary'}
            sx={props.sx}
        >
            {props.isLoading
                ?
                <Skeleton
                    animation={'wave'}
                />
                : props.children
            }
        </Typography>
    );
};

export const Body: FC<Props> = (props) => {
    return (
        <Typography
            variant={'subtitle2'}
            color={props.color || 'text.secondary'}
            sx={props.sx}
        >
            {props.isLoading
                ?
                <Skeleton
                    animation={'wave'}
                />
                : props.children
            }
        </Typography>
    );
};

export const Caption: FC<Props> = (props) => {
    return (
        <Typography
            variant={'caption'}
            color={props.color || 'text.secondary'}
            sx={props.sx}
        >
            {props.isLoading
                ?
                <Skeleton
                    animation={'wave'}
                />
                : props.children
            }
        </Typography>
    );
};














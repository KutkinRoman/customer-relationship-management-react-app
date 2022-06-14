import React, {FC} from 'react';
import {Box, CircularProgress} from "@mui/material";


const DaySkeleton: FC = () => {
    return (
        <React.Fragment>
            <Box
                width={'100%'}
                height={'100%'}
                textAlign={'center'}
            >
                <CircularProgress
                    color={'primary'}
                />
            </Box>
        </React.Fragment>
    );
};

export default DaySkeleton;
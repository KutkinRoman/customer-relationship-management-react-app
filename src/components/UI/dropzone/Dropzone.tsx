import React, {FC} from 'react';
import {useDropzone} from "react-dropzone";
import Box from "@mui/material/Box";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

interface Props {
    onDrop: (acceptedFiles: File[]) => void
}

const AppDropzone: FC<Props> = ({onDrop}) => {

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <Box
            width={'100%'}
            height={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            {...getRootProps()}
        >
            {/*<img/>*/}
            <input {...getInputProps()} />
            {isDragActive
                ?
                <AddAPhotoIcon
                    fontSize={'large'}
                    color={'primary'}
                />
                :
                <AddAPhotoIcon
                    fontSize={'large'}
                    color={'inherit'}
                />
            }
        </Box>
    );
};

export default AppDropzone;
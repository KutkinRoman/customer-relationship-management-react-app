import React from 'react';
import {useDropzone} from "react-dropzone";
import Box from "@mui/material/Box";

const Dropzone = () => {

    const {getRootProps, getInputProps, isDragActive} = useDropzone()

    return (
        <Box
            {...getRootProps()}
        >
            {/*<img/>*/}
            <input {...getInputProps()} />
            {isDragActive ?
                <h4>Сохранить</h4> :
                <h4>Добавить фото</h4>}
        </Box>
    );
};

export default Dropzone;
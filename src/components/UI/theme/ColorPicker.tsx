import React, {FC} from 'react';
import {RgbaStringColorPicker} from "react-colorful";
import {Box} from "@mui/material";
import {Heading} from "../typography/Typography";

interface Props {
    title?: string
    getColor: () => string | any,
    setColor: (color: string) => void
    update?: () => void
}

const ColorPicker: FC<Props> =
    ({
         title,
         getColor,
         setColor,
         update
     }) => {

        const handleOnChange = (color: string) => {
            const newColor = color
            setColor(newColor)
            if (update) {
                setTimeout(() => {
                    if (newColor === getColor()) {
                        update()
                    }
                }, 100)
            }
        }

        return (
            <Box
                padding={'15px'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
            >
                <Heading
                    sx={{textAlign: 'center'}}
                >
                    {title}
                </Heading>
                <RgbaStringColorPicker
                    color={getColor()}
                    onChange={handleOnChange}
                />
            </Box>
        );
    };

export default ColorPicker;
import {useState} from "react";

export const useMouseEnter = () => {

    const [mouseEnter, setMouseEnter] = useState(false)

    function onMouseEnter() {
        setMouseEnter(true)
    }

    function onMouseLeave() {
        setMouseEnter(false)
    }

    return {
        mouseEnter,
        onMouseEnter,
        onMouseLeave,
    }
}
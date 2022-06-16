import {useState} from "react";

export const useReader = () => {

    const fileReader = new FileReader()
    const [file, setFile] = useState<File | null>(null)
    const [result, setResult] = useState<any>()

    const read = (file: File) => {
        setFile(file)
        fileReader.onload = () => {
            setResult(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }

    const clear = () => {
        setFile(null)
        setResult(null)
    }

    return {
        read,
        file,
        result,
        clear
    }

}
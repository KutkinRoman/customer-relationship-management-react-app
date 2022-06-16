import {createContext} from "react";
import {ImageStore} from "../model/image/ImageStore";

export const ImageContext = createContext(new ImageStore())

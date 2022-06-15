import {AppBar} from "@mui/material";
import {styled} from "@mui/material/styles";

export const AppBarStyled = styled(AppBar)(({theme}) => ({
    // @ts-ignore
    background: theme.palette.navbar.linearGradient,
}))
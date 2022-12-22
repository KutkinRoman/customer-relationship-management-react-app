import {styled} from "@mui/material/styles";
import {Card} from "@mui/material";

export const HoursWorkedItemStyled = styled(Card)(({theme}) => ({
    marginBottom: '5px',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    alignItems: 'center',
    border: 'solid 1px',
    borderColor: theme.palette.primary.light
}))
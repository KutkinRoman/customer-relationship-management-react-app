import {styled} from "@mui/material/styles";
import {Box, Fab} from "@mui/material";

const CustomizationThemePanelPaper = styled(Box)(({theme}) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
}))


const CustomizationThemePanelHeader = styled(Box)(({theme}) => ({
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))

const CustomizationThemePanelContent = styled(Box)(({theme}) => ({
    padding: '10px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxHeight: '650px'
}))

const SettingsFabStyled = styled(Fab)(({theme}) => ({
    position: 'fixed',
    bottom: 10,
    right: 10,
    backgroundColor: theme.palette.primary.main
}))
export {
    CustomizationThemePanelContent,
    CustomizationThemePanelHeader,
    CustomizationThemePanelPaper,
    SettingsFabStyled
}
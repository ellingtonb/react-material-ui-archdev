import {createMuiTheme} from "@material-ui/core";

const customColors = {
    arcBlue: '#0B72B9',
    arcOrange: '#FFBA60'
};

const theme = createMuiTheme({
    palette: {
        common: {
            blue: customColors.arcBlue,
            orange: customColors.arcOrange
        },
        primary: {
            main: customColors.arcBlue
        },
        secondary: {
            main: customColors.arcOrange
        },
        type: "light"
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 400,
            fontSize: '1rem',
        },
        estimate: {
            fontFamily: 'Pacifico',
            fontSize: '1rem',
            textTransform: 'none',
            color: 'white'
        }
    }
});

export default theme;
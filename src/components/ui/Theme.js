import {createMuiTheme} from "@material-ui/core";

const customColors = {
    arcBlue: '#0B72B9',
    arcOrange: '#FFBA60',
    arcGrey: "#868686"
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
        },
        subtitle1: {
            fontSize: "1.15rem",
            fontWeight: 300,
            color: customColors.arcGrey
        },
        subtitle2: {
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 300
        },
        body2: {
            fontSize: "1.15rem",
            color: customColors.arcGrey,
            fontWeight: 300
        },
        caption: {
            fontSize: "0.8rem",
            fontWeight: 300,
            color: customColors.arcGrey
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: '2.2rem',
            color: customColors.arcBlue,
            lineHeight: 1.5
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: customColors.arcBlue
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: '1.5rem',
            color: customColors.arcBlue,
            fontWeight: 700
        },
        learnButton: {
            borderColor: customColors.arcBlue,
            color: customColors.arcBlue,
            borderWidth: 2,
            textTransform: 'none',
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        }
    }
});

export default theme;
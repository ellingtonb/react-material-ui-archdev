import React, {useState} from 'react';
import {ThemeProvider} from "@material-ui/styles";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column"
    }
}));

function App() {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div className={classes.container}>
                    <Header
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                    />
                    <Switch>
                        <Route exact path={"/"} component={LandingPage} />
                        <Route exact path={"/services"} component={() => <div>Services</div>} />
                        <Route exact path={"/customsoftware"} component={() => <div>Custom Software</div>} />
                        <Route exact path={"/mobileapps"} component={() => <div>Mobile Apps</div>} />
                        <Route exact path={"/websites"} component={() => <div>Websites</div>} />
                        <Route exact path={"/revolution"} component={() => <div>The Revolution</div>} />
                        <Route exact path={"/about"} component={() => <div>About Us</div>} />
                        <Route exact path={"/contact"} component={() => <div>Contact Us</div>} />
                        <Route exact path={"/estimate"} component={() => <div>Estimate</div>} />
                    </Switch>
                    <Footer
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                    />
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

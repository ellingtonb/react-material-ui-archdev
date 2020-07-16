import React, {useState} from 'react';
import {ThemeProvider} from "@material-ui/styles";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import {makeStyles} from "@material-ui/core/styles";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";
import Websites from "./Websites";
import Revolution from "./Revolution";
import About from "./About";
import Contact from "./Contact";

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
                        <Route exact path={"/"} component={() =>
                            <LandingPage
                                selectedTab={selectedTab}
                                setSelectedTab={setSelectedTab}
                                selectedIndex={selectedIndex}
                                setSelectedIndex={setSelectedIndex}
                            />
                        } />
                        <Route exact path={"/services"} component={() =>
                            <Services
                                selectedTab={selectedTab}
                                setSelectedTab={setSelectedTab}
                                selectedIndex={selectedIndex}
                                setSelectedIndex={setSelectedIndex}
                            />
                        } />
                        <Route exact path={"/customsoftware"} component={() =>
                            <CustomSoftware
                                selectedTab={selectedTab}
                                setSelectedTab={setSelectedTab}
                                selectedIndex={selectedIndex}
                                setSelectedIndex={setSelectedIndex}
                            />
                        } />
                        <Route exact path={"/mobileapps"} component={() =>
                            <MobileApps
                                selectedTab={selectedTab}
                                setSelectedTab={setSelectedTab}
                                selectedIndex={selectedIndex}
                                setSelectedIndex={setSelectedIndex}
                            />
                        } />
                        <Route exact path={"/websites"} component={() =>
                            <Websites
                                selectedTab={selectedTab}
                                setSelectedTab={setSelectedTab}
                                selectedIndex={selectedIndex}
                                setSelectedIndex={setSelectedIndex}
                            />
                        } />
                        <Route exact path={"/revolution"} component={() =>
                            <Revolution
                                selectedTab={selectedTab}
                                setSelectedTab={setSelectedTab}
                                selectedIndex={selectedIndex}
                                setSelectedIndex={setSelectedIndex}
                            />
                        } />
                        <Route exact path={"/about"} component={() =>
                            <About
                                selectedTab={selectedTab}
                                setSelectedTab={setSelectedTab}
                                selectedIndex={selectedIndex}
                                setSelectedIndex={setSelectedIndex}
                            />
                        } />
                        <Route exact path={"/contact"} component={() =>
                            <Contact
                                selectedTab={selectedTab}
                                setSelectedTab={setSelectedTab}
                                selectedIndex={selectedIndex}
                                setSelectedIndex={setSelectedIndex}
                            />
                        } />
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

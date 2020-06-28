import React from 'react';
import Lottie from 'react-lottie';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';
import ButtonArrow from "./ui/ButtonArrow";
import {useTheme} from "@material-ui/styles";
import CallToAction from "./ui/CallToAction";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop: "3em",
        /*marginBottom: "2em",*/
        [theme.breakpoints.down("md")]: {
            marginTop: "1em",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "1em",
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
            marginRight: "1em",
        }
    },
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 35,
        width: 140,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 35,
        width: 140
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    subtitle: {
        marginBottom: "0.2em"
    },
    icon: {
        marginLeft: "2em",
        height: 130,
        width: 130,
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "6em",
        [theme.breakpoints.down("sm")]: {
            marginTop: "2em",
            padding: 25
        },
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "3em",
            paddingBottom: "3em",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: '100%'
        }
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    }
}));

const LandingPage = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const tabChangeHandler = (event, value) => {
        props.setSelectedTab(value);
    };

    const indexChangeHandler = (event, index) => {
        props.setSelectedIndex(index);
    };

    return (
        <Grid container direction={"column"} className={classes.mainContainer}>
            <Grid item> {/*-- HERO BLOCK --*/}
                <Grid container justify={"flex-end"} alignItems={"center"} direction={"row"}>
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography variant={"h2"} align={"center"}>
                            Bringing West Coast Technology
                            <br />
                            to the Midwest.
                        </Typography>
                        <Grid container justify={"center"} spacing={2} className={classes.buttonContainer}>
                            <Grid item>
                                <Button
                                    className={classes.estimateButton}
                                    variant={"contained"}
                                    component={Link}
                                    to={"/estimate"}
                                    onClick={tabChangeHandler.bind(this, this, null)}
                                >Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant={"outlined"}
                                    className={classes.learnButtonHero}
                                    component={Link}
                                    to={"/revolution"}
                                    onClick={tabChangeHandler.bind(this, this, 2)}
                                >
                                    <span style={{ marginRight: 4 }}>Learn More</span>
                                    <ButtonArrow
                                        width={15}
                                        height={15}
                                        fill={theme.palette.common.blue}
                                    />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie
                            options={defaultOptions}
                            height={"100%"}
                            width={"100%"}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    direction={"row"}
                    className={classes.serviceContainer}
                    justify={matchesSM ? 'center' : undefined}
                >
                    <Grid item style={{
                        marginLeft: matchesSM ? 0 : "3em",
                        textAlign: matchesSM ? 'center' : undefined
                    }}>
                        <Typography variant={"h4"}>
                            Custom Software Development
                        </Typography>
                        <Typography variant={"subtitle1"} className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            Complete digital solution, from investigation to{" "}
                            <span className={classes.specialText}>celebration</span>.
                        </Typography>
                        <Button
                            variant={"outlined"}
                            className={classes.learnButton}
                            style={{ marginTop: "0.5em" }}
                            component={Link}
                            to={"/customsoftware"}
                            onClick={(event) => { tabChangeHandler(event, 1); indexChangeHandler(event, 1); }}
                        >
                            <span style={{ marginRight: 4 }}>Learn More</span>
                            <ButtonArrow
                                width={10}
                                height={10}
                                fill={theme.palette.common.blue}
                            />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt={"Custom Software Icon"} src={customSoftwareIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    direction={"row"}
                    className={classes.serviceContainer}
                    justify={matchesSM ? 'center' : 'flex-end'}
                >
                    <Grid item style={{
                        textAlign: matchesSM ? 'center' : undefined
                    }}>
                        <Typography variant={"h4"}>
                            iOS/Android App Development
                        </Typography>
                        <Typography variant={"subtitle1"} className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            Integrate your web experience or create a standalone
                            app{ matchesSM ? null : <br /> }with either mobile platform.
                        </Typography>
                        <Button
                            variant={"outlined"}
                            className={classes.learnButton}
                            style={{ marginTop: "0.5em" }}
                            component={Link}
                            to={"/mobileapps"}
                            onClick={(event) => { tabChangeHandler(event, 1); indexChangeHandler(event, 2); }}
                        >
                            <span style={{ marginRight: 4 }}>Learn More</span>
                            <ButtonArrow
                                width={10}
                                height={10}
                                fill={theme.palette.common.blue}
                            />
                        </Button>
                    </Grid>
                    <Grid item style={{
                        marginRight: matchesSM ? 0 : "3em",
                    }}>
                        <img className={classes.icon} alt={"iOS/Android App Development Icon"} src={mobileAppsIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    direction={"row"}
                    className={classes.serviceContainer}
                    justify={matchesSM ? 'center' : undefined}
                >
                    <Grid item style={{
                        marginLeft: matchesSM ? 0 : "3em",
                        textAlign: matchesSM ? 'center' : undefined
                    }}>
                        <Typography variant={"h4"}>
                            Website Development
                        </Typography>
                        <Typography variant={"subtitle1"} className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            Optimized for Search Engines, built to speed.
                        </Typography>
                        <Button
                            variant={"outlined"}
                            className={classes.learnButton}
                            style={{ marginTop: "0.5em" }}
                            component={Link}
                            to={"/websites"}
                            onClick={(event) => { tabChangeHandler(event, 1); indexChangeHandler(event, 3); }}
                        >
                            <span style={{ marginRight: 4 }}>Learn More</span>
                            <ButtonArrow
                                width={10}
                                height={10}
                                fill={theme.palette.common.blue}
                            />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt={"Website Development Icon"} src={websitesIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container style={{ height: "45em", marginTop: "6em" }} alignItems={"center"} justify={"center"}>
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction={"column"} style={{ textAlign: "center" }}>
                                <Grid item>
                                    <Typography variant={"h3"} gutterBottom>
                                        The Revolution
                                    </Typography>
                                    <Typography variant={"subtitle1"} gutterBottom>
                                        Visionary insights couple with cutting-edge technology is a recipe for revolution.
                                    </Typography>
                                    <Button
                                        variant={"outlined"}
                                        className={classes.learnButtonHero}
                                        component={Link}
                                        to={"/revolution"}
                                        onClick={tabChangeHandler.bind(this, this, 2)}
                                    >
                                        <span style={{ marginRight: 4 }}>Learn More</span>
                                        <ButtonArrow
                                            width={15}
                                            height={15}
                                            fill={theme.palette.common.blue}
                                        />
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground} />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container style={{ height: "35em" }} alignItems={"center"} direction={"row"}>
                    <Grid item container style={{ position: "absolute" }}
                          direction={matchesXS ? "column" : "row"}
                          spacing={matchesXS ? 2 : 0}
                    >
                        <Grid item sm style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : "5em", textAlign: matchesXS ? "center" : "left" }}>
                            <Grid container direction={"column"}>
                                <Typography variant={"h2"} style={{ color: "white" }}>About Us</Typography>
                                <Typography variant={"subtitle2"}>Let's get personal.</Typography>
                                <Grid item>
                                    <Button variant={"outlined"}
                                            className={classes.learnButton}
                                            style={{ marginTop: "0.5em", color: "white", borderColor: "white" }}
                                            component={Link}
                                            to={"/about"}
                                            onClick={tabChangeHandler.bind(this, this, 3)}
                                    >
                                        <span style={{ marginRight: 4 }}>Learn More</span>
                                        <ButtonArrow
                                            width={10}
                                            height={10}
                                            fill={"white"}
                                        />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm style={{ marginRight: matchesXS ? 0 : matchesSM ? '2em' : "5em", textAlign: matchesXS ? "center" : "right" }}>
                            <Grid container direction={"column"}>
                                <Typography variant={"h2"} style={{ color: "white" }}>Contact Us</Typography>
                                <Typography variant={"subtitle2"}>Say hello! <span role={"img"} aria-label={"Waving Hand"}>👋🏻</span></Typography>
                                <Grid item>
                                    <Button variant={"outlined"}
                                            className={classes.learnButton}
                                            style={{ marginTop: "0.5em", color: "white", borderColor: "white" }}
                                            component={Link}
                                            to={"/contact"}
                                            onClick={tabChangeHandler.bind(this, this, 3)}
                                    >
                                        <span style={{ marginRight: 4 }}>Learn More</span>
                                        <ButtonArrow
                                            width={10}
                                            height={10}
                                            fill={"white"}
                                        />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div className={classes.infoBackground} />
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction
                    selectedTab={props.selectedTab}
                    setSelectedTab={props.setSelectedTab}
                />
            </Grid>
        </Grid>
    );
};

export default LandingPage;
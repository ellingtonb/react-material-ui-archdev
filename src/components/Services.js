import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ButtonArrow from "./ui/ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles(theme => ({
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
        marginTop: "4em",
        [theme.breakpoints.down("sm")]: {
            marginTop: "2em",
            padding: 25
        },
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
}));

const Services = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const tabChangeHandler = (event, value) => {
        props.setSelectedTab(value);
    };

    const indexChangeHandler = (event, index) => {
        props.setSelectedIndex(index);
    };

    return (
        <Grid container direction={"column"} style={{ marginBottom: "3em" }}>
            <Grid item style={{
                marginLeft: matchesSM ? 0 : "3em",
                marginTop: matchesSM ? "1em" : "2em"
            }}>
                <Typography
                    align={matchesSM ? "center" : undefined}
                    variant={"h2"}
                    gutterBottom
                >Services</Typography>
            </Grid>
            <Grid item>
                <Grid
                    container
                    direction={"row"}
                    className={classes.serviceContainer}
                    justify={matchesSM ? 'center' : 'flex-end'}
                    style={{
                        marginTop: matchesSM ? "1em" : "4em",
                    }}
                >
                    <Grid item style={{
                        textAlign: matchesSM ? 'center' : undefined,
                        width: matchesSM ? undefined : "33em"
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
                        <img
                            className={classes.icon}
                            alt={"iOS/Android App Development Icon"}
                            src={mobileAppsIcon}
                            width={"250em"}
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
                        textAlign: matchesSM ? 'center' : undefined,
                        width: matchesSM ? undefined : "33em"
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
                    <Grid item style={{ marginRight: matchesSM ? 0 : "3em" }}>
                        <img
                            className={classes.icon}
                            alt={"Website Development Icon"}
                            src={websitesIcon}
                            width={"250em"}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Services;
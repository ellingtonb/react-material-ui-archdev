import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from '@material-ui/core/Hidden';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import roots from '../assets/root.svg';

import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimations from '../animations/scaleAnimation/data.json';
import automationAnimation from '../animations/automationAnimation/data.json';
import uxAnimation from '../animations/uxAnimation/data';

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
        }
    },
    arrowContainer: {
        marginTop: "0.2em"
    },
    heading: {
        maxWidth: "40em"
    },
    itemContainer: {
        maxWidth: "30em"
    }
}));

const CustomSoftware = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const documentsOptions = {
        loop: true,
        autoplay: true,
        animationData: documentsAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const scaleOptions = {
        loop: true,
        autoplay: true,
        animationData: scaleAnimations,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const automationOptions = {
        loop: true,
        autoplay: true,
        animationData: automationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const uxOptions = {
        loop: true,
        autoplay: true,
        animationData: uxAnimation,
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
        <Grid container direction={"column"}>
            <Grid
                item
                container
                direction={"row"}
                justify={matchesMD ? "center" : undefined}
                className={classes.rowContainer}
                style={{
                    marginTop: matchesXS ? "1em" : "2em"
                }}
            >
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{ marginRight: "1em", marginLeft: "-3.5em" }}>
                        <IconButton
                            style={{ backgroundColor: "transparent" }}
                            component={Link}
                            to={"/services"}
                            onClick={(event) => { tabChangeHandler(event, 0); indexChangeHandler(event, 0); }}
                        >
                            <img src={backArrow} alt={"Back to Services Page"} />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction={"column"} className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant={"h2"}>Custom Software Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant={"body2"} paragraph>
                            Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant={"body2"} paragraph>
                            Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff you do need, and ultimately controls the way you work.
                            Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant={"body2"} paragraph>
                            Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant={"body2"} paragraph>
                            We create exactly what you what, exactly how you want it.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{
                        position: "absolute",
                        right: "20px"
                    }}>
                        <IconButton
                            style={{ backgroundColor: "transparent" }}
                            component={Link}
                            to={"/mobileapps"}
                            onClick={(event) => { tabChangeHandler(event, 0); indexChangeHandler(event, 2); }}
                        >
                            <img src={forwardArrow} alt={"Forward to iOS/Android App Development Page"} />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid
                item
                container
                direction={"row"}
                justify={"center"}
                style={{
                    marginTop: "6em",
                    marginBottom: "8em"
                }}
                className={classes.rowContainer}
            >
                <Grid
                    item
                    container
                    direction={"column"}
                    md
                    alignItems={"center"}
                    style={{
                        maxWidth: "40em"
                    }}
                >
                    <Grid item>
                        <Typography variant={"h4"}>Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightbulb} alt={"Lightbuld"} />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction={"column"}
                    md
                    alignItems={"center"}
                    style={{
                        maxWidth: "40em",
                        marginTop: matchesMD ? "4em" : 0
                    }}
                >
                    <Grid item>
                        <Typography variant={"h4"}>Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopwatch} alt={"Stopwatch"} />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction={"column"}
                    md
                    alignItems={"center"}
                    style={{
                        maxWidth: "40em",
                        marginTop: matchesMD ? "4em" : 0
                    }}
                >
                    <Grid item>
                        <Typography variant={"h4"}>Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt={"Cash"} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                alignItems={matchesMD ? "center" : undefined}
                direction={matchesMD ? "column" : "row"}
                justify={"space-between"}
                className={classes.rowContainer}
            >
                <Grid
                    item
                    container
                    className={classes.itemContainer}
                    md
                    direction={matchesSM ? "column" : "row"}
                    style={{
                        marginBottom: matchesMD ? "10em" : 0
                    }}
                >
                    <Grid item container direction={"column"} md>
                        <Grid item>
                            <Typography variant={"h4"} align={matchesMD ? "center" : undefined}>Digital Documents & Data</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"body2"} paragraph align={matchesMD ? "center" : undefined}>
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                            <Typography variant={"body2"} paragraph align={matchesMD ? "center" : undefined}>
                                Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.
                            </Typography>
                            <Typography variant={"body2"} paragraph align={matchesMD ? "center" : undefined}>
                                By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie
                            options={documentsOptions}
                            style={{ maxHeight: 210, maxWidth: 210, minHeight: 190 }}
                        />
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} md direction={matchesSM ? "column" : "row"}>
                    <Grid item md>
                        <Lottie
                            options={scaleOptions}
                            style={{ maxHeight: 210, maxWidth: 210 }}
                        />
                    </Grid>
                    <Grid item container direction={"column"} md>
                        <Grid item>
                            <Typography variant={"h4"} align={matchesMD ? "center" : "right"}>Scale</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"body2"} paragraph align={matchesMD ? "center" : "right"}>
                                Whether you’re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction={"row"}
                style={{ marginTop: "8em", marginBottom: "8em" }}
                className={classes.rowContainer}
            >
                <Grid item container direction={"column"} alignItems={"center"}>
                    <Grid item>
                        <img
                            src={roots}
                            alt={"Tree with Roots Extending Out"}
                            height={matchesSM ? "300em" : "450em"}
                            width={matchesSM ? "300em" : "450em"}
                        />
                    </Grid>
                    <Grid item className={classes.itemContainer}>
                        <Typography variant={"h4"} align={"center"} gutterBottom>Root-Cause Analysis</Typography>
                        <Typography variant={"body2"} align={"center"} paragraph>
                            Many problems are merely symptoms of larger, underlying issues.
                        </Typography>
                        <Typography variant={"body2"} align={"center"} paragraph>
                            We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                justify={"space-between"}
                alignItems={matchesMD ? "center" : undefined}
                direction={matchesMD ? "column" : "row"}
                className={classes.rowContainer}
                style={{
                    marginBottom: matchesXS ? "2em" : "5em"
                }}
            >
                <Grid
                    item
                    container
                    className={classes.itemContainer}
                    md
                    style={{
                        marginBottom: matchesMD ? "10em" : 0
                    }}
                    direction={matchesSM ? "column" : "row"}
                >
                    <Grid item container direction={"column"} md>
                        <Grid item>
                            <Typography variant={"h4"} align={matchesMD ? "center" : undefined}>Automation</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"body2"} paragraph align={matchesMD ? "center" : undefined}>
                                Why waste time when you don’t have to?
                            </Typography>
                            <Typography variant={"body2"} paragraph align={matchesMD ? "center" : undefined}>
                                We can help you identify processes with time or event based actions which can now easily be automated.
                            </Typography>
                            <Typography variant={"body2"} paragraph align={matchesMD ? "center" : undefined}>
                                Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie
                            options={automationOptions}
                            style={{ maxHeight: 210, maxWidth: 210, minHeight: 190 }}
                        />
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} md direction={matchesSM ? "column" : "row"}>
                    <Grid item md>
                        <Lottie
                            options={uxOptions}
                            style={{ maxHeight: 250, maxWidth: 120}}
                        />
                    </Grid>
                    <Grid item container direction={"column"} md>
                        <Grid item>
                            <Typography variant={"h4"} align={matchesMD ? "center" : "right"}>User Experience Design</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"body2"} paragraph align={matchesMD ? "center" : "right"}>
                                A good design that isn’t usable isn’t a good design.
                            </Typography>
                            <Typography variant={"body2"} paragraph align={matchesMD ? "center" : "right"}>
                                So why are so many pieces of software complicated, confusing, and frustrating?
                            </Typography>
                            <Typography variant={"body2"} paragraph align={matchesMD ? "center" : "right"}>
                                By prioritizing users and the real ways they interact with technology we’re able to develop unique, personable experiences that solve problems rather than create new ones.
                            </Typography>
                        </Grid>
                    </Grid>
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

export default CustomSoftware;
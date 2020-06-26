import React from 'react';
import Lottie from 'react-lottie';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

import animationData from '../animations/landinganimation/data';
import ButtonArrow from "./ui/ButtonArrow";
import {useTheme} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop: "3em",
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
        borderColor: theme.palette.common.blue,
        color: theme.palette.common.blue,
        borderWidth: 2,
        textTransform: 'none',
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "0.9rem",
        height: 35,
        width: 140
    }
}));

const LandingPage = props => {
    const classes = useStyles();
    const theme = useTheme();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction={"column"} className={classes.mainContainer}>
            <Grid item>
                <Grid container justify={"flex-end"} alignItems={"center"} direction={"row"}>
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography variant={"h2"} align={"center"}>
                            Bringing West Coast Technology
                            <br />
                            to the Midwest.
                        </Typography>
                        <Grid container justify={"center"} spacing={2} className={classes.buttonContainer}>
                            <Grid item>
                                <Button className={classes.estimateButton} variant={"contained"}>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant={"outlined"} className={classes.learnButtonHero}>
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
        </Grid>
    );
};

export default LandingPage;
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "35em",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit",
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 50,
        width: 185,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "2em",
        marginLeft: "3em",
        [theme.breakpoints.down("sm")]: {
            marginTop: "2em",
            marginLeft: 0,
            marginRight: 0
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }
}));

const CallToAction = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const tabChangeHandler = (event, value) => {
        props.setSelectedTab(value);
    };

    return (
        <Grid
            container
            alignItems={"center"}
            justify={matchesSM ? "center" : "space-between"}
            className={classes.background}
            direction={matchesSM ? "column" : "row"}
        >
            <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : "inherit" }}>
                <Grid container direction={"column"}>
                    <Grid item>
                        <Typography variant={"h2"}>
                            Simple Software.<br />Revolutionary Results.
                        </Typography>
                        <Typography variant={"subtitle2"} style={{ fontSize: '1.4rem' }}>
                            Take advantage of the 21st Century.
                        </Typography>
                        <Grid container justify={matchesSM ? "center" : undefined} item>
                            <Button variant={"outlined"}
                                    className={classes.learnButton}
                                    component={Link}
                                    to={"/revolution"}
                                    onClick={tabChangeHandler.bind(this, this, 2)}
                            >
                                <span style={{ marginRight: 4 }}>Learn More</span>
                                <ButtonArrow
                                    width={10}
                                    height={10}
                                    fill={theme.palette.common.blue}
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button
                    variant={"contained"}
                    className={classes.estimateButton}
                    component={Link}
                    to={"/estimate"}
                    onClick={tabChangeHandler.bind(this, this, null)}
                >Free Estimate</Button>
            </Grid>
        </Grid>
    );
};

export default CallToAction;
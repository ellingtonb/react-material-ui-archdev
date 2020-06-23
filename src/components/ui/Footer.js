import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import footerAdornment from '../../assets/Footer Adornment.svg';
import {Link} from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import Facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/twitter.svg';
import Instagram from '../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: 1302,
        position: 'relative'
    },
    adornment: {
        width: '16em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down("md")]: {
            width: '15em'
        },
        [theme.breakpoints.down("xs")]: {
            width: '10em'
        }
    },
    mainContainer: {
        position: 'absolute'
    },
    link: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: "0.75rem",
        fontWeight: 'bold',
        textDecoration: 'none'
    },
    gridItem: {
        margin: '1em'
    },
    icon: {
        width: '3em',
        height: '3em',
        [theme.breakpoints.down("md")]: {
            width: '2.5em',
            height: '2.5em',
        },
        [theme.breakpoints.down("xs")]: {
            width: '2em',
            height: '2em',
        }
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-5em',
        right: '1.5em',
        [theme.breakpoints.down("xs")]: {
            right: '0.6em',
        }
    }
}));

const Footer = props => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify={"center"} className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item component={Link} to={"/"} onClick={props.setSelectedTab.bind(this, 0)} className={classes.link}>
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item component={Link} to={"/services"} onClick={() => {props.setSelectedTab(1); props.setSelectedIndex(0);}} className={classes.link}>
                                Services
                            </Grid>
                            <Grid item component={Link} to={"/customsoftware"} onClick={() => {props.setSelectedTab(1); props.setSelectedIndex(1);}} className={classes.link}>
                                Custom Software Development
                            </Grid>
                            <Grid item component={Link} to={"/mobileapps"} onClick={() => {props.setSelectedTab(1); props.setSelectedIndex(2);}} className={classes.link}>
                                Mobile App Development
                            </Grid>
                            <Grid item component={Link} to={"/websites"} onClick={() => {props.setSelectedTab(1); props.setSelectedIndex(3);}} className={classes.link}>
                                Websites Development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item component={Link} to={"/revolution"} onClick={props.setSelectedTab.bind(this, 2)} className={classes.link}>
                                The Revolution
                            </Grid>
                            <Grid item component={Link} to={"/revolution"} onClick={props.setSelectedTab.bind(this, 2)} className={classes.link}>
                                Vision
                            </Grid>
                            <Grid item component={Link} to={"/revolution"} onClick={props.setSelectedTab.bind(this, 2)} className={classes.link}>
                                Technology
                            </Grid>
                            <Grid item component={Link} to={"/revolution"} onClick={props.setSelectedTab.bind(this, 2)} className={classes.link}>
                                Process
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item component={Link} to={"/about"} onClick={props.setSelectedTab.bind(this, 3)} className={classes.link}>
                                About Us
                            </Grid>
                            <Grid item component={Link} to={"/about"} onClick={props.setSelectedTab.bind(this, 3)} className={classes.link}>
                                History
                            </Grid>
                            <Grid item component={Link} to={"/about"} onClick={props.setSelectedTab.bind(this, 3)} className={classes.link}>
                                Team
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item component={Link} to={"/contact"} onClick={props.setSelectedTab.bind(this, 4)} className={classes.link}>
                                Contact Us
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>

            <img alt={"Black Decorative Slash"} src={footerAdornment} className={classes.adornment} />

            <Grid container justify={"flex-end"} spacing={3} className={classes.socialContainer}>
                <Grid item component={"a"} href={"http://www.facebook.com"} rel={"noopener noreferrer"} target={"_blank"}>
                    <img alt={"Facebook Logo"} src={Facebook} className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href={"http://www.twitter.com"} rel={"noopener noreferrer"} target={"_blank"}>
                    <img alt={"Twitter Logo"} src={Twitter} className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href={"http://www.instagram.com"} rel={"noopener noreferrer"} target={"_blank"}>
                    <img alt={"Instagram Logo"} src={Instagram} className={classes.icon} />
                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;
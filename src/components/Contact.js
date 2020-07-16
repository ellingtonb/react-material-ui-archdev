import React, {useState} from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link} from "react-router-dom";
import ButtonArrow from "./ui/ButtonArrow";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        paddingBottom: "10em",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
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
        [theme.breakpoints.down("md")]: {
            marginTop: "2em",
            marginLeft: 0,
            marginRight: 0
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        }
    },
    message: {
        marginTop: "3em",
        border: `2px solid ${theme.palette.common.blue}`,
        borderRadius: 5
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            height: 40,
            width: 200,
        }
    },
    confirmationButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 170,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        marginLeft: "2em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            marginTop: "1em",
            height: 40,
            width: 200,
        }
    }
}));

const Contact = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const onChange = event => {
        let valid;

        switch (event.target.id) {
            case "email":
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
                if (!valid) {
                    if (event.target.value.length > 0) {
                        setEmailHelper("Invalid email");
                    } else {
                        setEmailHelper('');
                    }
                } else {
                    setEmailHelper('');
                }
                break;
            case "phone":
                setPhone(event.target.value);
                valid = /^\(?([0-9]{2,3})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/.test(event.target.value);
                if (!valid) {
                    if (event.target.value.length > 0) {
                        setPhoneHelper("Invalid phone number");
                    } else {
                        setPhoneHelper('');
                    }
                } else {
                    setPhoneHelper('');
                }
                break
            default:
                break;
        }
    };

    const tabChangeHandler = (event, value) => {
        props.setSelectedTab(value);
    };

    return (
        <Grid container direction={"row"}>
            <Grid
                item
                container
                direction={"column"}
                justify={"center"}
                alignItems={"center"}
                lg={4}
                xl={3}
                style={{
                    marginBottom: matchesMD ? "5em" : 0,
                    marginTop: matchesSM ? "1.5em" : matchesMD ? "5em" : 0
                }}
            >
                <Grid item>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant={"h2"} style={{ lineHeight: 1 }}>
                                Contact Us
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant={"body2"} style={{ color: theme.palette.common.blue }}>
                                We're waiting.
                            </Typography>
                        </Grid>
                        <Grid item container style={{ marginTop: "2em" }}>
                            <Grid item>
                                <img src={phoneIcon} alt={"Phone"} style={{ marginRight: "0.5em" }} />
                            </Grid>
                            <Grid item>
                                <Typography variant={"body2"} style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
                                    <a href={"tel:5555555555"} style={{ textDecoration: "none", color: "inherit" }}>(555) 555-5555</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{ marginBottom: "2em" }}>
                            <Grid item>
                                <img src={emailIcon} alt={"Envelope"} style={{ marginRight: "0.5em", verticalAlign: "bottom" }} />
                            </Grid>
                            <Grid item>
                                <Typography variant={"body2"} style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
                                    <a href={"mailto:contato@ellingtonb.com"} style={{ textDecoration: "none", color: "inherit" }}>contato@ellingtonb.com</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction={"column"} style={{ maxWidth: "20em" }}>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField
                                    fullWidth
                                    label={"Name"}
                                    id={"name"}
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </Grid>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField
                                    fullWidth
                                    helperText={emailHelper}
                                    error={emailHelper.length !== 0}
                                    label={"E-mail"}
                                    id={"email"}
                                    value={email}
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField
                                    fullWidth
                                    helperText={phoneHelper}
                                    error={phoneHelper.length !== 0}
                                    label={"Phone"}
                                    id={"phone"}
                                    value={phone}
                                    onChange={onChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid item style={{ maxWidth: "20em" }}>
                            <TextField
                                fullWidth
                                className={classes.message}
                                InputProps={{ disableUnderline: true }}
                                multiline
                                rows={7}
                                value={message}
                                id={"message"}
                                onChange={(event) => setMessage(event.target.value)}
                            />
                        </Grid>
                        <Grid item container justify={"center"} style={{ marginTop: "2em" }}>
                            <Button
                                /*disabled={
                                    name.length === 0 ||
                                    message.length === 0 ||
                                    phoneHelper.length !== 0 ||
                                    emailHelper.length !== 0 ||
                                    email.length === 0 ||
                                    phone.length === 0
                                }*/
                                variant={"contained"}
                                className={classes.sendButton}
                                onClick={setOpen.bind(this, true)}
                            >
                                Send Message
                                <img src={airplane} alt={"Paper Airplane"} style={{ marginLeft: "0.6em" }} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog
                style={{ zIndex: 1302 }}
                open={open}
                onClose={setOpen.bind(this, false)}
                fullScreen={matchesXS}
                PaperProps={{
                    style:{
                        paddingTop: matchesXS ? "1em" : "2em",
                        paddingBottom: matchesXS ? "1em" : "2em",
                        paddingLeft: matchesXS ? 0 : matchesSM ? "2em" : matchesMD ? "4" : "6em",
                        paddingRight: matchesXS ? 0 : matchesSM ? "2em" : matchesMD ? "4" : "6em"
                    }
                }}
            >
                <DialogContent>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Typography align={"center"} variant={"h4"} gutterBottom>
                                Confirm Message
                            </Typography>
                        </Grid>
                        <Grid item style={{ marginBottom: "0.5em" }}>
                            <TextField
                                fullWidth
                                label={"Name"}
                                id={"name"}
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </Grid>
                        <Grid item style={{ marginBottom: "0.5em" }}>
                            <TextField
                                fullWidth
                                helperText={emailHelper}
                                error={emailHelper.length !== 0}
                                label={"E-mail"}
                                id={"email"}
                                value={email}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item style={{ marginBottom: "0.5em" }}>
                            <TextField
                                fullWidth
                                helperText={phoneHelper}
                                error={phoneHelper.length !== 0}
                                label={"Phone"}
                                id={"phone"}
                                value={phone}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
                            <TextField
                                fullWidth
                                className={classes.message}
                                InputProps={{ disableUnderline: true }}
                                multiline
                                rows={7}
                                value={message}
                                id={"message"}
                                onChange={(event) => setMessage(event.target.value)}
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            alignItems={"center"}
                            direction={matchesSM ? "column" : "row"}
                            style={{ marginTop: "2em" }}
                        >
                            <Grid item>
                                <Button
                                    color={"primary"}
                                    style={{ fontWeight: 300 }}
                                    onClick={setOpen.bind(this, false)}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    /*disabled={
                                        name.length === 0 ||
                                        message.length === 0 ||
                                        phoneHelper.length !== 0 ||
                                        emailHelper.length !== 0 ||
                                        email.length === 0 ||
                                        phone.length === 0
                                    }*/
                                    variant={"contained"}
                                    className={classes.confirmationButton}
                                >
                                    Send Message
                                    <img src={airplane} alt={"Paper Airplane"} style={{ marginLeft: "0.6em" }} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Grid
                item
                container
                className={classes.background}
                direction={matchesMD ? "column" : "row"}
                lg={8}
                xl={9}
                alignItems={"center"}
                justify={matchesMD ? "center" : undefined}
            >
                <Grid item style={{ marginLeft: matchesMD ? 0 : "3em", textAlign: matchesMD ? "center" : "inherit" }}>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant={"h2"}>
                                Simple Software.<br />Revolutionary Results.
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant={"subtitle2"} style={{ fontSize: '1.4rem' }}>
                                Take advantage of the 21st Century.
                            </Typography>
                            <Grid container justify={matchesMD ? "center" : undefined} item>
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
        </Grid>
    );
};

export default Contact;
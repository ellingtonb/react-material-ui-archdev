import React, {useEffect, useState} from 'react';
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {makeStyles} from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../assets/logo.svg';
import clsx from "clsx";

const ElevationScroll = props => {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
};

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '1em',
        [theme.breakpoints.down("md")]: {
            marginBottom: 0
        }
    },
    logo: {
        height: '6em',
        [theme.breakpoints.down("md")]: {
            height: '5em'
        },
        [theme.breakpoints.down("xs")]: {
            height: '4em'
        }
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px',
        textAlign: 'center'
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '25px',
        marginRight: '25px',
        height: '30px',
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: 'white',
        borderRadius: '0px'
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerIcon: {
        height: '30px',
        width: '30px'
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        color: 'white',
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.7
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        opacity: 1
    },
    appBar: {
        zIndex: theme.zIndex.modal + 1
    }
}));

const Header = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const tabChangeHandler = (event, value) => {
        setSelectedTab(value);
    };

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    };

    const handleClose = event => {
        setAnchorEl(null);
        setOpenMenu(false);
    };

    const handleMenuItemClick = (event, index) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(index);
    };

    const menuOptions = [
        {name: "Services", link: "/services", index: 1, subIndex: 0},
        {name: "Custom Software Development", link: "/customsoftware", index: 1, subIndex: 1},
        {name: "Mobile Apps Development", link: "/mobileapps", index: 1, subIndex: 2},
        {name: "Websites Development", link: "/websites", index: 1, subIndex: 3}
    ];

    const menuItems = [
        {name: "Home", link: "/", index: 0},
        {
            name: "Services",
            link: "/services",
            index: 1,
            ariaOwns: anchorEl ? 'simple-menu' : undefined,
            ariaPopup: anchorEl ? 'true' : undefined,
            mouseOver: handleClick
        },
        {name: "The Revolution", link: "/revolution", index: 2},
        {name: "About Us", link: "/about", index: 3},
        {name: "Contact Us", link: "/contact", index: 4},
    ];

    useEffect(() => {
        [...menuOptions, ...menuItems].forEach(route => {
            switch (window.location.pathname) {
                case route.link:
                    if (selectedTab !== route.index) {
                        setSelectedTab(route.index);
                        if (route.subIndex && route.subIndex !== selectedIndex) {
                            setSelectedIndex(route.subIndex);
                        }
                    }
                    break;
                default:
                    break;
            }
        })
        /*switch (window.location.pathname) {
            case "/revolution":
                if (selectedTab !== 2) {
                    setSelectedTab(2);
                }
                break;
            case "/about":
                if (selectedTab !== 3) {
                    setSelectedTab(3);
                }
                break;
            case "/contact":
                if (selectedTab !== 4) {
                    setSelectedTab(4);
                }
                break;
            case "/":
                if (selectedTab !== 0) {
                    setSelectedTab(0);
                }
                break;
            case "/services":
                if (selectedTab !== 1) {
                    setSelectedTab(1);
                }
                break;
            case "/customsoftware":
                if (selectedIndex !== 1) {
                    setSelectedTab(1);
                    setSelectedIndex(1);
                }
                break;
            case "/mobileapps":
                if (selectedIndex !== 2) {
                    setSelectedTab(1);
                    setSelectedIndex(2);
                }
                break;
            case "/websites":
                if (selectedIndex !== 3) {
                    setSelectedTab(1);
                    setSelectedIndex(3);
                }
                break;
            default:
                setSelectedTab(null);
                break;
        }*/
    }, [selectedTab, selectedIndex, menuOptions, menuItems]);

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{paper: classes.drawer}}
            >
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {
                        menuItems.map((item, index) => (
                            <ListItem
                                key={item.index}
                                divider
                                button
                                onClick={(event) => { setOpenDrawer(false); tabChangeHandler(event, item.index); }}
                                component={Link}
                                to={item.link}
                                selected={selectedTab === item.index}
                            >
                                <ListItemText
                                    className={clsx(classes.drawerItem, {[classes.drawerItemSelected]: selectedTab === item.index})}
                                    disableTypography
                                >{item.name}</ListItemText>
                            </ListItem>
                        ))
                    }
                    <ListItem
                        divider
                        button
                        onClick={(event) => { setOpenDrawer(false); tabChangeHandler(event, null); }}
                        component={Link}
                        to={"/estimate"}
                        className={classes.drawerItemEstimate}
                    >
                        <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                        >Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    );

    const tabs = (
        <React.Fragment>
            <Tabs
                value={selectedTab}
                onChange={tabChangeHandler}
                className={classes.tabContainer}
                indicatorColor={"primary"}
            >
                {
                    menuItems.map((item, index) => (
                        <Tab
                            key={index}
                            aria-owns={item.ariaOwns}
                            aria-haspopup={item.ariaPopup}
                            component={Link}
                            onMouseOver={item.mouseOver}
                            to={item.link}
                            className={classes.tab}
                            label={item.name}
                        />
                    ))
                }
            </Tabs>
            <Button
                variant={"contained"}
                color={"secondary"}
                className={classes.button}
                component={Link}
                to={"/estimate"}
                onClick={tabChangeHandler.bind(this, this, null)}
            >Free Estimate</Button>
            <Menu
                id={"simple-menu"}
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                    onMouseLeave: handleClose
                }}
                classes={{paper: classes.menu}}
                elevation={0}
                style={{zIndex: 1302}}
                keepMounted
            >
                {
                    menuOptions.map((option, index) => (
                        <MenuItem
                            key={index}
                            onClick={handleMenuItemClick.bind(this, option, index)}
                            component={Link}
                            to={option.link}
                            classes={{root: classes.menuItem}}
                            selected={selectedIndex === index && selectedTab === 1}
                        >{option.name}</MenuItem>
                    ))
                }
            </Menu>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar disableGutters>
                        <Button
                            disableRipple
                            component={Link}
                            to={"/"}
                            onClick={tabChangeHandler.bind(this, this, 0)}
                            className={classes.logoContainer}
                        >
                            <img
                                alt={"Company Logo"}
                                className={classes.logo}
                                src={logo}
                            />
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
};

export default Header;
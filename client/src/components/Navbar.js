import React, { useContext, useEffect, useState } from "react";
import AppContext  from "./AppContext";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Navlinks from "./utils/Navlinks";
import { Link } from "react-router-dom";
import { Box, Popover } from "@material-ui/core";
import { theme } from "../theme";
import Login from "./Login";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: "auto",
    },
    title: {
      flexGrow: 1,
    },
    toolbar :{
        marginLeft : "100px",
        marginRight : "100px",
        minHeight : "150px",
        [theme.breakpoints.down('md')]: {
            marginLeft : 0,
            marginRight : 0,
          },
    },
    links : {
        marginRight : "auto",
    },
    account:{
        backgroundColor:theme.palette.secondary.main,
        maxWidth:"150px",
        height:"40px",
        display: "flex",
        alignItems: "center",
        borderRadius: "5px",
        padding: "0 10px",
        overflow:"hidden",
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    }
  }));

const Navbar = () => {
    const globalContext = useContext(AppContext); //check if user signed up or not
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    //Listen to windows size
    const [state, setState] = useState({
        mobile: false,
    })
    const {mobileView} = state;
    useEffect(() => {
        const setResponsive = () => {
            return window.innerWidth < 900 
            ? setState((prev) => ({...prev, mobileView: true}))
            : setState((prev) => ({...prev, mobileView: false}))
        }
        setResponsive()
        window.addEventListener('resize', () => setResponsive())
    return () => 
        {window.removeEventListener("resize", () => setResponsive())}
        }, []);
    

    return (
        <div className={classes.root}>
            <AppBar color="primary" position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton}>
                        {
                        !globalContext.signUp && mobileView? 
                            <Navlinks view="mobile" /> : ''
                        }
                        <Link style={{textDecoration:"none"}} to="/">
                            <Typography variant="h3">NFTZAP</Typography>
                        </Link>
                    </IconButton>
                    { !globalContext.signUp &&  
                            <>
                            {!mobileView ? <Navlinks view="desktop" /> : ''}
                            </>
                    }
                    { globalContext.signUp && 
                            <>
                            {!mobileView ? 
                            <>
                            <Box
                            p={1} 
                            m={1}
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                            style={{ border: '0.05em dotted orange',width:"150px",cursor:'pointer'}}
                            component="span"
                            textOverflow="ellipsis"
                            overflow="hidden">
                                Hello!
                            <Box 
                                m={1}
                                style={{ cursor:'pointer'}}
                                component="span"
                                textOverflow="ellipsis"
                                overflow="hidden">{globalContext.accounts[0]} </Box>
                            </Box>
                            <Popover
                                id="mouse-over-popover"
                                style={{
                                pointerEvents: 'none',
                                }}
                                open={open}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                                }}
                                onClose={handlePopoverClose}
                                disableRestoreFocus
                            >
                                <Typography style={{ color:"orange"}}>{globalContext.accounts[0]}</Typography>
                            </Popover>
                            <div style={{marginLeft:"50px"}}><Navlinks view="mobile" /></div>
                            </>
                            : <Navlinks view="mobile" />}
                            </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
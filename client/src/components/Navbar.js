import React, { useContext, useEffect, useState } from "react";
import AppContext  from "./AppContext";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Navlinks from "./Navlinks";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

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
  }));

const Navbar = ({signUp}) => {
    const globalContext = useContext(AppContext);
    const classes = useStyles();

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

    
    const history = useHistory();
    const route = () => history.push('/')

    return (
        <div className={classes.root}>
            <AppBar color="primary" position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton}>
                        {
                        !globalContext.signUp && mobileView? 
                            <Navlinks view="mobile" /> : ''
                        }
                        <Link to="/">
                            <Typography variant="h3">NFTZAP</Typography>
                        </Link>
                    </IconButton>
                    { !globalContext.signUp &&  
                            <>
                            {!mobileView ? <Navlinks view="desktop" /> : ''}
                            <Button color="inherit" onClick={signUp}>Sign in</Button>
                            </>
                    }
                    { globalContext.signUp && 
                            <>
                            {!mobileView ? 
                            <>
                            <Typography>Account: {globalContext.accounts[0]} </Typography>
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
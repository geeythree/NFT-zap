import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Divider, Drawer } from '@material-ui/core';
import Menu from '../../assets/menu.svg'
import AppContext from '../../components/AppContext';
import {links} from './links.js'
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(5),
      },
    },
    links_group :{
        marginRight: theme.spacing(5),
    },
    list: {
        width: 300,
      },
    drawer : {
        background:"primary",
    },
      fullList: {
        width: 'auto',
      },
    listitem:{
        padding:"25px",
        textDecoration:"none"
    },
    paper:{
        backgroundColor:'#0f0f0f',
        color: "#fff"
    },
    menu:{
        marginRight:"20px",
        '&:hover':{
            cursor: 'pointer'
        }
    },
    item:{
        cursor:"pointer",
        color:"white",
        '&:hover':{
            textDecoration:"none",
            color:'orange'
        }
    }
  }));

//Different functional components for mobile and desktop views

export default function Navlinks(props) {
    const classes = useStyles();
    const globalContext = useContext(AppContext)  //check if user is logged in - inorder to display logout button
    const preventDefault = (event) => event.preventDefault(); 
    
    // listen to window size for mobile and desktop views
    const [state, setState] = useState({
        mobile: false,
    })
    
        const toggleDrawer = (anchor, open) => (event) => {
            if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
            }
        
            setState({ ...state, [anchor]: open });
          };
    
    //temporary logout method
    const logout = () => {
        localStorage.removeItem("states");
    }

    //component for mobile view
    const list = (anchor) => {
        return(
            <div 
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>
                <List >
                    {links.map(link => {
                        return(
                            <>
                            <Link to={link.element}>
                                <ListItem className={classes.listitem} button key={link.element}>About Us</ListItem>
                            </Link>
                            <Divider />
                            </>
                        )
                    })}
                    {
                        globalContext.signUp ?
                        <ListItem className={classes.listitem} onClick={logout} button>Logout</ListItem> : ''
                    }

                </List>
            </div>
        )
    }

    //component for mobile view
    const deskptopView = () => {
        return(
            
            <>
            <div className={classes.links_group}>
                <Typography className={classes.root}>
                    {
                        links.map(link => {
                            return(
                                <>
                                <Link to={link.element} className={classes.item} onClick={preventDefault} color="inherit">
                                    {link.name}
                                </Link>
                                </>
                            )
                        })
                    }
                {
                        globalContext.signUp ?
                        <Link className={classes.item} onClick={logout} button>Logout</Link> : ''
                }
                </Typography>
                
                    
            </div>
            </>
        )
    }

    return (
        <>
            { deskptopView()
                
            }
        </>
    )
}

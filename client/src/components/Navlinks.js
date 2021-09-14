import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Divider, Drawer } from '@material-ui/core';
import Menu from './menu.svg'
import AppContext from '../components/AppContext';

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
    }
  }));

export default function Navlinks(props) {
    const classes = useStyles();
    const globalContext = useContext(AppContext)
    const preventDefault = (event) => event.preventDefault();
    const [state, setState] = useState({
        mobile: false,
    })
    
        const toggleDrawer = (anchor, open) => (event) => {
            if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
            }
        
            setState({ ...state, [anchor]: open });
          };
    
    const logout = () => {
        localStorage.removeItem("states");
    }

    const list = (anchor) => {
        return(
            <div 
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>
                <List >
                    <ListItem className={classes.listitem} button key="whitepaper">Whitepaper</ListItem>
                    <Divider />
                    <ListItem className={classes.listitem} button>Docs</ListItem>
                    <Divider />
                    <ListItem className={classes.listitem} button>How to use</ListItem>
                    {
                        globalContext.signUp ?
                        <ListItem className={classes.listitem} onClick={logout} button>Logout</ListItem> : ''
                    }
                </List>
            </div>
        )
    }

    const deskptopView = () => {
        return(
            
            <>
            <div className={classes.links_group}>
                <Typography className={classes.root}>
                <Link href="#" onClick={preventDefault} color="inherit">
                    Whitepaper
                </Link>
                <Link href="#" onClick={preventDefault} color="inherit">
                    Docs
                </Link>
                <Link href="#" onClick={preventDefault} color="inherit">
                    How to use
                </Link>
                </Typography>
            </div>
            </>
        )
    }

    return (
        <>
            {
                props.view=="desktop" ? deskptopView() :
                <>
                <img width="25px" onClick={toggleDrawer('right', true)} className={classes.menu} src={Menu} alt="Menu" />
                <Drawer classes={{paper:classes.paper}}  anchor="right" open={state['right']} onClose={toggleDrawer('right', false)}>
                    {list('right')}
                </Drawer>
                </>
            }
        </>
    )
}

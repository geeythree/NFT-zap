import { alpha, makeStyles, TextField } from "@material-ui/core";
import React from 'react'

export const styledInput = makeStyles((theme) => ({
    container:{
        display:"flex",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            flexDirection:"column"
        },
      },
    grid:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: theme.spacing(3)
    },
    root: {
      border: '1px solid #e2e2e1',
      width: '50ch',
      overflow: 'hidden',
      borderRadius: 4,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      color: "#fff",
      '&:hover': {
        borderColor: theme.palette.primary.light,
      },
      '&$focused': {
        boxShadow: `${alpha(theme.palette.secondary.light, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.secondary.main,
      },
      [theme.breakpoints.down('xs')]: {
        width: '75vw',
    },
    },
    focused: {},
    margin:{
            margin: theme.spacing(2),
    },
    inputLabel: {
        color: theme.palette.secondary.main,
        "&.focused": {
            color: "#fff",
            backgroundColor : theme.palette.primary.main
          }
    },
    button:{
      marginLeft:"auto",
      marginRight:"15px",
      [theme.breakpoints.down('md')]: {
        marginLeft:0,
        marginRight:0,
    },
    [theme.breakpoints.down('xs')]: {
      width:"75vw"
  },
    }
  }));

  export function CustomInput(props) {
    const classes = styledInput();
  
    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
  }
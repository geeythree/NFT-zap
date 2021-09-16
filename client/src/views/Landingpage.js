import { Button, Container, CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import graphics from '../assets/temp-graphics.svg'

const useStyles = makeStyles((theme) => ({
    text : {
        fontSize: "24px",
        lineHeight: "30px",
        marginBottom: '20px'
    },
    grid : {
        marginTop : "-140px",
        minHeight : "100vh",
        display : "flex",   
        flexDirection:"column",
        justifyContent:"center"
        
    },
    res_image :{
        width: '100%',
        marginLeft: "70px",
        maxWidth: '700px',
        marginTop: "70px",
        height: "auto",
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
        },
    }
}))

export default function Landingpage() {
    const classes = useStyles()
    return (
        <>
            <CssBaseline />
                <Container>
                    <Grid container spacing={3}>
                        <Grid item className={classes.grid} xs={5} >
                            <Typography className={classes.text}>
                            Lorem ipsum dolor sit amet, consectetur
                            adispiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna 
                            aligua.
                            </Typography>
                            <div >
                            <Link to="/trades">
                                <Button >Get Started</Button>
                            </Link>
                            </div>
                        </Grid>
                        <Grid className={classes.grid} item xs={6}>
                        <Typography className={classes.text}>
                            <img className={classes.res_image} src={graphics} alt="Graphics" />
                            </Typography>
                        </Grid>
                    </Grid> 
                 </Container>
        </>
    )
}

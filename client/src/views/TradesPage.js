import { Button, Container, CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme)=>({
    root:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:'column',
        minHeight:'50vh'
    },
    button:{
        marginBottom:theme.spacing(5),
        textTransform:'none',
        color:'inherit'
    }
}))

//Display buttons for make and close trades
export default function TradesPage() {
    const classes = useStyles()
    return (
        <>
            <CssBaseline />
            <Container>
                <Grid className={classes.root} container xs={12}>
                    <Link to="/maketrade" className={classes.button}>
                        <Button style={{padding:'30px 150px'}}>Make trade</Button>
                    </Link>
                    <Link to="closetrade" className={classes.button}>
                        <Button style={{padding:'30px 150px'}}>Close trade</Button>
                    </Link>
                </Grid>
            </Container>
        </>
    )
}

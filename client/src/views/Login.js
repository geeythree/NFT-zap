import { Button, Container, CssBaseline, Grid, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    root:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:'column'
    }
}))

export default function Login() {
    return (
        <>
            <CssBaseline/>
            <Container>
                <Grid container xs={12}>
                    <Button></Button>
                </Grid>
            </Container>
            
        </>
    )
}

import { Container, CssBaseline, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
        alignItems: "center",
        minHeight: "60vh",
        justifyContent: "center"
    }
}))

export default function Notfound() {
    const classes = useStyles()
    return (
        <>
          <CssBaseline />
          <Container className={classes.root}>
              <Typography variant="h3">The page you're looking for does not exist! :(</Typography>
          </Container>  
        </>
    )
}

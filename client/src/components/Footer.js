import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight: '100px',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        alignItems: 'center',
        marginRight: 'auto'
    }
}))

export default function Footer() {
    const classes = useStyles()
    return (
        <>
                <div className={classes.root}>
                    <Container>
                        <Link style={{textTransform:"none", color:"inherit"}} to="/">
                        NFTZAP
                        </Link>
                    </Container>
                </div>
        </>
    )
}

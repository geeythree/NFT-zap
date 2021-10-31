import { Container, CssBaseline, Typography } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'

export default function About() {
    return (
        <>
           <Element name="about">
           <CssBaseline />
                <Container style={{marginTop:"20px", padding:"50px 0px", minHeight:"100vh", display:"flex",flexDirection:"column", justifyContent:"center"}}>
                    <Typography variant="h4">
                        About Us
                    </Typography>
                    <Typography variant="h6" style={{textAlign:"justify"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                 </Container> 
           </Element>
        </>
    )
}

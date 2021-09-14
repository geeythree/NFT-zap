import { Button, Container, CssBaseline, Grid, Typography } from '@material-ui/core'
import React from 'react'
import {CustomInput, styledInput} from '../components/InputField'

export default function CloseTrade() {
    const classes = styledInput()
    return (
        <>
            <CssBaseline />
            <Container style={{display:"flex", flexDirection:"column", alignItems:"center"}} >
                <Typography variant="h4">Close trade</Typography>
                <div className={classes.container}>
                    <Grid className={classes.grid} item xs={6}>
                            <CustomInput  
                            InputLabelProps={{
                                classes:{
                                    root: classes.inputLabel,
                                    focused: "focused", 
                                }
                            }}
                            className={classes.margin}  label="Exchange ID" variant="outlined" />
                            <CustomInput  
                            InputLabelProps={{
                                classes:{
                                    root: classes.inputLabel,
                                    focused: "focused", 
                                }
                            }}
                            className={classes.margin} label="Hashlock" variant="outlined" />
                    </Grid>
                    <Grid className={classes.grid} item xs={6}>
                            <CustomInput  InputLabelProps={{
                                classes:{
                                    root: classes.inputLabel,
                                    focused: "focused", 
                                }
                            }}
                            className={classes.margin} 
                            label="Get Contract" 
                            variant="outlined" />
                        
                    </Grid>
                </div>
                <Button>Get Contract</Button>
            </Container>
        </>
    )
}

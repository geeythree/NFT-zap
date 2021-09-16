import { Button, Container, CssBaseline, Grid, Typography } from '@material-ui/core'
import React from 'react'
import {CustomInput, styledInput} from '../components/utils/InputField'

export default function MakeTrade() {
    const classes = styledInput()
    return (
        <>
            <CssBaseline />
            <Container style={{display:"flex", flexDirection:"column", alignItems:"center"}} >
                <Typography variant="h4">Make trade</Typography>
                <div className={classes.container}>
                    <Grid className={classes.grid} item xs={6}>
                            <CustomInput  
                            InputLabelProps={{
                                classes:{
                                    root: classes.inputLabel,
                                    focused: "focused", 
                                }
                            }}
                            className={classes.margin}  label="Hash Lock" variant="outlined" />
                            <CustomInput  
                            InputLabelProps={{
                                classes:{
                                    root: classes.inputLabel,
                                    focused: "focused", 
                                }
                            }}
                            className={classes.margin} label="Token Contract" variant="outlined" />
                            <CustomInput  
                            InputLabelProps={{
                                classes:{
                                    root: classes.inputLabel,
                                    focused: "focused", 
                                }
                            }}
                            className={classes.margin} label="Token ID" variant="outlined" />
                    </Grid>
                    <Grid className={classes.grid} item xs={6}>
                            <CustomInput  InputLabelProps={{
                                classes:{
                                    root: classes.inputLabel,
                                    focused: "focused", 
                                }
                            }}
                            className={classes.margin} label="Receiver" variant="outlined" />
                            <CustomInput  InputLabelProps={{
                                classes:{
                                    root: classes.inputLabel,
                                    focused: "focused", 
                                }
                            }}

                            className={classes.margin} label="Requested Contract" variant="outlined" />
                            <CustomInput  InputLabelProps={{
                                classes:{
                                    root: classes.inputLabel,
                                    focused: "focused", 
                                }
                            }}

                                className={classes.margin} label="Requested ID" variant="outlined" />
                    </Grid>
                </div>
                <Button>Generate Hashlock</Button>
            </Container>
        </>
    )
}

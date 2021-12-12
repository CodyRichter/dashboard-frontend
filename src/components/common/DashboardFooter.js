import React from 'react';
import {Divider, Grid, Typography} from "@mui/material";

export default function DashboardFooter() {

    return(
        <Grid container className='footer mb-3'>
            <Grid item xs={12}> <Divider className='mt-3'/> </Grid>
            <Grid item style={{backgroundColor: 'white'}} className='pt-3 pb-2' md={2} xs={0}/>
            <Grid item md={8} xs={12} align='center' style={{backgroundColor: 'white'}} className='pt-3 pb-2'>
                <Typography variant='paragraph' component='p'>
                    Made with ❤ by the HackUMass Tech Team. Powered by the &nbsp;
                    <Typography variant='paragraph' component='a'
                                href='https://about.hackumass.com/opensource.html'>
                        FuseUMass Platform
                    </Typography>
                </Typography>


            </Grid>
            <Grid item style={{backgroundColor: 'white'}} className='pt-3 pb-2' md={2} xs={0}/>
        </Grid>
    )
}
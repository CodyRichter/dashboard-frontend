import React from 'react';
import {Card, CardContent, Grid, Typography} from "@mui/material";
import EventLocationCard from "./InfoCards/EventLocationCard";
import EventRelocationAssistanceCard from "./InfoCards/EventRelocationAssistanceCard";
import QRCard from "./InfoCards/QRCard";

export default function ParticipantHome(props) {

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={3}
            >
                <Grid item xs={12} className='mb-4'>
                    <Card>
                        <CardContent align='center'>
                            {/*TODO: Place event countdown timer here... */}
                            <Typography variant='h3'>
                                Hacking Begins in TIME HERE
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} lg={6} xl={4}>
                    <EventLocationCard {...props} />
                </Grid>

                <Grid item xs={12} lg={6} xl={4}>
                    <EventRelocationAssistanceCard {...props} />
                </Grid>

                <Grid item xs={12} lg={6} xl={4}>
                    <QRCard {...props} />
                </Grid>

            </Grid>

            {/*Padding for footer*/}
            <span style={{height: '5vh'}}>
                &nbsp;
            </span>


        </>

    )
}
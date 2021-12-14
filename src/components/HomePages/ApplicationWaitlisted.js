import React from 'react';
import {Card, CardContent, Grid, Typography} from "@mui/material";
import titleize from "titleize";

export default function ApplicationWaitlisted(props) {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} md={10} lg={8} xl={6}>
                    <Card className='warningCard'>
                        <CardContent>

                            {/*If applications are enabled, show this view*/}
                            <Typography variant='paragraph' component='div' className='mb-3'>
                                Hello {titleize(props.userData.firstName)},
                            </Typography>

                            <Typography variant='paragraph' component='div' className='mb-4'>
                                Thank you for applying to {props.eventData.details.hackathon_name} {props.eventData.details.hackathon_version}! Unfortunately we’ll
                                have to ask you to hold on a little longer… You’ve been waitlisted. We have received an
                                overwhelming number of applicants this year and are unable to offer you a spot
                                at the event at this moment.
                            </Typography>

                            <Typography variant='paragraph' component='div' className='mb-4'>
                                We will let you know of your application status soon. Thank you for applying!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>

    )
}
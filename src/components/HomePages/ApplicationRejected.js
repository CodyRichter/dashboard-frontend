import React from 'react';
import {Card, CardContent, Grid, Typography} from "@mui/material";
import titleize from "titleize";

export default function ApplicationRejected(props) {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} md={10} lg={8} xl={6}>
                    <Card className='errorCard'>
                        <CardContent>

                            {/*If applications are enabled, show this view*/}
                            <Typography variant='paragraph' component='div' className='mb-3'>
                                Hello {titleize(props.userData.firstName)},
                            </Typography>

                            <Typography variant='paragraph' component='div' className='mb-4'>
                                Unfortunately we aren't able to accommodate everyone who wants to participate and
                                we’ve had to reject your application. We hope that you’ll continue your enthusiasm
                                for hacking and apply to other awesome hackathons.
                            </Typography>

                            <Typography variant='paragraph' component='div' className='mb-4'>
                                Thank you again for applying to {props.eventData.details.hackathon_name}, and we hope to see you at
                                future events.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>

    )
}
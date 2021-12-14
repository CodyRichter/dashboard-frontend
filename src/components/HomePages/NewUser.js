import React from 'react';
import {Button, Card, CardContent, Grid, Typography} from "@mui/material";

export default function NewUser(props) {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} md={10} lg={8} xl={6}>
                            {props.userData.permissions.applications.enabled ?
                                <Card className='primaryCard'>
                                    <CardContent>

                                    {/*If applications are enabled, show this view*/}
                                    <Typography variant='paragraph' component='div' className='mb-3'>
                                        Hello {props.userData.firstName},
                                    </Typography>

                                        <Typography variant='paragraph' component='div' className='mb-4'>
                                            Congratulations on completing the first step to participate in [HACKATHON_NAME] [HACKATHON_VERSION]!
                                            In order to participate, you will need to fill out a short application. <b>What better time to start your application than right now?</b>
                                        </Typography>


                                    <Button size='large' disableElevation variant='contained' color='primary'>
                                        Apply Now
                                    </Button>
                                    </CardContent>
                                </Card>
                                :
                                <Card className='errorCard'>
                                    <CardContent>

                                        {/*If applications are disabled, inform the user */}
                                        <Typography variant='paragraph' component='div' className='mb-3'>
                                            Hello {props.userData.firstName},
                                        </Typography>

                                        <Typography variant='paragraph' component='div' className='mb-4'>
                                            Thank you for completing the first step to participate in [HACKATHON_NAME] [HACKATHON_VERSION].
                                            Sadly though, our applications are closed. We hope to see you at our next event!
                                        </Typography>

                                    </CardContent>
                                </Card>
                            }

                </Grid>
            </Grid>
        </>

    )
}
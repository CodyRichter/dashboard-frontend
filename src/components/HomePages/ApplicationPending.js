import React from 'react';
import {Button, Card, CardContent, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import titleize from "titleize";

export default function ApplicationPending(props) {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} md={10} lg={8} xl={6}>
                        <Card className='primaryCard'>
                            <CardContent>

                                {/*If applications are enabled, show this view*/}
                                <Typography variant='paragraph' component='div' className='mb-3'>
                                    Hello {titleize(props.userData.firstName)},
                                </Typography>

                                <Typography variant='paragraph' component='div' className='mb-4'>
                                    Looks like we got your application! If there’s anything that you would like to
                                    change, you may edit your application until a decision is reached or
                                    applications are closed.
                                </Typography>

                                <Typography variant='paragraph' component='div' className='mb-4'>
                                    We will keep you updated with your application status, so keep an eye on your email.
                                    Thank you for applying!
                                </Typography>

                                {props.userData.permissions.applications.enabled ?
                                    <Button component={Link} to='/applications'  size='large' disableElevation variant='contained' color='primary'>
                                        View/Edit Application
                                    </Button>
                                    :
                                    <Typography variant='paragraph' component='div' className='mb-4' color='error'>
                                        Applications are closed. You may not make any edits to the application that
                                        you submitted.
                                    </Typography>
                                }
                            </CardContent>
                        </Card>
                </Grid>
            </Grid>
        </>

    )
}
import React, {useState} from 'react';
import {Button, Card, CardContent, CardHeader, Divider, Grid, Typography} from "@mui/material";
import {FiUserCheck, FiUsers} from "react-icons/all";
import {Form} from "react-bootstrap";

export default function CheckIn() {

    let [participantEmail, setParticipantEmail] = useState('');


    return (
        <div>
            <Typography variant='h4' component='div' className='mb-4'>
                Check In
            </Typography>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >

                <Grid item xs={12} md={6} className='mb-md-5 mb-sm-1'>
                    <Card>
                        <CardContent>
                            <Button startIcon={<FiUserCheck size={'2em'}/>}>
                                <Typography variant='h5' component='span'>
                                    <b>123</b>
                                </Typography>
                                <Typography variant='paragraph' component='span'>
                                    &nbsp; Checked-In Attendees
                                </Typography>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} className='mb-md-5 mb-sm-1'>
                    <Card>
                        <CardContent>
                            <Button startIcon={<FiUsers size={'2em'}/>}>
                                <Typography variant='h5' component='span'>
                                    <b>456</b>
                                </Typography>
                                <Typography variant='paragraph' component='span'>
                                    &nbsp; RSVP'd Users
                                </Typography>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={0} md={2} />
                <Grid item xs={12} md={8}>
                    <Card className='mb-5'>
                        <CardHeader title='Check in Participants' />
                        <CardContent>
                            <Divider className='mb-3' />
                            <Form>
                                <Form.Group className='mb-4'>
                                    <Form.Label className='loginInputLabel'>Participant Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Scan QR Code or Type Email" required
                                                  onChange={e => setParticipantEmail(e.target.value)}/>
                                </Form.Group>
                                <div style={{width: '100%'}} align='center'>
                                    <Button disableElevation variant='contained' type='submit' style={{width: '50%'}}>Check In</Button>

                                </div>

                            </Form>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={0} md={2} />

            </Grid>


        </div>
    );
}
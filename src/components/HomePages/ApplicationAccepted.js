import React, {useState} from 'react';
import {
    Button,
    ButtonGroup,
    Card,
    CardActionArea,
    CardContent, Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    Grid,
    Typography
} from "@mui/material";
import EventLocationCard from "./InfoCards/EventLocationCard";
import EventRelocationAssistanceCard from "./InfoCards/EventRelocationAssistanceCard";
import titleize from "titleize";

export default function ApplicationAccepted(props) {

    let [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
    let [rsvpStatus, setRsvpStatus] = useState('accept');

    function openConfirmationAccept() {
        setRsvpStatus('accept');
        setConfirmationDialogOpen(true);
    }

    function openConfirmationDeny() {
        setRsvpStatus('deny');
        setConfirmationDialogOpen(true);
    }


    function rsvpToEvent(e) {
        e.preventDefault();

        if (rsvpStatus === 'accept') {

            // TODO: Accept RSVP via API Call

            props.showAlert(`You have successfully submitted your RSVP to ${props.eventData.details.hackathon_name} ${props.eventData.details.hackathon_version}!`);
        }

        if (rsvpStatus === 'deny') {

            // TODO: Deny RSVP via API Call. This should set user status to "denied"

            props.showAlert(`Successfully turned down RSVP. We hope to see you at a future event.`);
        }

    }

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
            >
                <Grid item xs={12} md={10} lg={8} xl={6}>
                    <Card className='successCard'>
                        <CardContent>

                            {/*If applications are enabled, show this view*/}
                            <Typography variant='paragraph' component='div' className='mb-3'>
                                Hello {titleize(props.userData.firstName)},
                            </Typography>

                            <Typography variant='paragraph' component='div' className='mb-3'>
                                Congratulations! You’ve been accepted! The event begins on {props.eventData.logistics.startDate}
                                at {props.eventData.logistics.startTime} and is hosted in the {props.eventData.logistics.building}.
                                In order to participate in {props.eventData.details.hackathon_name} {props.eventData.details.hackathon_version}
                                , <b>you must RSVP for the event prior to the start date</b>.

                                If for any reason you can not attend, please let us know by denying the RSVP.
                            </Typography>

                            <Typography variant='paragraph' component='div' className='mb-4'>
                                By clicking the RSVP button you are letting us know that you will <b> definitely </b>
                                attend the event. We use RSVPs to ensure that there are enough mentors, judges, and
                                volunteers available. Please only RSVP if you are sure you’ll be attending.
                            </Typography>

                            {!props.userData.permissions.applications.enabled &&
                                <Typography variant='paragraph' component='div' className='mb-4' color='error'>
                                    Applications are closed. You may not make any edits to the application that
                                    you submitted.
                                </Typography>
                            }
                        </CardContent>
                        {props.userData.permissions.applications.enabled &&
                            <CardActionArea>
                                <ButtonGroup variant="contained" fullWidth>
                                    <Button disableElevation variant='contained' color='error' style={{borderRadius: 0}} onClick={openConfirmationDeny}>
                                        I am unable to attend
                                    </Button>
                                    <Button disableElevation variant='contained' color='primary' style={{borderRadius: 0}} onClick={openConfirmationAccept}>
                                        RSVP
                                        for {props.eventData.details.hackathon_name} {props.eventData.details.hackathon_version}
                                    </Button>
                                </ButtonGroup>
                            </CardActionArea>
                        }
                    </Card>
                </Grid>

                <Grid item xs={0} xl={2} />

                <Grid item xs={12} md={10} lg={8} xl={4}>
                    <EventLocationCard {...props} />
                    <span className='mt-2 mb-2'> &nbsp;</span>
                    <EventRelocationAssistanceCard {...props} />

                </Grid>

            </Grid>



            <Dialog
                open={confirmationDialogOpen}
                onClose={() => setConfirmationDialogOpen(false)}
            >
                <DialogTitle>
                    {rsvpStatus === 'accept' ? 'Confirm RSVP Acceptance' : 'Confirm RSVP Denial'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {rsvpStatus === 'accept' ?
                            <>
                            You have chosen to RSVP to the event. Please confirm you will <b> definitely </b> be able
                                to attend the event.
                            </>
                            :
                            <>
                                You have indicated that you are unable to attend {props.eventData.details.hackathon_name} {props.eventData.details.hackathon_version}.
                                Once you turn down the RSVP, you will be unable to attend the event. <strong>This action is
                                permanent and you may not change your RSVP status later! </strong> Please confirm that you will
                                not attend.
                            </>
                        }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setConfirmationDialogOpen(false)}>Cancel</Button>
                    <Button onClick={rsvpToEvent} autoFocus variant='contained' color={rsvpStatus === 'accept' ? 'primary' : 'warning'}>
                        {rsvpStatus === 'accept' ? 'Confirm RSVP' : 'Confirm Denial of RSVP'}
                    </Button>
                </DialogActions>
            </Dialog>

            {/*Padding for footer*/}
            <span style={{height: '5vh'}}>
                &nbsp;
            </span>


        </>

    )
}
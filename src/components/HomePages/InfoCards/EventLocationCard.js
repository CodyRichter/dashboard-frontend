import React from 'react';
import {Button, Card, CardContent, CardHeader, Divider} from "@mui/material";
import {Map} from "@mui/icons-material";

export default function EventLocationCard(props) {
    return(
        <Card className='primaryCard'>
            <CardHeader title='Important Event Information' />
            <CardContent>
                <b>Location: </b>{`${props.eventData.logistics.address}, ${props.eventData.logistics.city} ${props.eventData.logistics.state}, ${props.eventData.logistics.zip}`}
                <br />
                <Button
                    color='secondary'
                    target='_blank'
                    variant='outlined'
                    startIcon={<Map />}
                    disableElevation
                    href={`https://maps.google.com/?q=${props.eventData.logistics.address},${props.eventData.logistics.city},${props.eventData.logistics.state},${props.eventData.logistics.zip}`}
                >
                    View on Map
                </Button>

                <Divider className='mt-2 mb-2' />

                <b>Event Begins: </b> {props.eventData.logistics.startDate} at {props.eventData.logistics.startTime}

                <Divider className='mt-2 mb-2' />

                <b>Event Ends: </b> {props.eventData.logistics.endDate} at {props.eventData.logistics.endTime}

            </CardContent>
        </Card>
    )
}
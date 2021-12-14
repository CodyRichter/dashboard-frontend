import React from 'react';
import {Card, CardContent, CardHeader} from "@mui/material";

export default function EventRelocationAssistanceCard(props) {
    return(
        props.eventData.travel.relocationProvided &&
            <Card className='secondaryCard'>
                <CardHeader title='Travel Information &#128652;' />
                <CardContent>
                    {props.eventData.travel.relocationDetails}
                </CardContent>
            </Card>
    )
}
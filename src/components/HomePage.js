import React from 'react';
import AdminHome from "./HomePages/AdminHome";
import OrganizerHome from "./HomePages/OrganizerHome";
import MentorHome from "./HomePages/MentorHome";
import NewUser from "./HomePages/NewUser";
import ApplicationRejected from "./HomePages/ApplicationRejected";
import ApplicationWaitlisted from "./HomePages/ApplicationWaitlisted";
import ApplicationPending from "./HomePages/ApplicationPending";
import ApplicationAccepted from "./HomePages/ApplicationAccepted";
import ApplicationAcceptedAndRSVP from "./HomePages/ApplicationAcceptedAndRSVP";
import ParticipantHome from "./HomePages/ParticipantHome";

export default function HomePage(props) {
    return(
        <>
            {/*Depending on application status, a different view will be displayed here...*/}

            {props.userData.role === 'admin' &&
                <AdminHome {...props} />
            }
            {props.userData.role === 'organizer' &&
                <OrganizerHome {...props} />
            }
            {props.userData.role === 'mentor' &&
                <MentorHome {...props} />
            }
            {props.userData.role === 'participant' && ( props.userData?.roleData?.status === undefined || props.userData.roleData.status === 'new') &&
                <NewUser {...props} />
            }
            {props.userData.role === 'participant' && props.userData.roleData.status === 'applied' &&
                <ApplicationPending {...props} />
            }
            {props.userData.role === 'participant' && props.userData.roleData.status === 'waitlisted' &&
                <ApplicationWaitlisted {...props} />
            }
            {props.userData.role === 'participant' && props.userData.roleData.status === 'rejected' &&
                <ApplicationRejected {...props} />
            }
            {props.userData.role === 'participant' && props.userData.roleData.status === 'accepted' &&
                <ApplicationAccepted {...props} />
            }
            {props.userData.role === 'participant' && props.userData.roleData.status === 'rsvp' &&
                <ApplicationAcceptedAndRSVP {...props} />
            }
            {props.userData.role === 'participant' && props.userData.roleData.status === 'complete' &&
                <ParticipantHome {...props} />
            }

        </>
    )
}
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./components/HomePage";
import CheckIn from "./components/CheckIn";
import Login from "./components/login/Login";
import useToken from "./components/login/useToken";
import DashboardNavigation from "./components/common/DashboardNavigation";
import {Alert, Divider, Grid, Slide, Snackbar} from "@mui/material";
import Schedule from "./components/Schedule";
import Applications from "./components/Applications";
import Admin from "./components/Admin";
import Judging from "./components/Judging";
import Projects from "./components/Projects";
import Prizes from "./components/Prizes";
import Hardware from "./components/Hardware";
import PermissionControl from "./components/common/PermissionControl";
import DashboardFooter from "./components/common/DashboardFooter";


function SlideTransition(props) {
    return <Slide {...props} direction="down"/>;
}

function App() {
    const {token, setToken} = useToken();

    let [notification, setNotification] = useState('');
    let [notificationType, setNotificationType] = useState('success');
    let [notifyOpen, setNotifyOpen] = useState(false);

    let [userData, setUserData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@email.com',
        role: 'new',
        roleData: {status: 'new'},
        integrations: {}, // Slack ID, Discord ID, etc...
        permissions: {
            applications: {enabled: true, permission: ['view']},
            checkin: {enabled: true, permission: ['view']},
            schedule: {enabled: true, permission: ['view']},
            hardware: {enabled: true, permission: ['view']},
            projects: {enabled: true, permission: ['view']},
            prizes: {enabled: true, permission: ['view', 'edit', 'delete', 'create']},
            judging: {enabled: true, permission: ['view']},
            admin: {enabled: true, permission: ['view']},
        }
    });

    let [eventData, setEventData] = useState({
        details: {
            hackathon_name: 'Red Panda Hacks',
            hackathon_version: 'X'
        },
        logistics: {
            building: 'Integrative Learning Center',
            address: '650 N Pleasant St',
            city: 'Amherst',
            state: 'Massachusetts',
            zip: '01003',
            startDate: '02/15/2022',
            endDate: '02/17/2022',
            startTime: '18:00:00',
            endTime: '12:00:00'
        },
        travel: {
            relocationProvided: true,
            relocationDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    })

    function showAlert(content, type) {
        setNotification(content);
        setNotificationType(type);
        setNotifyOpen(true);
    }


    useEffect(() => {
        
        const loggedInUser = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'test@email.com',
            role: 'participant',
            roleData: {status: 'complete'},
            integrations: {}, // Slack ID, Discord ID, etc...
            permissions: {
                applications: {enabled: true, permission: ['view']},
                checkin: {enabled: true, permission: ['view']},
                schedule: {enabled: true, permission: ['view']},
                hardware: {enabled: true, permission: ['view']},
                projects: {enabled: true, permission: ['view']},
                prizes: {enabled: true, permission: ['view', 'edit', 'delete', 'create']},
                judging: {enabled: true, permission: ['view']},
                admin: {enabled: true, permission: ['view']},
            }
        };

        const noUser = {
            firstName: '',
            lastName: '',
            email: '',
            role: '',
            roleData: {},
            integrations: {}, // Slack ID, Discord ID, etc...
            permissions: {
                applications: {enabled: false, permission: ['']},
                checkin: {enabled: false, permission: ['']},
                schedule: {enabled: false, permission: ['']},
                hardware: {enabled: false, permission: ['']},
                projects: {enabled: false, permission: ['']},
                prizes: {enabled: false, permission: ['']},
                judging: {enabled: false, permission: ['']},
                admin: {enabled: false, permission: ['']},
            }
        };
        
        // Do not allow a non-logged-in user to access anything
        if (token === undefined) {
            setUserData(noUser);
        } else {
            // TODO: Load permission map from API and Use a websocket to handle enabled+permission checking


            // setuserData.permissions( {...userData.permissions, ...api_call_result});
            setUserData(_ => loggedInUser);
        }


    }, [token])



    return (
        <div className='pageContent'>

            <BrowserRouter>
                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={notifyOpen}
                    onClose={() => setNotifyOpen(false)}
                    key={"top center"}
                    TransitionComponent={SlideTransition}
                    autoHideDuration={6000}
                    sx={{width: '30%'}}
                >
                    <Alert severity={notificationType} sx={{width: '100%'}}>{notification}</Alert>
                </Snackbar>
                {!token &&
                    <Login setToken={setToken} showAlert={showAlert}/>
                }
                {token && (
                    <div>
                        <Grid container style={{backgroundColor: 'white'}}>
                            <Grid item md={2} xs={0}/>
                            <Grid item md={8} xs={12}>
                                <DashboardNavigation showAlert={showAlert} userData={userData} eventData={eventData} />
                            </Grid>
                            <Grid item md={2} xs={0}/>
                        </Grid>

                        <Divider className='mb-4'/>

                        <Grid container>
                            <Grid item md={2} xs={0}/>
                            <Grid item md={8} xs={12}>
                                <Routes>
                                    <Route
                                        path="/home"
                                        element={<HomePage showAlert={showAlert} userPermissions={userData.permissions.applications.permission} userData={userData} eventData={eventData}/>}
                                    />
                                    <Route
                                        path="/applications"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={userData.permissions.applications.enabled}
                                                userPermissions={userData.permissions.applications.permission}
                                                userData={userData}
                                                eventData={eventData}
                                                requiredPermissions={['view']}
                                                verbose={true}
                                                component={<Applications/>}/>
                                        }
                                    />
                                    <Route
                                        path="/checkin"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={userData.permissions.checkin.enabled}
                                                userPermissions={userData.permissions.checkin.permission}
                                                userData={userData}
                                                eventData={eventData}
                                                requiredPermissions={['view']}
                                                verbose={true}
                                                component={<CheckIn/>}/>
                                        }
                                    />
                                    <Route
                                        path="/schedule"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={userData.permissions.schedule.enabled}
                                                userPermissions={userData.permissions.schedule.permission}
                                                userData={userData}
                                                eventData={eventData}
                                                requiredPermissions={['view']}
                                                verbose={true}
                                                component={<Schedule/>}/>
                                        }
                                    />
                                    <Route
                                        path="/hardware"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={userData.permissions.hardware.enabled}
                                                userPermissions={userData.permissions.hardware.permission}
                                                userData={userData}
                                                eventData={eventData}
                                                requiredPermissions={['view']}
                                                verbose={true}
                                                component={<Hardware/>}/>
                                        }
                                    />
                                    <Route
                                        path="/projects"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={userData.permissions.projects.enabled}
                                                userPermissions={userData.permissions.projects.permission}
                                                userData={userData}
                                                eventData={eventData}
                                                requiredPermissions={['view']}
                                                verbose={true}
                                                component={<Projects/>}/>
                                        }
                                    />
                                    <Route
                                        path="/prizes"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={userData.permissions.prizes.enabled}
                                                userPermissions={userData.permissions.prizes.permission}
                                                userData={userData}
                                                eventData={eventData}
                                                requiredPermissions={['view']}
                                                verbose={true}
                                                component={<Prizes/>}/>
                                        }
                                    />
                                    <Route
                                        path="/judging"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={userData.permissions.judging.enabled}
                                                userPermissions={userData.permissions.judging.permission}
                                                userData={userData}
                                                eventData={eventData}
                                                requiredPermissions={['view']}
                                                verbose={true}
                                                component={<Judging />}/>
                                        }
                                    />
                                    <Route
                                        path="/admin"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={userData.permissions.admin.enabled}
                                                userPermissions={userData.permissions.admin.permission}
                                                userData={userData}
                                                eventData={eventData}
                                                requiredPermissions={['view']}
                                                verbose={true}
                                                component={<Admin />}/>
                                        }
                                    />
                                </Routes>
                            </Grid>
                            <Grid item md={2} xs={0}/>
                        </Grid>
                    </div>
                )}
            </BrowserRouter>

            <DashboardFooter/>

        </div>
    );
}

export default App;
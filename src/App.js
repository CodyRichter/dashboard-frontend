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

    let [permissionMap, setPermissionMap] = useState({
        applications: {enabled: true, permission: ['view']},
        checkin: {enabled: true, permission: ['view']},
        schedule: {enabled: true, permission: ['view']},
        hardware: {enabled: true, permission: ['view']},
        projects: {enabled: true, permission: ['view']},
        prizes: {enabled: true, permission: ['view']},
        judging: {enabled: true, permission: ['view']},
        admin: {enabled: true, permission: ['view']},
    });

    function showAlert(content, type) {
        setNotification(content);
        setNotificationType(type);
        setNotifyOpen(true);
    }

    // useEffect(() => {
    //
    //     // TODO: Load permission map from API
    //
    //     // TODO: Use a websocket to handle enabled+permission checking
    //     let api_call_result = {
    //         applications: {enabled: false, permission: ['view']},
    //         checkin: {enabled: false, permission: ['view']},
    //         schedule: {enabled: false, permission: ['view']},
    //         hardware: {enabled: false, permission: ['view']},
    //         projects: {enabled: false, permission: ['view']},
    //         prizes: {enabled: false, permission: ['view']},
    //         judging: {enabled: false, permission: ['view']},
    //         admin: {enabled: false, permission: ['view']},
    //     };
    //     setPermissionMap({...permissionMap, ...api_call_result});
    // }, [permissionMap])



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
                                <DashboardNavigation showAlert={showAlert} permissionMap={permissionMap} />
                            </Grid>
                            <Grid item md={2} xs={0}/>
                        </Grid>

                        <Divider className='mb-4'/>

                        <Grid container>
                            <Grid item md={2} xs={0}/>
                            <Grid item md={8} xs={12}>
                                <Routes>
                                    <Route path="/home" element={<HomePage showAlert={showAlert}/>}/>
                                    <Route
                                        path="/applications"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={permissionMap.applications.enabled}
                                                permission={permissionMap.applications.permission}
                                                verbose={true}
                                                component={<Applications/>}/>
                                        }
                                    />
                                    <Route
                                        path="/checkin"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={permissionMap.checkin.enabled}
                                                permission={permissionMap.checkin.permission}
                                                verbose={true}
                                                component={<CheckIn/>}/>
                                        }
                                    />
                                    <Route
                                        path="/schedule"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={permissionMap.schedule.enabled}
                                                permission={permissionMap.schedule.permission}
                                                verbose={true}
                                                component={<Schedule/>}/>
                                        }
                                    />
                                    <Route
                                        path="/hardware"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={permissionMap.hardware.enabled}
                                                permission={permissionMap.hardware.permission}
                                                verbose={true}
                                                component={<Hardware/>}/>
                                        }
                                    />
                                    <Route
                                        path="/projects"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={permissionMap.projects.enabled}
                                                permission={permissionMap.projects.permission}
                                                verbose={true}
                                                component={<Projects/>}/>
                                        }
                                    />
                                    <Route
                                        path="/prizes"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={permissionMap.prizes.enabled}
                                                permission={permissionMap.prizes.permission}
                                                verbose={true}
                                                component={<Prizes/>}/>
                                        }
                                    />
                                    <Route
                                        path="/judging"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={permissionMap.judging.enabled}
                                                permission={permissionMap.judging.permission}
                                                verbose={true}
                                                component={<Judging />}/>
                                        }
                                    />
                                    <Route
                                        path="/admin"
                                        element={
                                            <PermissionControl
                                                showAlert={showAlert}
                                                featureEnabled={permissionMap.admin.enabled}
                                                permission={permissionMap.admin.permission}
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
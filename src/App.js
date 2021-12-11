import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./components/HomePage";
import CheckIn from "./components/CheckIn";
import Login from "./components/login/Login";
import useToken from "./components/login/useToken";
import DashboardNavigation from "./components/common/DashboardNavigation";
import {Alert, Divider, Grid, Slide, Snackbar, Typography} from "@mui/material";
import Schedule from "./components/Schedule";
import Applications from "./components/Applications";
import Admin from "./components/Admin";
import Judging from "./components/Judging";
import Projects from "./components/Projects";
import Prizes from "./components/Prizes";
import Hardware from "./components/Hardware";


function SlideTransition(props) {
    return <Slide {...props} direction="down"/>;
}

function App() {
    const {token, setToken} = useToken();

    let [notification, setNotification] = useState('');
    let [notificationType, setNotificationType] = useState('success');
    let [notifyOpen, setNotifyOpen] = useState(false);

    function showAlert(content, type) {
        setNotification(content);
        setNotificationType(type);
        setNotifyOpen(true);
    }

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
                                <DashboardNavigation showAlert={showAlert}/>
                            </Grid>
                            <Grid item md={2} xs={0}/>
                        </Grid>

                        <Divider className='mb-4'/>

                        <Grid container>
                            <Grid item md={2} xs={0}/>
                            <Grid item md={8} xs={12}>
                                <Routes>
                                    <Route path="/home" element={<HomePage showAlert={showAlert}/>}/>
                                    <Route path="/applications" element={<Applications showAlert={showAlert}/>}/>
                                    <Route path="/checkin" element={<CheckIn showAlert={showAlert}/>}/>
                                    <Route path="/schedule" element={<Schedule showAlert={showAlert}/>}/>
                                    <Route path="/hardware" element={<Hardware showAlert={showAlert}/>}/>
                                    <Route path="/projects" element={<Projects showAlert={showAlert}/>}/>
                                    <Route path="/prizes" element={<Prizes showAlert={showAlert}/>}/>
                                    <Route path="/judging" element={<Judging showAlert={showAlert}/>}/>
                                    <Route path="/admin" element={<Admin showAlert={showAlert}/>}/>
                                </Routes>
                            </Grid>
                            <Grid item md={2} xs={0}/>
                        </Grid>
                    </div>
                )}
            </BrowserRouter>


            <Grid container className='footer mb-3'>
                <Grid item xs={12}> <Divider className='mt-3'/> </Grid>
                <Grid item style={{backgroundColor: 'white'}} className='pt-3 pb-2' md={2} xs={0}/>
                <Grid item md={8} xs={12} align='center' style={{backgroundColor: 'white'}} className='pt-3 pb-2'>
                    <Typography variant='paragraph' component='p'>
                        Made with ❤ by the HackUMass Tech Team. Powered by the &nbsp;
                        <Typography variant='paragraph' component='a'
                                    href='https://about.hackumass.com/opensource.html'>
                            FuseUMass Platform
                        </Typography>
                    </Typography>


                </Grid>
                <Grid item style={{backgroundColor: 'white'}} className='pt-3 pb-2' md={2} xs={0}/>
            </Grid>
        </div>
    );
}

export default App;
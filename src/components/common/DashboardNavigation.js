import React, {useEffect} from 'react';
import {Button, Divider, Grid, ListItemIcon, ListItemText, Menu, MenuItem, styled, Tab, Tabs} from "@mui/material";
import {Link, useLocation} from "react-router-dom";

import {
    AdminPanelSettings,
    CalendarToday,
    Check,
    Construction,
    EmojiEvents,
    Gavel,
    Home,
    Memory,
    NoteAdd
} from "@mui/icons-material";
import {Image} from "react-bootstrap";
import {FiLogOut, FiUser} from "react-icons/all";
import PermissionControl from "./PermissionControl";

export default function DashboardNavigation({permissions}) {

    const [menuIndex, setMenuIndexValue] = React.useState(0);
    let activePage = useLocation();

    const [accountAnchorElement, setAccountAnchorElement] = React.useState(null);
    const accountMenuOpen = Boolean(accountAnchorElement);

    const handleAccountMenuClick = (event) => {
        setAccountAnchorElement(event.currentTarget);
    };
    const handleClose = () => {
        setAccountAnchorElement(null);
    };

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }


    function LinkTab(props) {
        return (
            <Tab
                component={Link}
                to={props.pathname}

                {...props}
            />
        );
    }

    useEffect(() => {

        let i = 0;

        const pageNameToIndexMap = {
            home: i++,
            applications: permissions.applications.enabled ? i++ : 0,
            checkin: permissions.checkin.enabled ? i++ : 0,
            schedule: permissions.schedule.enabled ? i++ : 0,
            hardware: permissions.hardware.enabled ? i++ : 0,
            projects: permissions.projects.enabled ? i++ : 0,
            prizes: permissions.prizes.enabled ? i++ : 0,
            judging: permissions.judging.enabled ? i++ : 0,
            admin: permissions.admin.enabled ? i++ : 0
        }

        setMenuIndexValue(pageNameToIndexMap[activePage.pathname.split('/')[1]]);
    }, [activePage, permissions])

    const SmallTabs = styled(Tabs)`
      height: 60px;
    `;

    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item xs={6}>
                    <Link to={'/home'}>
                        <Image
                            src='https://dashboard.hackumass.com/assets/navlogo-0c1253abb4aae70a32e18948d4f0f7e6038d49e25027c51567f492ae3a1887ad.png'
                            height='35em'
                            className='mb-4 mt-4'
                        />
                    </Link>
                </Grid>

                <Grid item xs={6} align="right">
                    <Button variant='text' disableElevation type="submit" endIcon={<FiUser size='1em' />} onClick={handleAccountMenuClick}>
                        Account
                    </Button>

                    <Menu
                        id="basic-menu"
                        anchorEl={accountAnchorElement}
                        open={accountMenuOpen}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={logout} pathname={'/login'}>
                            <ListItemIcon>
                                <FiLogOut size='1.25em' />
                            </ListItemIcon>
                            <ListItemText>Logout</ListItemText>
                        </MenuItem>
                    </Menu>

                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="stretch"
            >
                <Grid item xs={12}>
                    <Divider/>
                </Grid>

                <Grid item xs={12}>
                    <SmallTabs value={menuIndex} TabIndicatorProps={{style: {height:"3px", borderTopLeftRadius: '1em', borderTopRightRadius: '1em'}}} variant="scrollable" scrollButtons="auto">
                        {/*Always enable the home component*/}
                        <PermissionControl
                            featureEnabled={true}
                            userPermissions={["view"]}
                            requiredPermissions={['view']}
                            verbose={false}
                            component={
                                <LinkTab
                                    icon={<Home />}
                                    iconPosition="start"
                                    label="Home"
                                    pathname="/home"
                                />
                            }
                        />
                        <PermissionControl
                            featureEnabled={permissions.applications.enabled}
                            userPermissions={permissions.applications.permission}
                            requiredPermissions={['view']}
                            verbose={false}
                            component={
                                <LinkTab
                                    icon={<NoteAdd />}
                                    iconPosition="start"
                                    label="Application"
                                    pathname="/applications"
                                />}
                        />
                        <PermissionControl
                            featureEnabled={permissions.checkin.enabled}
                            userPermissions={permissions.checkin.permission}
                            requiredPermissions={['view']}
                            verbose={false}
                            component={
                                <LinkTab
                                    icon={<Check />}
                                    iconPosition="start"
                                    label="Check In"
                                    pathname="/checkin"
                                />}
                        />

                        <PermissionControl
                            featureEnabled={permissions.schedule.enabled}
                            userPermissions={permissions.schedule.permission}
                            requiredPermissions={['view']}
                            verbose={false}
                            component={
                                <LinkTab
                                    icon={<CalendarToday />}
                                    iconPosition="start"
                                    label="Schedule"
                                    pathname="/schedule"
                                />}
                        />

                        <PermissionControl
                            featureEnabled={permissions.hardware.enabled}
                            userPermissions={permissions.hardware.permission}
                            requiredPermissions={['view']}
                            verbose={false}
                            component={
                                <LinkTab
                                    icon={<Memory />}
                                    iconPosition="start"
                                    label="Hardware"
                                    pathname="/hardware"
                                />}
                        />

                        <PermissionControl
                            featureEnabled={permissions.projects.enabled}
                            userPermissions={permissions.projects.permission}
                            requiredPermissions={['view']}
                            verbose={false}
                            component={
                                <LinkTab
                                    icon={<Construction />}
                                    iconPosition="start"
                                    label="Project"
                                    pathname="/projects"
                                />}
                        />

                        <PermissionControl
                            featureEnabled={permissions.prizes.enabled}
                            userPermissions={permissions.prizes.permission}
                            requiredPermissions={['view']}
                            verbose={false}
                            component={
                                <LinkTab
                                    icon={<EmojiEvents />}
                                    iconPosition="start"
                                    label="Prizes"
                                    pathname="/prizes"
                                />}
                        />

                        <PermissionControl
                            featureEnabled={permissions.judging.enabled}
                            userPermissions={permissions.judging.permission}
                            requiredPermissions={['view']}
                            verbose={false}
                            component={
                                <LinkTab
                                    icon={<Gavel />}
                                    iconPosition="start"
                                    label="Judging"
                                    pathname="/judging"
                                />}
                        />

                        <PermissionControl
                            featureEnabled={permissions.admin.enabled}
                            userPermissions={permissions.admin.permission}
                            requiredPermissions={['view']}
                            verbose={false}
                            component={
                                <LinkTab
                                    icon={<AdminPanelSettings />}
                                    iconPosition="start"
                                    label="Admin"
                                    pathname="/admin" />}
                        />

                    </SmallTabs>
                </Grid>

            </Grid>
        </div>
    );
}
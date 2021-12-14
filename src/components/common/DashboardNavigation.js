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

export default function DashboardNavigation({permissionMap}) {

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
            applications: permissionMap.applications.enabled ? i++ : 0,
            checkin: permissionMap.checkin.enabled ? i++ : 0,
            schedule: permissionMap.schedule.enabled ? i++ : 0,
            hardware: permissionMap.hardware.enabled ? i++ : 0,
            projects: permissionMap.projects.enabled ? i++ : 0,
            prizes: permissionMap.prizes.enabled ? i++ : 0,
            judging: permissionMap.judging.enabled ? i++ : 0,
            admin: permissionMap.admin.enabled ? i++ : 0
        }

        setMenuIndexValue(pageNameToIndexMap[activePage.pathname.split('/')[1]]);
    }, [activePage, permissionMap])

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
                            featureEnabled={permissionMap.applications.enabled}
                            userPermissions={permissionMap.applications.permission}
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
                            featureEnabled={permissionMap.checkin.enabled}
                            userPermissions={permissionMap.checkin.permission}
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
                            featureEnabled={permissionMap.schedule.enabled}
                            userPermissions={permissionMap.schedule.permission}
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
                            featureEnabled={permissionMap.hardware.enabled}
                            userPermissions={permissionMap.hardware.permission}
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
                            featureEnabled={permissionMap.projects.enabled}
                            userPermissions={permissionMap.projects.permission}
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
                            featureEnabled={permissionMap.prizes.enabled}
                            userPermissions={permissionMap.prizes.permission}
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
                            featureEnabled={permissionMap.judging.enabled}
                            userPermissions={permissionMap.judging.permission}
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
                            featureEnabled={permissionMap.admin.enabled}
                            userPermissions={permissionMap.admin.permission}
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
import React, {useEffect} from 'react';
import {Button, Divider, Grid, ListItemIcon, ListItemText, Menu, MenuItem, styled, Tab, Tabs} from "@mui/material";
import {Link} from "react-router-dom";

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

const getCurrentPage = () => window.location.pathname.split('/')[1];

export default function DashboardNavigation() {

    const [menuIndex, setMenuIndexValue] = React.useState(0);
    const [activePage, setActivePage] = React.useState(getCurrentPage());

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
                onClick={(e) => {
                    setActivePage(props.pathname.split('/')[1]);
                }}
            />
        );
    }


    useEffect(() => {

        const pageNameToIndexMap = {
            home: 0,
            applications: 1,
            checkin: 2,
            schedule: 3,
            hardware: 4,
            projects: 5,
            prizes: 6,
            judging: 7,
            admin: 8
        }

        setMenuIndexValue(pageNameToIndexMap[activePage]);
    }, [activePage])

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
                    <Link to={'/home'} onClick={() => setActivePage('home')}>
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
                    <SmallTabs value={menuIndex} TabIndicatorProps={{style: {height:"1px",}}} variant="scrollable" scrollButtons="auto">
                        <LinkTab icon={<Home />} iconPosition="start" label="Home" pathname="/home" />
                        <LinkTab icon={<NoteAdd />} iconPosition="start" label="Application" pathname="/applications" />
                        <LinkTab icon={<Check />} iconPosition="start" label="Check In" pathname="/checkin" />
                        <LinkTab icon={<CalendarToday />} iconPosition="start" label="Schedule" pathname="/schedule" />
                        <LinkTab icon={<Memory />} iconPosition="start" label="Hardware" pathname="/hardware" />
                        <LinkTab icon={<Construction />} iconPosition="start" label="Project" pathname="/projects" />
                        <LinkTab icon={<EmojiEvents />} iconPosition="start" label="Prizes" pathname="/prizes" />
                        <LinkTab icon={<Gavel />} iconPosition="start" label="Judging" pathname="/judging" />
                        <LinkTab icon={<AdminPanelSettings />} iconPosition="start" label="Admin" pathname="/admin" />
                    </SmallTabs>
                </Grid>

            </Grid>
        </div>
    );
}
import React, {useEffect, useState} from 'react';
import {
    Alert, AlertTitle,
    Button,
    Card, CardActions,
    CardContent,
    CardHeader, Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    Divider, FormControlLabel,
    Grid,
    IconButton, Switch,
    Typography
} from "@mui/material";
import {Add, Delete, Edit, Link} from "@mui/icons-material";
import PermissionControl from "./common/PermissionControl";
import {Form} from "react-bootstrap";


export default function Prizes(props) {

    const PrizeCard = ({prize, userPermissions}) => {
        return (
            <Card raised>
                <CardHeader
                    title={prize.title} className='prizeCard' subheader={'Sponsored by ' + prize.sponsor}
                    action={
                        <>
                            <PermissionControl
                                featureEnabled={true}
                                userPermissions={userPermissions}
                                requiredPermissions={['edit']}
                                verbose={false}
                                component={
                                    <IconButton onClick={() => openEditorInEditMode(prize)}>
                                        <Edit/>
                                    </IconButton>
                                }
                            />
                            <PermissionControl
                                featureEnabled={true}
                                userPermissions={userPermissions}
                                requiredPermissions={['delete']}
                                verbose={false}
                                component={
                                    <IconButton>
                                        <Delete/>
                                    </IconButton>
                                }
                            />
                        </>


                    }
                />
                <CardContent className='prizeCard'>

                    <Typography variant='h6' component='span' className='mb-4'>
                        Prize: &nbsp;
                    </Typography>

                    <Typography variant='paragraph' component='span' className='mb-4'>
                        {prize.reward}
                    </Typography>

                    {prize.rewardLink.length > 0 &&
                        <IconButton href={prize.rewardLink} target='_blank'>
                            <Link/>
                        </IconButton>
                    }

                    <Divider className='mt-2 mb-2'/>
                    <Typography variant='paragraph' component='span' className='mb-4'>
                        {prize.description}
                    </Typography>

                </CardContent>
                {prize.selectable &&
                    <CardActions className='prizeCard' style={{borderTop: '1px solid gray'}}>
                        <Typography variant='paragraph' component='span' color='darkred'>
                            You must specifically apply for this prize when submitting your project.
                        </Typography>
                    </CardActions>
                }

            </Card>
        )
    }

    const emptyPrize = {
        id: -1,
        title: '',
        priority: false,
        selectable: false,
        description: '',
        sponsor: '',
        reward: '',
        rewardLink: ''
    };

    const [prizes, setPrizes] = useState([]);

    const [editorOpen, setEditorOpen] = useState(false);
    const [editorErrorMessage, setEditorErrorMessage] = useState('');
    const [editorMode, setEditorMode] = useState('create');  // 'create' or 'edit'
    const [selectedPrize, setSelectedPrize] = useState(emptyPrize);

    function openEditorInEditMode(prize) {
        setSelectedPrize(prize);
        setEditorMode('edit');
        setEditorOpen(true);
    }

    function openEditorInCreateMode(prize) {
        setSelectedPrize(emptyPrize);
        setEditorMode('create');
        setEditorOpen(true);
    }

    function closeEditor() {
        setEditorOpen(false);
        setEditorErrorMessage('');
    }

    function submitForm(e) {
        e.preventDefault();
        let formPrizeObject = {};
        Array.prototype.forEach.call(e.target.elements, (element) => {

            if (element.id === 'prizeId') {
                if (element.value >= 0) {
                    formPrizeObject['id'] = element.value;
                }
            } else if (['text', 'email', 'url', 'textarea'].includes(element.type)) {
                formPrizeObject[element.id] = element.value;
            } else if (element.type === 'checkbox') {
                formPrizeObject[element.id] = element.checked;
            }
        });

        if (editorMode === 'create') {
            // TODO: Call API and create a new prize
        } else {
            // TODO: Call API and update existing prize
        }

        // TODO: Call API and refresh prize list

    }

    useEffect(() => {

        // TODO: Call API
        let api_result = [
            {
                id: 0,
                title: 'Best X Hack',
                priority: true,
                selectable: false,
                sponsor: 'HackUMass',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
                reward: 'Macbook X 2022',
                rewardLink: 'https://google.com',
            },
            {
                id: 1,
                title: 'Best Y Hack',
                priority: true,
                selectable: false,
                sponsor: 'HackUMass',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
                reward: 'iPod Pro Max Plus',
                rewardLink: 'https://google.com',
            },
            {
                id: 2,
                title: 'Best a Hack',
                priority: false,
                selectable: true,
                sponsor: 'HackUMass',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                reward: 'Hacker Keyboard',
                rewardLink: '',
            },
            {
                id: 3,
                title: 'Best b Hack',
                priority: false,
                selectable: false,
                sponsor: 'HackUMass',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                reward: 'Hacker Keyboard',
                rewardLink: '',
            },
            {
                id: 4,
                title: 'Best c Hack',
                priority: false,
                selectable: true,
                sponsor: 'HackUMass',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                reward: 'Hacker Keyboard',
                rewardLink: '',
            },
            {
                id: 5,
                title: 'Best d Hack',
                priority: false,
                selectable: true,
                sponsor: 'HackUMass',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                reward: 'Hacker Keyboard',
                rewardLink: '',
            },
            {
                id: 6,
                title: 'Best e Hack',
                priority: false,
                selectable: false,
                sponsor: 'HackUMass',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                reward: 'Hacker Keyboard',
                rewardLink: '',
            },
        ];

        setPrizes(api_result);


    }, [])


    return (
        <>

            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item xs={12} sm={6}>
                    <Typography variant='h4' component='div' className='mb-4'>
                        Prizes
                    </Typography>
                </Grid>

                <PermissionControl
                    featureEnabled={true}
                    userPermissions={props.userPermissions}
                    requiredPermissions={['create']}
                    verbose={false}
                    component={
                        <>
                            <Grid item xs={12} align='left' className='d-block d-sm-none mb-4'>
                                <Button variant='contained' startIcon={<Add/>} onClick={openEditorInCreateMode}>
                                    Create New Prize
                                </Button>
                            </Grid>

                            <Grid item sm={6} align='right' className='d-none d-sm-block'>
                                <Button variant='contained' startIcon={<Add/>} onClick={openEditorInCreateMode}>
                                    Create New Prize
                                </Button>
                            </Grid>
                        </>
                    }
                />


            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
            >

                {prizes.length === 0 &&
                    <Grid item xs={12}>
                        <Typography variant='h5' component='div' className='mb-4'>
                            No Prizes Available...
                        </Typography>
                    </Grid>

                }

                {prizes.length > 0 && prizes[0].priority &&
                    <Grid item xs={12} className='mb-4'>
                        <Card>
                            <CardHeader title={'Featured Prizes'}/>
                            <CardContent>

                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                    spacing={3}
                                >

                                    {prizes.map((pr, i) => {
                                        return (
                                            pr.priority &&
                                            <Grid item xs={12} md={6} xl={4} key={'featured' + i}>
                                                <PrizeCard prize={pr} userPermissions={props.userPermissions}/>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                }

                {prizes.length > 0 &&
                    <Grid item xs={12} className='mb-4'>
                        <Card>
                            <CardContent>

                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                    spacing={3}
                                >
                                    {prizes.map((pr, i) => {
                                        return (
                                            !pr.priority &&
                                            <Grid item xs={12} md={6} xl={4} key={'featured' + i}>
                                                <PrizeCard prize={pr} userPermissions={props.userPermissions}/>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </CardContent>
                        </Card>

                    </Grid>

                }

            </Grid>


            <Dialog open={editorOpen} onClose={closeEditor} maxWidth={'sm'} fullWidth>
                <DialogTitle>{editorMode === 'create' ? 'Create' : 'Edit'} Prize</DialogTitle>
                <Form onSubmit={submitForm}>
                    <DialogContent>

                        <input type="text" hidden disabled id='prizeId' required defaultValue={selectedPrize.id} />

                        <Form.Group className='mb-3'>
                            <Form.Label className='loginInputLabel'>Prize Title</Form.Label>
                            <Form.Control type="text" placeholder="Best Hardware Hack..." id='title' required defaultValue={selectedPrize.title} />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label className='loginInputLabel'>Reward</Form.Label>
                            <Form.Control type="text" placeholder="Arduino Uno..." id='reward' required defaultValue={selectedPrize.reward} />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label className='loginInputLabel'>Reward Link</Form.Label>
                            <Form.Control type="url" placeholder="https://amazon.com/" id='rewardLink' defaultValue={selectedPrize.rewardLink} />
                            <Form.Text className="text-muted">
                                Optional link to the reward product, such as its Amazon page
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label className='loginInputLabel'>Description</Form.Label>
                            <Form.Control type="text" as="textarea" placeholder="Create the best hack with hardware components..." id='description' required defaultValue={selectedPrize.description} />
                            <Form.Text className="text-muted">
                                Optional link to the reward product, such as its Amazon page
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label className='loginInputLabel'>Sponsor</Form.Label>
                            <Form.Control type="text" placeholder="RedPandaHacks..." id='sponsor' required defaultValue={selectedPrize.title} />
                            <Form.Text className="text-muted">
                                If this prize is provided by the hackathon itself write the hackathon name, otherwise put the name of the company that provided it
                            </Form.Text>
                        </Form.Group>


                        <Form.Group className='mb-3'>
                            <FormControlLabel control={<Switch id='selectable' defaultChecked={selectedPrize.selectable} />} label="Participant Selectable" /> <br />
                            <Form.Text className="text-muted">
                                If a prize is selectable, a user must specifically apply for it when submitting their project.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <FormControlLabel control={<Switch id='priority' defaultChecked={selectedPrize.priority} />} label="High Priority" /> <br />
                            <Form.Text className="text-muted">
                                High priority prizes are featured at the top of the page
                            </Form.Text>
                        </Form.Group>

                        {editorErrorMessage &&
                            <Alert severity="error" className='mt-2'>
                                <AlertTitle>Unable to {editorMode === 'create' ? 'Create' : 'Edit'} Prize</AlertTitle>
                                {editorErrorMessage}
                            </Alert>
                        }


                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeEditor} disableElevation>Cancel</Button>
                        <Button type='submit' variant='contained' disableElevation> {editorMode === 'create' ? 'Create Prize' : 'Update Prize'}</Button>
                    </DialogActions>
                </Form>
            </Dialog>


            {/*Padding for footer*/}
            <span style={{height: '5vh'}}>
                &nbsp;
            </span>
        </>
    )
}
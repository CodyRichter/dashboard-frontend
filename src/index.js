import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material";
import {amber, deepPurple} from "@mui/material/colors";

const theme = createTheme({
    components: {
        MuiTypography: {
            defaultProps: {
                "fontFamily": `"Montserrat", sans-serif`,
                "fontWeight": "normal",
                "color": "#545454",
            },
            styleOverrides: {
                h1: {
                    "fontWeight": "700",
                },
                h2: {
                    "fontWeight": "700",
                },
                h3: {
                    "fontWeight": "700",
                },
                h4: {
                    "fontWeight": "700",
                },
                h5: {
                    "fontWeight": "700",
                },
                h6: {
                    "fontWeight": "700",
                },
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    "fontFamily": `"Montserrat", sans-serif`,
                    "fontWeight": "normal",
                    "color": "white",
                    "textTransform": "none",
                },
                outlined: {
                    "color": "#545454",
                },
                text: {
                    "color": "#545454",
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    "fontFamily": `"Montserrat", sans-serif`,
                    "fontWeight": "500",
                    "color": "#545454",
                    "textTransform": "none",
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#467fcf',
        },
        secondary: {
            main: amber[500],
            contrastText: deepPurple[900],
        },
    },
});


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider  theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
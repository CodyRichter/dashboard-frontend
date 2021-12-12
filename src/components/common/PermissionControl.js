import React from 'react';
import {Navigate} from "react-router-dom";

export default function PermissionControl({featureEnabled, permission, showAlert, verbose, component}) {

    const viewPermission = 'view';

    if (!featureEnabled || !permission.includes(viewPermission)) {
        if (verbose) {
            showAlert('You do not have permission to access this page.', 'error');
            return <Navigate to={'/home'} />;
        } else {
            return <></>
        }
    }

    return(
        showAlert === undefined ? React.cloneElement(component) : React.cloneElement(component, { 'showAlert': showAlert })
    )

}
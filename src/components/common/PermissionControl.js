import React from 'react';
import {Navigate} from "react-router-dom";

export default function PermissionControl({featureEnabled, permission, showAlert, verbose, component}) {

    const viewPermission = 'view';

    return(
        <>
            {featureEnabled && permission.includes(viewPermission) ?
                <>
                    {showAlert !== undefined ?
                        React.cloneElement(component, { 'showAlert': showAlert })
                    :
                        React.cloneElement(component)
                    }
                </>
            :
             <>
                 {verbose ?
                     <>
                         {showAlert('You do not have permission to access this page.', 'error')}
                         <Navigate to={'/home'} />
                     </>

                     :
                     <></>
                 }
             </>
            }

        </>
    )

}
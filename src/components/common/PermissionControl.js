import React from 'react';
import {Navigate} from "react-router-dom";

export default function PermissionControl({featureEnabled, userPermissions, requiredPermissions, showAlert, verbose, component}) {

    let permissionCheck = (arr, target) => target.every(v => arr.includes(v));

    return(
        <>
            {featureEnabled && permissionCheck(userPermissions, requiredPermissions) ?
                <>
                    {showAlert !== undefined ?
                        React.cloneElement(component, { 'showAlert': showAlert, 'userPermissions': userPermissions })
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
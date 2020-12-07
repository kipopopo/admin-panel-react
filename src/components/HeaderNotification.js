import React from 'react'

function HeaderNotification(props) {

    return (
        <div 
            id="dropdown" 
            className={`dropdown-menu dropdown-menu-right ${props.showHideDropdown}`}>
            <p>Notification component</p>
        </div>
    )
}

export default HeaderNotification
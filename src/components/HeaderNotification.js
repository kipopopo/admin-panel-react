import React from 'react'

export default class HeaderNotification extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className={`dropdown-menu dropdown-menu-right ${this.props.showHideDropdown}`}>
                <p>Notification component</p>
            </div>
        )
    }
}
import React from 'react'

export default class HeaderUserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.setState({
        })
    }
    render() {
        return (
            <div className={`dropdown-menu dropdown-menu-right ${this.props.showHideDropdown}`}>
                <p>User profile component</p>
            </div>
        )
    }
}
import React from 'react';
import HeaderNotification from './HeaderNotification'
import {ReactComponent as IconMenu} from '../assets/icons/menu-hamburger.svg';
import {ReactComponent as IconBell} from '../assets/icons/bell.svg'
import {ReactComponent as IconProfile} from '../assets/icons/user-profile.svg'

export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showNotification: false
        }
        this.handleBellClick = this.handleBellClick.bind(this)
    }

    handleBellClick() {
        this.setState({
            showNotification: !this.state.showNotification
        })
    }

    render() {
        const styles = this.props.expandNavbar
        let showHide_dropdown = this.state.showNotification ? "dropdown-menu-show" : "dropdown-menu-hide"
        return (
            <nav id="header navbar-expand" className="header" style={styles}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button className="nav-link" onClick={this.props.handleToggleSidebar}>
                            <IconMenu className="nav-link-icon" style={{marginLeft: -2}} />
                        </button>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <button className="nav-link" onClick={this.handleBellClick}>
                            <IconBell className="nav-link-icon" />
                        </button>
                        <HeaderNotification showHideDropdown={showHide_dropdown} />
                    </li>
                    <li className="nav-item dropdown">
                        <button className="nav-link">
                            <IconProfile className="nav-link-icon" />
                        </button>
                    </li>
                </ul>
            </nav>
        )
    }
}
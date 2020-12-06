import React from 'react';
import {ReactComponent as IconMenu} from '../assets/icons/menu-hamburger.svg';
import {ReactComponent as IconBell} from '../assets/icons/bell.svg'
import {ReactComponent as IconProfile} from '../assets/icons/user-profile.svg'

export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const styles = this.props.expandNavbar
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
                    <li className="nav-item">
                        <a className="nav-link" href="#header">
                            <IconBell className="nav-link-icon" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#header">
                            <IconProfile className="nav-link-icon" />
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}
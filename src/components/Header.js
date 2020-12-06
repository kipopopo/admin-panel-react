import React from 'react';
import {ReactComponent as IconMenu} from '../assets/icons/menu-hamburger.svg';
import {ReactComponent as IconBell} from '../assets/icons/bell.svg'
import {ReactComponent as IconProfile} from '../assets/icons/user-profile.svg'

export class Header extends React.Component {
    render() {
        return (
            <nav id="header navbar-expand" className="header">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#header">
                            <IconMenu className="nav-link-icon" />
                        </a>
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
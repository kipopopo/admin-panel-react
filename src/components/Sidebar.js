import React from 'react'
import logo from '../assets/logo-no-trace.png'

export class Sidebar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <a className="brand-link" href="/">
                    <img className="brand-image" src={logo} alt="Flito logo"/>
                    <span className="brand-text">Flito</span>
                </a>
            </aside>
        )
    }
}
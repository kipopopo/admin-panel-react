import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className="Home">
            <div className="header">
                <Link to="/login">Login <small>(access without token)</small></Link>
                <Link to="/dashboard">Dashboard <small>(access with token)</small></Link>
            </div>
            Welcome!
        </div>
    )
}
export default Home;
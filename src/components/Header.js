import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <button class="ui circular twitch icon purple button">
                <i class="twitch icon">
                    <Link to="/" className="item"></Link>
                </i>
            </button>
            <Link to="/" className="item">Streamer</Link>
            <div className="right menu">
                <Link to="/" className="item">All streams</Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header

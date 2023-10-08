import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {
    return (
            <nav className="navbar-header">
                <Link to="/" className="menu-link">
                    <img src="public/name.png" alt="Name"  style={{ width: '8em' }}/>
                    {/* <img src="public/name.png" alt="Name" /> */}
                </Link>
                <Link to="/" className="menu-link-logo">
                    <img src="public/logo.png" alt="Logo"/>
                </Link>
                <ConnectButton  className="connect-button" chainStatus="none" showBalance={false}/>
            </nav>
    );
}

export default Navbar;
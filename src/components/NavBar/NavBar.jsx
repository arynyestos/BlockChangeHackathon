import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { useGetConnectedAddress } from '../../hooks/useGetConnectedAddress'; 
import { getNFTs } from '../../utils/getNFTs';
import { saveObjectAsJson } from '../../utils/getFile';

function Navbar() {
    const { connectedAddress, connectWallet, walletConnected } = useGetConnectedAddress();
    // const { results, hasQueried, isError } = walletConnected ? getNFTs("0x79219e0514a0ed8b495c1bba0180cd12cde40242") : {};


    return (
        <div>
            <header className="navbar-header">
                <div className="menu-icon">
                  <Link to="/" className="menu-link">JobFinder</Link>
                </div>
                <div className="logo"></div>
                {connectedAddress ? (
                    <div className="connected-address">
                        {connectedAddress.substring(0, 6)}...{connectedAddress.slice(-4)}
                    </div>
                ) : (
                    <button className="connect-button" onClick={connectWallet}>CONNECT WALLET</button>
                )}
            </header>
        </div>
    );
}

export default Navbar;

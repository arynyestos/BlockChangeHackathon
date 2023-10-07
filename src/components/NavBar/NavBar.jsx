import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {
    return (
        <div>
            <header className="navbar-header">
                <div className="menu-icon">
                  <Link to="/" className="menu-link">JobFinder</Link>
                </div>
                <div className="logo"></div>
                <ConnectButton  className="connect-button" chainStatus="none" showBalance={false}/>
            </header>
        </div>
    );
}

export default Navbar;


/* 

import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {
    return (
        <div>
            <header className="navbar-header">
                <div className="menu-icon">
                    <Link to="/" className="menu-link">JobFinder</Link>
                </div>
                <div className="logo"></div>
                <ConnectButton.Custom>
                    {({
                        account,
                        chain,
                        openAccountModal,
                        openChainModal,
                        openConnectModal,
                        authenticationStatus,
                        mounted,
                    }) => {
                        const ready = mounted && authenticationStatus !== 'loading';
                        const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');

                        return (
                            <div
                                {...(!ready && {
                                    'aria-hidden': true,
                                    'style': {
                                        opacity: 0,
                                        pointerEvents: 'none',
                                        userSelect: 'none',
                                    },
                                })}
                            >
                                {(() => {
                                    if (!connected) {
                                        return (
                                            <button
                                                className="connect-button"
                                                onClick={openConnectModal}
                                                type="button"
                                            >
                                                Connect Wallet
                                            </button>
                                        );
                                    }

                                    if (chain.unsupported) {
                                        return (
                                            <button
                                                className="connect-button"
                                                onClick={openChainModal}
                                                type="button"
                                            >
                                                Wrong network
                                            </button>
                                        );
                                    }

                                    return (
                                        <div style={{ display: 'flex', gap: 12 }}>
                                            <button
                                                onClick={openChainModal}
                                                style={{ display: 'flex', alignItems: 'center' }}
                                                type="button"
                                            >
                                                {chain.hasIcon && (
                                                    <div
                                                        style={{
                                                            background: chain.iconBackground,
                                                            width: 12,
                                                            height: 12,
                                                            borderRadius: 999,
                                                            overflow: 'hidden',
                                                            marginRight: 4,
                                                        }}
                                                    >
                                                        {chain.iconUrl && (
                                                            <img
                                                                alt={chain.name ?? 'Chain icon'}
                                                                src={chain.iconUrl}
                                                                style={{ width: 12, height: 12 }}
                                                            />
                                                        )}
                                                    </div>
                                                )}
                                                {chain.name}
                                            </button>

                                            <button className="connect-button" onClick={openAccountModal} type="button">
                                                {account.displayName}
                                                {account.displayBalance
                                                    ? ` (${account.displayBalance})`
                                                    : ''}
                                            </button>
                                        </div>
                                    );
                                })()}
                            </div>
                        );
                    }}
                </ConnectButton.Custom>
            </header>
        </div>
    );
}

export default Navbar;

*/
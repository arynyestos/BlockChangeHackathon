import { useEffect, useState } from 'react';

export function useGetConnectedAddress() {
  const [connectedAddress, setConnectedAddress] = useState('');
  const [walletConnected, setWalletConnected] = useState(false);

  const requestPermissions = async () => {
    try {
      const permissions = await window.ethereum.request({
        method: 'wallet_requestPermissions',
        params: [{ eth_accounts: {} }],
      });
      const accountsPermission = permissions.find(
        (permission) => permission.parentCapability === 'eth_accounts'
      );
      if (accountsPermission) {
        console.log('eth_accounts permission successfully requested!');
        // Return the connected address
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts && accounts.length > 0) {
          return accounts[0];
        }
      }
    } catch (error) {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log('Permissions needed to continue.');
      } else {
        console.error(error);
      }
    }
    return null; // Return null if no account was connected
  };

  useEffect(() => {
    if (window.ethereum) {
      const { ethereum } = window;

      // Initial check for already connected account
      const accounts = ethereum.request({ method: 'eth_accounts' });
      if (accounts && accounts.length > 0) {
        setConnectedAddress(accounts[0]);
        setWalletConnected(true);
      }

      // Listen to account changes
      ethereum.on('accountsChanged', (accounts) => {
        setConnectedAddress(accounts[0] || '');
      });

      return () => {
        ethereum.removeAllListeners('accountsChanged');
      };
    }
  }, []);

  const connectWallet = async () => {
    const address = await requestPermissions();
    if (address) {
      setConnectedAddress(address);
    }
  };

  return { connectedAddress, connectWallet, walletConnected };
}
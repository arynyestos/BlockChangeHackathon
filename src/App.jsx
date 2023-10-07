import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useEffect } from 'react';
import { getNFTs } from './utils/getNFTs';
import { useGetConnectedAddress } from './hooks/useGetConnectedAddress';

function App() {
  const [userAddress, setUserAddress] = useState('');
  const connectedAddress = useGetConnectedAddress();
  useEffect(() => {
    setUserAddress(connectedAddress);
  }, [connectedAddress]);

  const {
    results,
    setResults,
    hasQueried,
    setHasQueried,
    nftAddressesObject,
    isError,
  } = getNFTs(connectedAddress);

  return (
    <>
      <h1>{connectedAddress}</h1>
      {Object.keys(nftAddressesObject).map((network) => (
        <div key={network}>
          <h2>{network}</h2>
          {nftAddressesObject[network] && (
            <ul>
              {Object.values(nftAddressesObject[network]).map((address, index) => (
                <li key={index}>{address}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
}

export default App;

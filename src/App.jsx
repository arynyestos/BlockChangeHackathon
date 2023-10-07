<<<<<<< HEAD
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
=======
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/NavBar/NavBar';
import Home from "./pages/Home"
import Offer from './pages/Offer';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oferta/:id" element={<Offer />} />
      </Routes>

    </div>
  );
}

export default App
>>>>>>> 113ddd918b2ad5dcf4dc396117ad52c21cce5396

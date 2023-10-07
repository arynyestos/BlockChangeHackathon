import { useState, useEffect } from 'react';
import { Alchemy, Network } from 'alchemy-sdk';

export function getNFTs(connectedAddress) {
    const [results, setResults] = useState([]);
    const [hasQueried, setHasQueried] = useState(false);
    const [isError, setIsError] = useState(false);
    const [nftAddressesObject, setNftAddressesObject] = useState(
        {
        "Ethereum": {},
        "Polygon": {},
        "Arbitrum": {},
        "Optimism": {}
        }
    );
  
    const [networks, setNetworks] = useState(
        {
        "Ethereum": Network.ETH_MAINNET,
        "Polygon": Network.MATIC_MAINNET,
        "Arbitrum": Network.ARB_MAINNET,
        "Optimism": Network.OPT_MAINNET
        }
    );

    useEffect(() => {
        async function fetchNFTs(connectedAddress, networkName, network) {
        console.log(networkName, network)
        const config = {
            apiKey: import.meta.env.ALCHEMY_API_KEY,
            network: network,
        };

        const alchemy = new Alchemy(config);

          try {
            const data = await alchemy.nft.getNftsForOwner(connectedAddress);
            setResults(data);       
            const nftContractAddresses = data.ownedNfts.map((nft) => nft.contract.address);    
            console.log("nftAddressesObject:", nftAddressesObject);      
            nftContractAddresses.forEach((address, index) => {
                nftAddressesObject[networkName][index] = address;
            });
            setHasQueried(true);
            setIsError(false);
          } catch (error) {
            console.log('Error while fetching NFTs:', error);
            setHasQueried(true);
            setIsError(true);
          }
        }

        if (connectedAddress) {
            const networkKeys = Object.keys(nftAddressesObject);
            networkKeys.forEach((networkName) => {
                console.log(networkName)
                fetchNFTs(connectedAddress, networkName, networks[networkName]);
            });
        }
    }, [connectedAddress]);

    return {
        results,
        setResults,
        hasQueried,
        setHasQueried,
        nftAddressesObject,
        isError,
    };
}

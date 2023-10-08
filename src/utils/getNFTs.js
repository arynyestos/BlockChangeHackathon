import { useState } from 'react';
import { Alchemy } from 'alchemy-sdk';

export function getNFTs(connectedAddress) {
    const [isError, setIsError] = useState(false);
    const [nftAddressesObject, setNftAddressesObject] = useState(
        {
        "Ethereum": [],
        "Polygon": [],
        "Arbitrum": [],
        "Optimism": []
        }
    );    
    const [cachedData, setCachedData] = useState({});

    async function fetchNFTs(connectedAddress, networkName, network) {
        // console.log(networkName, network)
        const config = {
            apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
            network: network,
        };

        const alchemy = new Alchemy(config);

        try {
            if (!cachedData[connectedAddress]) {
                console.log("En getNFTs.js:", connectedAddress)
                const data = await alchemy.nft.getNftsForOwner(connectedAddress);
                setCachedData((prevData) => ({
                  ...prevData,
                  [connectedAddress]: data,
                }));
                const nftContractAddresses = data.ownedNfts.map((nft) => nft.contract.address);    
                console.log(`NFTs for address ${connectedAddress}`, nftAddressesObject);              
                setNftAddressesObject((prevObject) => ({
                    ...prevObject,
                    [networkName]: nftContractAddresses,
                }));
                // setHasQueried(true);
                setIsError(false);
            }
            else{      
                const nftContractAddresses = cachedData[connectedAddress].ownedNfts.map((nft) => nft.contract.address);           
                setNftAddressesObject((prevObject) => ({
                    ...prevObject,
                    [networkName]: nftContractAddresses,
                }));
            }
        } catch (error) {
            console.log('Error while fetching NFT certificates:', error);
            // setHasQueried(true);
            setIsError(true);
        }
    }

    return {
        nftAddressesObject,
        isError,
        fetchNFTs
    };
}
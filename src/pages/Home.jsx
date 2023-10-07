import { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';

import certificates from '../db/certificates.json';
import userCertificatesData from '../db/userCertificates.json';
import jobOffers from '../db/jobOffers.json';

import { useGetConnectedAddress } from '../hooks/useGetConnectedAddress';

export default function Home() {

    const [userCertificates, setUserCertificates] = useState(userCertificatesData);
    const [filter, setFilter] = useState("");
    const [isWalletConnected, setIsWalletConnected] = useState(false);


    let filteredOffers;

    switch (filter) {
        case "match":
            filteredOffers = jobOffers.filter(offer =>
                offer.requiredCertificates.some(cert => userCertificates.includes(cert))
            );
            break;
        case "noMatch":
            filteredOffers = jobOffers.filter(offer =>
                offer.requiredCertificates.some(cert => !userCertificates.includes(cert))
            );
            break;
        default:
            filteredOffers = jobOffers;
            break;
    }

    return (
        <div>
            <div className="tabs">
                <div className={filter === "" ? "tab active" : "tab"} onClick={() => setFilter("")}>Todas las ofertas</div>
                <div className={filter === "match" ? "tab active" : "tab"} onClick={() => setFilter("match")}>Cualificados</div>
                <div className={filter === "noMatch" ? "tab active" : "tab"} onClick={() => setFilter("noMatch")}>No Aptos</div>
            </div>
            <div className="job-counter">
                {filteredOffers.length} ofertas disponibles
            </div>
            <div className="job-offers-list">
                {filteredOffers.map(offer => <JobCard key={offer.id} job={offer} />)}
            </div>
        </div>
    );
}
import certificates from "../db/certificates.json"

function getCertificateByName(name) {
    const certificate = certificates.find(cert => cert.name === name);
    return certificate ? certificate.contractAdd : null;
}

function getCertificatesByAdd(contractAddArray) {
    return contractAddArray.map(contractAdd => {
        const certificate = certificates.find(cert => cert.contractAdd === contractAdd);
        return certificate ? certificate.name : null;
    });
}

export { getCertificateByName, getCertificatesByAdd };
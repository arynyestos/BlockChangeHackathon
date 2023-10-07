import { Link } from 'react-router-dom';

function JobCard({ job }) {
    const logoSrc = job.companyLogo === "" ? "https://i.ibb.co/3mM1sNd/empty-logo.jpg" : job.companyLogo;
    
    return (
        <Link to={`/oferta/${job.id}`} className="job-card">
        <div className="">
            <div className="job-header">
                <img className="job-logo" src={logoSrc} alt="Company Logo" />
                <div>
                    <h2>{job.title}</h2>
                    <a href={job.companyURL} target="_blank" rel="noopener noreferrer" className="company-link">{job.companyName}</a>
                </div>
            </div>
            <p className="job-details">
                {job.city} | {job.presence} | {job.contractType}
            </p>
            <p>{job.description}</p>
            <p className="job-footer">
                Posted on: {new Date(job.createdTimestamp).toLocaleDateString()} | Salary: {job.salary}
            </p>
        </div>
        </Link>
    );
}


export default JobCard

/* function JobCard({ job }) {
    return (
        <div className="job-card">
            <h2>{job.title}</h2>
            <p>Salary: {job.salary}</p>
            <p>{job.description}</p>
            <p>Required Language: {job.requiredLanguage}</p>
        </div>
    );
}

export default JobCard;*/
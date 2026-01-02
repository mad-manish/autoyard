'use client';

import styles from './page.module.css';

const JOBS = [
    { id: 1, title: 'Truck Driver (Heavy License)', location: 'Mumbai - Pune Route', salary: '₹ 25,000 / month', company: 'Shree Logistics', type: 'Full Time' },
    { id: 2, title: 'JCB Operator 3DX', location: 'Bangalore, KA', salary: '₹ 30,000 / month', company: 'BuildCon India', type: 'Contract' },
    { id: 3, title: 'Tempo Driver for Delivery', location: 'Delhi NCR', salary: '₹ 18,000 + Incentives', company: 'FastTrack Couriers', type: 'Full Time' },
    { id: 4, title: 'Trailer Driver (18 Wheeler)', location: 'All India Permit', salary: '₹ 45,000 / month', company: 'National Transport', type: 'Full Time' },
];

export default function JobsPage() {
    return (
        <div className="container">
            <div className={styles.header}>
                <h1>Driver Jobs</h1>
                <p>Connect with top transport companies. 500+ Active Vacancies.</p>
                <button className="btn btn-primary" style={{ marginTop: '16px' }}>Post a Job (Free)</button>
            </div>

            <div className={styles.jobList}>
                {JOBS.map(job => (
                    <div key={job.id} className={styles.jobCard}>
                        <div className={styles.jobInfo}>
                            <h2>{job.title}</h2>
                            <p className={styles.company}>{job.company} • <span className={styles.type}>{job.type}</span></p>
                            <div className={styles.meta}>
                                <span>📍 {job.location}</span>
                                <span className={styles.salary}>💰 {job.salary}</span>
                            </div>
                        </div>
                        <button className={styles.applyBtn} onClick={() => alert('Applied Successfully! Employer will contact you.')}>Apply Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

'use client';

import styles from './page.module.css';

const SERVICES = [
    { id: 1, title: 'FASTag Recharge', icon: '🏷️', desc: 'Instant recharge for all banks.' },
    { id: 2, title: 'Commercial Insurance', icon: '🛡️', desc: 'Save up to 40% on premiums.' },
    { id: 3, title: 'RTO Transfer', icon: '📝', desc: 'Hassle-free ownership transfer.' },
    { id: 4, title: 'GPS Tracking', icon: '📡', desc: 'Track your fleet in real-time.' },
];

export default function ServicesPage() {
    return (
        <div className="container">
            <div className={styles.header}>
                <h1>Transporter Services</h1>
                <p>Everything you need to run your fleet efficiently.</p>
            </div>

            {/* RTO Challan Utility */}
            <section className={styles.challanSection}>
                <div className={styles.challanCard}>
                    <h2>👮‍♂️ Check Pending Challans</h2>
                    <p>Don't get caught with unpaid fines. Check instantly.</p>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="Enter Vehicle No (e.g. MH 12 AB 1234)" className={styles.challanInput} />
                        <button className={styles.checkBtn} onClick={() => alert("Checking Parivahan Database... \n(Mock: No Challans Found!)")}>Check Now</button>
                    </div>
                </div>
            </section>

            <div className={styles.grid}>
                {SERVICES.map(service => (
                    <div key={service.id} className={styles.card}>
                        <div className={styles.icon}>{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                        <button className={styles.btn}>View Plans</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

import Link from 'next/link';
import styles from './page.module.css';

export default function AdminDashboard() {
    return (
        <div className="container">
            <div className={styles.header}>
                <h1>Admin Dashboard</h1>
                <p>Managed Trust & Safety</p>
            </div>

            <div className={styles.stats}>
                <div className={styles.statCard}>
                    <h3>Pending Approvals</h3>
                    <div className={styles.value}>12</div>
                </div>
                <div className={styles.statCard}>
                    <h3>Active Rentals</h3>
                    <div className={styles.value}>8</div>
                </div>
                <div className={styles.statCard}>
                    <h3>Escrow Balance</h3>
                    <div className={styles.value}>₹ 4.5L</div>
                </div>
                <div className={styles.statCard}>
                    <h3>Disputes</h3>
                    <div className={styles.value} style={{ color: 'var(--danger)' }}>2</div>
                </div>
            </div>

            <div className={styles.section}>
                <h2>Verification Queue</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>User / ID</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ramesh Kumar</td>
                            <td>KYC (Aadhar)</td>
                            <td><span className={styles.badge}>Pending</span></td>
                            <td><button className={styles.actionBtn}>Review</button></td>
                        </tr>
                        <tr>
                            <td>Tata Ace (MH-02-1234)</td>
                            <td>Listing</td>
                            <td><span className={styles.badge}>Pending</span></td>
                            <td><button className={styles.actionBtn}>Review</button></td>
                        </tr>
                        <tr>
                            <td>Suresh Trucking</td>
                            <td>KYC (GST)</td>
                            <td><span className={styles.badge}>Pending</span></td>
                            <td><button className={styles.actionBtn}>Review</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

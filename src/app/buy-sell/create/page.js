'use client';

import styles from './page.module.css';

export default function CreateListing() {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <h1>Sell Your Vehicle</h1>
                <p className={styles.subtitle}>List your commercial vehicle in 3 easy steps.</p>

                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.section}>
                        <h3>1. Vehicle Details</h3>
                        <div className={styles.formGroup}>
                            <label>Vehicle Type</label>
                            <select className={styles.input}>
                                <option>Select Type</option>
                                <option>Truck</option>
                                <option>Tempo / Pickup</option>
                                <option>JCB / Construction</option>
                            </select>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label>Make & Model</label>
                                <input type="text" placeholder="e.g. Tata Ace Gold" className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Year</label>
                                <input type="number" placeholder="2020" className={styles.input} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3>2. Condition & Price</h3>
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label>Kilometers Driven</label>
                                <input type="text" placeholder="e.g. 50,000" className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Expected Price (₹)</label>
                                <input type="text" placeholder="e.g. 5,00,000" className={styles.input} />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label>Description</label>
                            <textarea rows="4" placeholder="Describe the condition, tires, insurance..." className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3>3. Photos & KYC (Advanced)</h3>
                        <div className={styles.row}>
                            <div className={styles.uploadBox}>
                                <span>+ Upload Photos</span>
                                <small>Front, Back, Side, Interior</small>
                            </div>
                            <div className={styles.uploadBox} style={{ borderColor: 'var(--accent-yellow)' }}>
                                <span>🎥 Record Video KYC</span>
                                <small>Face + License Match (Beta)</small>
                            </div>
                        </div>
                        <div className={styles.uploadBox}>
                            <span>🔄 Upload 360° View</span>
                            <small>Increase trust by 40%</small>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.uploadBox}>
                            <span>+ Upload RC Copy</span>
                            <small>Mandatory for Verification</small>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button className="btn btn-primary" style={{ width: '100%' }}>Submit for Approval</button>
                        <p className={styles.disclaimer}>Admin approval takes 2-4 hours.</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

'use client';

import styles from './page.module.css';

export default function CreateListing() {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <h1>Sell Your Used Vehicle</h1>
                <p className={styles.subtitle}>Get the best price from 500+ verified buyers.</p>

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
                                <label>Model Name</label>
                                <input type="text" placeholder="e.g. Tata Ace Gold" className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Manufacturing Year</label>
                                <input type="number" placeholder="2018" className={styles.input} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3>2. Condition & Papers (Important)</h3>
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label>KMs Driven</label>
                                <input type="text" placeholder="e.g. 50,000" className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Owners (Serial)</label>
                                <select className={styles.input}>
                                    <option>1st Owner</option>
                                    <option>2nd Owner</option>
                                    <option>3rd Owner+</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label>Insurance Valid?</label>
                                <select className={styles.input}>
                                    <option>Yes, Comprehensive</option>
                                    <option>Yes, Third Party</option>
                                    <option>Expired</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Original RC?</label>
                                <select className={styles.input}>
                                    <option>Yes, Available</option>
                                    <option>No / Duplicate</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Expected Price (₹)</label>
                            <input type="text" placeholder="e.g. 5,00,000" className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3>3. Upload Photos</h3>
                        <div className={styles.row}>
                            <div className={styles.uploadBox}>
                                <span>📸 Add Photos</span>
                                <small>Front, Back, Tyres, Odometer</small>
                            </div>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button className="btn btn-primary" style={{ width: '100%' }}>List for Sale</button>
                        <p className={styles.disclaimer}>Our team will verify your RC details before publishing.</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

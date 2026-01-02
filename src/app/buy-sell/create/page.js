'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function CreateListing() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            window.scrollTo(0, 0);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', maxWidth: '500px', padding: '40px', background: 'white', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎉</div>
                    <h1 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Listing Submitted!</h1>
                    <p style={{ color: '#64748b', marginBottom: '30px', lineHeight: '1.6' }}>
                        Your vehicle <strong>Tata Ace Gold</strong> has been sent for verification. Our mechanic will call you within 2 hours to verify details.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <Link href="/" className="btn btn-secondary">Go Home</Link>
                        <Link href="/buy-sell" className="btn btn-primary">View Marketplace</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className={styles.wrapper}>
                <h1>Sell Your Used Vehicle</h1>
                <p className={styles.subtitle}>Get the best price from 500+ verified buyers.</p>

                <form className={styles.form} onSubmit={handleSubmit}>
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
                                <input type="text" placeholder="e.g. Tata Ace Gold" className={styles.input} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Manufacturing Year</label>
                                <input type="number" placeholder="2018" className={styles.input} required />
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3>2. Condition & Papers</h3>
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label>KMs Driven</label>
                                <input type="text" placeholder="e.g. 50,000" className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Owners</label>
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
                            <small style={{ color: '#16a34a', marginTop: '4px', display: 'block' }}>💡 Market Value for 2018 model: ₹4.2L - ₹4.8L</small>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3>3. Upload Photos</h3>
                        <div className={styles.uploadGrid}>
                            <div className={styles.uploadBox}>
                                <span>📸 Front View</span>
                            </div>
                            <div className={styles.uploadBox}>
                                <span>📸 Back View</span>
                            </div>
                            <div className={styles.uploadBox}>
                                <span>📸 Dashboard / Odo</span>
                            </div>
                            <div className={styles.uploadBox}>
                                <span>📄 RC Copy</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button className="btn btn-primary" style={{ width: '100%', opacity: loading ? 0.7 : 1 }} disabled={loading}>
                            {loading ? 'Submitting...' : 'List for Sale'}
                        </button>
                        <p className={styles.disclaimer}>
                            <span style={{ marginRight: '8px' }}>🛡️</span>
                            Our team will verify your RC details before publishing.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

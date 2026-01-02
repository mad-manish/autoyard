'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import RentalCalendar from '../../../components/RentalCalendar';
import DriverModal from '../../../components/DriverModal';
import styles from './page.module.css';

export default function RentalDetails({ params }) {
    const { id } = params;
    const [driver, setDriver] = useState(null);
    const [showDriverModal, setShowDriverModal] = useState(false);

    // Mock rental item - In real app fetch by ID
    const item = {
        id: 1,
        title: 'JCB 3CX Backhoe Loader',
        rate: '₹12,000 / day',
        location: 'Pune, MH',
        image: '/images/jcb.png',
        specs: {
            'Operating Weight': '7,460 kg',
            'Dig Depth': '4.24 m',
            'Engine Power': '74 hp',
            'Bucket Capacity': '1.1 cum'
        },
        description: 'Excellent condition JCB 3CX Backhoe Loader available for daily or weekly rental. Ideal for excavation, trenching, and material handling. Verified owner.'
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Left Column: Image */}
                    <div className={styles.imageSection}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className={styles.escrowBanner}>
                                🛡️ Escrow Protected Payment
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details & Booking */}
                    <div className={styles.detailsSection}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <div className={styles.rate}>{item.rate}</div>
                        <div className={styles.location}>📍 {item.location}</div>

                        <div className={styles.divider}></div>

                        <h3>Specifications</h3>
                        <div className={styles.specsGrid}>
                            {Object.entries(item.specs).map(([key, value]) => (
                                <div key={key} className={styles.specItem}>
                                    <span className={styles.specLabel}>{key}</span>
                                    <span className={styles.specValue}>{value}</span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.divider}></div>

                        <h3>About this Equipment</h3>
                        <p className={styles.description}>{item.description}</p>

                        <div className={styles.divider}></div>

                        <h3>Check Availability</h3>
                        <RentalCalendar />

                        <div style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
                            {!driver ? (
                                <button
                                    className={styles.driverBtn}
                                    onClick={() => setShowDriverModal(true)}
                                >
                                    👨🏽‍✈️ Need Driver / Operator? (+₹800/day)
                                </button>
                            ) : (
                                <div className={styles.selectedDriver} onClick={() => setShowDriverModal(true)}>
                                    <span>✅ Operator Selected: <strong>{driver.name}</strong></span>
                                    <small>Change</small>
                                </div>
                            )}

                            <button className={`${styles.contactBtn} ${styles.phoneBtn}`} style={{ marginBottom: '10px' }}>
                                Book Now
                            </button>
                            <div className={styles.depositNote}>
                                * Security Deposit of ₹5,000 required (Refundable)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showDriverModal && (
                <DriverModal
                    onClose={() => setShowDriverModal(false)}
                    onSelect={(d) => { setDriver(d); setShowDriverModal(false); }}
                />
            )}
        </>
    );
}

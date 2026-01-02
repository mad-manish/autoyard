'use client';

import { useState } from 'react';
import styles from './DriverModal.module.css';

export default function DriverModal({ onClose, onSelect }) {
    const drivers = [
        { id: 1, name: 'Raju Singh', exp: '12 Yrs', rating: '4.9', verified: true, alcoholFree: true, image: '👨🏽' },
        { id: 2, name: 'Amit Kumar', exp: '8 Yrs', rating: '4.7', verified: true, alcoholFree: true, image: '👳🏽‍♂️' },
        { id: 3, name: 'Vikram Jha', exp: '5 Yrs', rating: '4.5', verified: false, alcoholFree: false, image: '🧔🏽‍♂️' },
    ];

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h3>Select Verified Operator</h3>
                    <button onClick={onClose}>×</button>
                </div>

                <div className={styles.list}>
                    {drivers.map(d => (
                        <div key={d.id} className={styles.driverCard} onClick={() => onSelect(d)}>
                            <div className={styles.avatar}>{d.image}</div>
                            <div className={styles.info}>
                                <div className={styles.nameRow}>
                                    <h4>{d.name}</h4>
                                    {d.verified && <span className={styles.verifiedBadge}>✅ Verified</span>}
                                </div>
                                <div className={styles.stats}>{d.exp} Exp • ⭐ {d.rating}</div>
                                {d.alcoholFree && <div className={styles.badge}>🍺 Alcohol Test Pass</div>}
                            </div>
                            <button className={styles.selectBtn}>Select</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

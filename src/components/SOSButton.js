'use client';

import { useState } from 'react';
import styles from './SOSButton.module.css';

export default function SOSButton() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className={styles.fab}
                onClick={() => setShowModal(true)}
                title="Emergency Roadside Assistance"
            >
                🆘
            </button>

            {showModal && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <div className={styles.header}>
                            <h2>🚨 Emergency Assistance</h2>
                            <button className={styles.closeBtn} onClick={() => setShowModal(false)}>×</button>
                        </div>
                        <div className={styles.content}>
                            <button className={styles.actionBtn}>
                                📞 Call Ambulance
                            </button>
                            <button className={styles.actionBtn}>
                                🔧 Breakdown Service
                            </button>
                            <button className={styles.actionBtn}>
                                👮 Cal Police
                            </button>
                            <p className={styles.note}>Your location is being shared with responders.</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

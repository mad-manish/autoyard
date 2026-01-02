'use client';

import { useLanguage } from '../../context/LanguageContext';
import styles from './page.module.css';

export default function ServicesPage() {
    const { t } = useLanguage();

    const services = [
        { title: 'FASTag Recharge', icon: '🛣️', desc: 'Instant recharge with 2% cashback' },
        { title: 'Fuel Card', icon: '⛽', desc: 'Save ₹2 per litre at HP/IndianOil' },
        { title: 'Insurance Renewal', icon: '📄', desc: 'Compare 10+ insurers instantly' },
        { title: 'RTO Services', icon: '🏛️', desc: 'Challan payment & Permit renewal' },
    ];

    return (
        <div className="container">
            <div className={styles.header}>
                <h1>{t('services')}</h1>
                <p>Everything your fleet needs in one place.</p>
            </div>

            <div className={styles.grid}>
                {services.map(s => (
                    <div key={s.title} className={styles.card}>
                        <div className={styles.icon}>{s.icon}</div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                        <button className="btn btn-outline" style={{ marginTop: 'auto', width: '100%' }}>Explore</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

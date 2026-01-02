'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import EMICalculator from '@/components/EMICalculator';

// Mock data fetcher
const getVehicle = (id) => {
    return {
        id,
        title: 'Tata Prima 3530.K',
        price: '45,00,000',
        location: 'Mumbai, MH',
        year: '2022',
        type: 'Truck',
        image: '/images/truck.png',
        description: 'Excellent condition Tata Prima tipper. Used for 1.5 years in highway construction. All papers clear. Insurance valid till Dec 2026. Tires 80%.',
        specs: [
            { label: 'Kilometers', value: '45,000 km' },
            { label: 'Fuel', value: 'Diesel' },
            { label: 'Owner', value: 'First' },
            { label: 'Engine', value: 'Cummins ISBe 6.7L' }
        ]
    };
};

export default function VehicleDetails({ params }) {
    const vehicle = getVehicle(params.id);
    const [showPhone, setShowPhone] = useState(false);

    const handleWhatsApp = () => {
        const text = `Hi, I am interested in your ${vehicle.title} listed on AutoYard. Is it available?`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="container">
            <div className={styles.breadcrumb}>
                <Link href="/buy-sell">Buy & Sell</Link> &gt; <span>{vehicle.title}</span>
            </div>

            <div className={styles.grid}>
                <div className={styles.gallery}>
                    <div className={styles.mainImage}>
                        <Image
                            src={vehicle.image}
                            alt={vehicle.title}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                        <div className={styles.shareIcon}>🔗</div>
                    </div>
                    <div className={styles.thumbnails}>
                        <div className={styles.thumbActive} />
                        <div className={styles.thumb} />
                        <div className={styles.thumb} />
                    </div>
                </div>

                <div className={styles.info}>
                    <div className={styles.header}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                <h1 className={styles.title} style={{ marginBottom: 0 }}>{vehicle.title}</h1>
                                <span style={{ background: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700', border: '1px solid #bbf7d0' }}>
                                    ✅ Verified Seller
                                </span>
                            </div>
                            <div className={styles.price}>₹ {vehicle.price}</div>
                        </div>
                    </div>

                    <div className={styles.meta}>
                        <span className={styles.tag}>{vehicle.year}</span>
                        <span className={styles.tag}>{vehicle.location}</span>
                    </div>

                    <div className={styles.specs}>
                        {vehicle.specs.map(spec => (
                            <div key={spec.label} className={styles.specItem}>
                                <label>{spec.label}</label>
                                <span>{spec.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.description}>
                        <h3>Description</h3>
                        <p>{vehicle.description}</p>
                    </div>

                    <div className={styles.actions}>
                        <button
                            className={`${styles.contactBtn} ${styles.phoneBtn}`}
                            onClick={() => setShowPhone(!showPhone)}
                        >
                            {showPhone ? '📞 98765-43210' : 'Contact Seller (Show)'}
                        </button>
                        <button
                            className={`${styles.contactBtn} ${styles.chatBtn}`}
                            onClick={handleWhatsApp}
                        >
                            Chat on WhatsApp
                        </button>
                    </div>

                    <EMICalculator price={vehicle.price} />

                    <div className={styles.warrantyBox}>
                        <div className={styles.warrantyHeader}>
                            <span>🛡️ AutoYard Warranty</span>
                            <span className={styles.recommendedBadge}>Recommended</span>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: '10px 0' }}>Protect against engine and transmission failure.</p>
                        <div className={styles.planOptions}>
                            <label className={styles.plan}>
                                <input type="radio" name="warranty" />
                                <div>
                                    <strong>3 Months</strong>
                                    <div>₹4,999</div>
                                </div>
                            </label>
                            <label className={styles.plan}>
                                <input type="radio" name="warranty" defaultChecked />
                                <div>
                                    <strong>6 Months</strong>
                                    <div>₹8,999</div>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className={styles.safety}>
                        <h4>Safety Tip</h4>
                        <p>Never transfer money without inspecting the vehicle physically.</p>
                    </div>
                </div>
            </div>
            import VehicleCard from '@/components/VehicleCard';

            // ... (existing imports)

            export default function VehicleDetails({params}) {
    // ... (existing component code)

    // Mock Similar Vehicles (excluding current ID)
    const similarVehicles = [
            {id: 2, title: 'Ashok Leyland Dost', price: '7,50,000', location: 'Pune, MH', year: '2019', type: 'Tempo', image: null, greatDeal: true },
            {id: 4, title: 'Eicher Pro 2049', price: '12,00,000', location: 'Bangalore, KA', year: '2020', type: 'Truck', image: null, certified: true },
            {id: 6, title: 'BharatBenz 1923C', price: '28,00,000', location: 'Jaipur, RJ', year: '2019', type: 'Tipper', image: null },
            ];

            return (
            <div className="container">
                {/* ... (existing JSX) ... */}

                <div className={styles.grid}>
                    {/* ... (existing content) ... */}
                </div>

                {/* NEW: Similar Vehicles Section */}
                <div className={styles.similarSection}>
                    <h3 className={styles.sectionTitle}>Check Out Similar Vehicles</h3>
                    <div className={styles.similarGrid}>
                        {similarVehicles.map(v => (
                            <div key={v.id} style={{ minWidth: '280px' }}>
                                <VehicleCard {...v} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            );
}

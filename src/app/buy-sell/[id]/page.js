import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

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
                    </div>
                    <div className={styles.thumbnails}>
                        <div className={styles.thumbActive} />
                        <div className={styles.thumb} />
                        <div className={styles.thumb} />
                    </div>
                </div>

                <div className={styles.info}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>{vehicle.title}</h1>
                        <div className={styles.price}>₹ {vehicle.price}</div>
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
                        <button className={`${styles.contactBtn} ${styles.phoneBtn}`}>
                            Contact Seller <small>(Masked)</small>
                        </button>
                        <button className={`${styles.contactBtn} ${styles.chatBtn}`}>
                            Chat with Seller
                        </button>
                        <button className={`${styles.contactBtn}`} style={{ background: '#2563eb', color: 'white' }}>
                            💰 Get Loan / EMI Options
                        </button>
                    </div>

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
        </div>
    );
}

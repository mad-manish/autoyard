import Image from 'next/image';
import Link from 'next/link';
import styles from './VehicleCard.module.css';

export default function VehicleCard({ id, title, price, location, year, image, type, certified, greatDeal, linkPrefix = '/buy-sell' }) {
    return (
        <Link href={`${linkPrefix}/${id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image || '/images/truck.png'}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
                <div className={styles.badge}>{type}</div>
                {certified && <div className={styles.certifiedBadge}>✅ Certified</div>}
                {greatDeal && <div className={styles.dealBadge}>🔥 Great Deal</div>}
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>
                    <span className={styles.year}>{year}</span>
                </div>
                <div className={styles.details}>
                    <span className={styles.price}>₹ {price}</span>
                    <span className={styles.location}>{location}</span>
                </div>
            </div>
        </Link>
    );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './VehicleCard.module.css';

export default function VehicleCard({ id, title, price, location, year, image, type, certified, greatDeal, linkPrefix = '/buy-sell' }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleWhatsApp = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const text = `Hi, I'm interested in the ${title} (₹${price})`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    const toggleFavorite = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };

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
                {certified && <div className={styles.certifiedBadge}>✅ Verified</div>}
                {greatDeal && <div className={styles.dealBadge}>🔥 Hot Deal</div>}

                <button
                    className={`${styles.favBtn} ${isFavorite ? styles.favActive : ''}`}
                    onClick={toggleFavorite}
                >
                    {isFavorite ? '❤️' : '🤍'}
                </button>
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>
                    <span className={styles.year}>{year}</span>
                </div>

                <div className={styles.details}>
                    <div>
                        <div className={styles.price}>₹ {price}</div>
                        <div className={styles.location}>📍 {location}</div>
                    </div>
                </div>

                <button className={styles.whatsappBtn} onClick={handleWhatsApp}>
                    💬 Chat
                </button>
            </div>
        </Link>
    );
}

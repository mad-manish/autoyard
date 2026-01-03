'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Heart, MessageCircle, BadgeCheck, Flame } from 'lucide-react';
import styles from './VehicleCard.module.css';

export default function VehicleCard({
    id, title, price, location, year, image, type,
    certified, greatDeal, linkPrefix = '/buy-sell'
}) {
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
        <Link href={`${linkPrefix}/${id}`} className={styles.cardLink}>
            <motion.div
                className={styles.card}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                <div className={styles.imageWrapper}>
                    <Image
                        src={image || '/images/truck.png'}
                        alt={title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className={styles.image}
                    />

                    <div className={styles.overlay} />

                    <div className={styles.typeBadge}>{type}</div>

                    {certified && (
                        <div className={styles.certifiedBadge}>
                            <BadgeCheck size={14} fill="#16a34a" color="white" />
                            <span>Verified</span>
                        </div>
                    )}

                    {greatDeal && (
                        <div className={styles.dealBadge}>
                            <Flame size={14} fill="#ef4444" color="white" />
                            <span>Great Deal</span>
                        </div>
                    )}

                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        className={`${styles.favBtn} ${isFavorite ? styles.favActive : ''}`}
                        onClick={toggleFavorite}
                    >
                        <Heart size={18} fill={isFavorite ? '#ef4444' : 'none'} color={isFavorite ? '#ef4444' : '#1e293b'} />
                    </motion.button>
                </div>

                <div className={styles.content}>
                    <div className={styles.header}>
                        <h3 className={styles.title}>{title}</h3>
                        <div className={styles.price}>₹ {price}</div>
                    </div>

                    <div className={styles.metaRow}>
                        <div className={styles.metaItem}>
                            <Calendar size={14} className={styles.metaIcon} />
                            <span>{year}</span>
                        </div>
                        <div className={styles.metaItem}>
                            <MapPin size={14} className={styles.metaIcon} />
                            <span>{location}</span>
                        </div>
                    </div>

                    <button className={styles.whatsappBtn} onClick={handleWhatsApp}>
                        <MessageCircle size={18} />
                        <span>Chat with Seller</span>
                    </button>
                </div>
            </motion.div>
        </Link>
    );
}

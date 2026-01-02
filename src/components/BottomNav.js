'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './BottomNav.module.css';

export default function BottomNav() {
    const pathname = usePathname();

    const isActive = (path) => pathname === path || (path !== '/' && pathname.startsWith(path));

    return (
        <nav className={styles.bottomNav}>
            <Link href="/" className={`${styles.item} ${isActive('/') ? styles.active : ''}`}>
                <span>🏠</span>
                <span className={styles.label}>Home</span>
            </Link>
            <Link href="/buy-sell" className={`${styles.item} ${isActive('/buy-sell') ? styles.active : ''}`}>
                <span>🚚</span>
                <span className={styles.label}>Buy</span>
            </Link>
            <Link href="/rent" className={`${styles.item} ${isActive('/rent') ? styles.active : ''}`}>
                <span>🚜</span>
                <span className={styles.label}>Rent</span>
            </Link>
            <Link href="/services" className={`${styles.item} ${isActive('/services') ? styles.active : ''}`}>
                <span>🛠️</span>
                <span className={styles.label}>Services</span>
            </Link>
            <Link href="/admin" className={`${styles.item} ${isActive('/admin') ? styles.active : ''}`}>
                <span>👤</span>
                <span className={styles.label}>Profile</span>
            </Link>
        </nav>
    );
}

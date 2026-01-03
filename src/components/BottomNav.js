'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Truck, Tractor, User } from 'lucide-react';
import styles from './BottomNav.module.css';

export default function BottomNav() {
    const pathname = usePathname();

    const isActive = (path) => pathname === path || (path !== '/' && pathname.startsWith(path));

    return (
        <nav className={styles.bottomNav}>
            <Link href="/" className={`${styles.item} ${isActive('/') ? styles.active : ''}`}>
                <Home size={24} strokeWidth={isActive('/') ? 2.5 : 2} />
                <span className={styles.label}>Home</span>
            </Link>
            <Link href="/buy-sell" className={`${styles.item} ${isActive('/buy-sell') ? styles.active : ''}`}>
                <Truck size={24} strokeWidth={isActive('/buy-sell') ? 2.5 : 2} />
                <span className={styles.label}>Buy</span>
            </Link>
            <Link href="/rent" className={`${styles.item} ${isActive('/rent') ? styles.active : ''}`}>
                <Tractor size={24} strokeWidth={isActive('/rent') ? 2.5 : 2} />
                <span className={styles.label}>Rent</span>
            </Link>
            <Link href="/admin" className={`${styles.item} ${isActive('/admin') ? styles.active : ''}`}>
                <User size={24} strokeWidth={isActive('/admin') ? 2.5 : 2} />
                <span className={styles.label}>Profile</span>
            </Link>
        </nav>
    );
}

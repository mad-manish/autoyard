'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>What do you need today?</h1>
        <p>India's Commercial Vehicle Marketplace</p>
      </header>

      <div className={styles.actionGrid}>
        {/* BUY CARD */}
        <Link href="/buy-sell?mode=buy" className={`${styles.card} ${styles.buyCard}`}>
          <span className={styles.icon}>🚚</span>
          <h2>Buy</h2>
          <p>Trucks, Tempos, JCBs</p>
        </Link>

        {/* SELL CARD */}
        <Link href="/buy-sell?mode=sell" className={`${styles.card} ${styles.sellCard}`}>
          <span className={styles.icon}>💰</span>
          <h2>Sell</h2>
          <p>Get Best Price</p>
        </Link>

        {/* RENT CARD */}
        <Link href="/rent" className={`${styles.card} ${styles.rentCard}`}>
          <span className={styles.icon}>🚜</span>
          <h2>Rent</h2>
          <p>Hire Equipment</p>
        </Link>
      </div>

      <section className={styles.categories}>
        <h3>Browse by Category</h3>
        <div className={styles.catGrid}>
            <Link href="/buy-sell?search=truck" className={styles.catItem}>
                <span className={styles.catIcon}>🚛</span>
                <span>Trucks</span>
            </Link>
            <Link href="/buy-sell?search=jcb" className={styles.catItem}>
                <span className={styles.catIcon}>🏗️</span>
                <span>JCBs</span>
            </Link>
            <Link href="/buy-sell?search=tipper" className={styles.catItem}>
                <span className={styles.catIcon}>🚚</span>
                <span>Tippers</span>
            </Link>
            <Link href="/buy-sell?search=tempo" className={styles.catItem}>
                <span className={styles.catIcon}>🚐</span>
                <span>Tempos</span>
            </Link>
        </div>
      </section>

      <div className={styles.trustFooter}>
        <div className={styles.trustItem}>
          <span>✅</span> 10,000+ Verified Users
        </div>
        <div className={styles.trustItem}>
          <span>🛡️</span> Secure Payments
        </div>
      </div>
    </div>
  );
}

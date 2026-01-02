'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/hero.png"
            alt="Rugged Used Commercial Vehicles"
            width={800}
            height={300}
            className={styles.heroImage}
            priority
          />
        </div>
        <h1>India's Trusted <span className={styles.highlight}>Second-Hand</span> Marketplace</h1>
        <p>Verified Used Trucks, JCBs, and Equipment. Fair Prices. Clean Papers.</p>
      </header>

      <div className={styles.actionGrid}>
        {/* BUY USED */}
        <Link href="/buy-sell?mode=buy" className={`${styles.card} ${styles.buyCard}`}>
          <div className={styles.cardContent}>
            <span className={styles.icon}>🚚</span>
            <h2>Buy Used</h2>
            <p>Mechanic Verified</p>
          </div>
        </Link>

        {/* SELL USED */}
        <Link href="/buy-sell?mode=sell" className={`${styles.card} ${styles.sellCard}`}>
          <div className={styles.cardContent}>
            <span className={styles.icon}>💰</span>
            <h2>Sell Used</h2>
            <p>Get Cash Fast</p>
          </div>
        </Link>

        {/* RENT */}
        <Link href="/rent" className={`${styles.card} ${styles.rentCard}`}>
          <div className={styles.cardContent}>
            <span className={styles.icon}>🚜</span>
            <h2>Rent</h2>
            <p>Hire Equipment</p>
          </div>
        </Link>
      </div>

      <section className={styles.painPoints}>
        <div className={styles.trustItem}>
          <span className={styles.check}>✅</span>
          <div>
            <strong>Mechanic Verified</strong>
            <small>Every vehicle inspected. No junk.</small>
          </div>
        </div>
        <div className={styles.trustItem}>
          <span className={styles.check}>📄</span>
          <div>
            <strong>RTO Papers Sorted</strong>
            <small>We handle the transfer paperwork.</small>
          </div>
        </div>
        <div className={styles.trustItem}>
          <span className={styles.check}>⚖️</span>
          <div>
            <strong>Fair Market Price</strong>
            <small>Transparent pricing. No hidden fees.</small>
          </div>
        </div>
      </section>
    </div>
  );
}

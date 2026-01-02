'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/buy-sell?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>India's Trusted <span className={styles.highlight}>Commercial Vehicle</span> Marketplace</h1>
          <p className={styles.tagline}>Buy, Sell, and Rent Trucks, Tempos, and Construction Equipment with complete peace of mind.</p>

          <form onSubmit={handleSearch} className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search e.g. Tata Ace, JCB, Eicher..."
              className={styles.searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className={styles.searchBtn}>Search</button>
          </form>
        </div>
      </section>

      <div className={styles.split}>
        <div className={styles.card}>
          <h2>Buy or Sell</h2>
          <p>Direct deals. Zero commission. Verified trucks.</p>
          <Link href="/buy-sell" className={styles.btnPrimary}>Browse Vehicles</Link>
        </div>
        <div className={`${styles.card} ${styles.rentCard}`}>
          <h2>Rent with Guarantee</h2>
          <p>Verified JCBs & Equipment. Payment Protection.</p>
          <Link href="/rent" className={styles.btnSecondary}>Find Rentals</Link>
        </div>
      </div>

      <section className={styles.features}>
        <div className={styles.feature}>
          <span className={styles.icon}>🛡️</span>
          <h3>Escrow Payment</h3>
          <p>Money stays safe until you approve the vehicle.</p>
        </div>
        <div className={styles.feature}>
          <span className={styles.icon}>✅</span>
          <h3>Verified Sellers</h3>
          <p>KYC verified owners & driver profiles.</p>
        </div>
        <div className={styles.feature}>
          <span className={styles.icon}>🚛</span>
          <h3>Pan-India Network</h3>
          <p>Connect with transporters across 500+ cities.</p>
        </div>
      </section>
    </div>
  );
}

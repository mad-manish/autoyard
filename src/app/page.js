'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Truck, Tractor, IndianRupee, ArrowRight, ShieldCheck, FileText, BadgeCheck } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <HeroSection />

      <main className={styles.mainContent}>

        {/* ACTION GRID (Bento Style) */}
        <section className={styles.bentoGrid}>
          {/* Buy Used - Large Card */}
          <Link href="/buy-sell?mode=buy" className={styles.buyCardWrapper}>
            <motion.div
              className={`${styles.card} ${styles.buyCard}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.cardIconBkg}>
                <Truck size={48} />
              </div>
              <div className={styles.cardContent}>
                <h2>Buy Used Vehicles</h2>
                <p>Browse 500+ verified trucks, tempos, and construction equipment.</p>
                <span className={styles.ctaLink}>View Inventory <ArrowRight size={16} /></span>
              </div>
            </motion.div>
          </Link>

          {/* Sell Used - Medium Card */}
          <Link href="/buy-sell/create" className={styles.sellCardWrapper}>
            <motion.div
              className={`${styles.card} ${styles.sellCard}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.cardIconBkg}>
                <IndianRupee size={40} />
              </div>
              <div className={styles.cardContent}>
                <h2>Sell Your Vehicle</h2>
                <p>Get the best market price. Zero commission.</p>
              </div>
            </motion.div>
          </Link>

          {/* Rent - Medium Card */}
          <Link href="/rent" className={styles.rentCardWrapper}>
            <motion.div
              className={`${styles.card} ${styles.rentCard}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.cardIconBkg}>
                <Tractor size={40} />
              </div>
              <div className={styles.cardContent}>
                <h2>Rent Equipment</h2>
                <p>Hire JCBs with or without operators.</p>
              </div>
            </motion.div>
          </Link>
        </section>

        {/* TRUST SIGNALS */}
        <section className={styles.trustSection}>
          <div className={styles.sectionHeader}>
            <h2>Why AutoYard?</h2>
            <div className={styles.titleUnderline} />
          </div>

          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}><BadgeCheck size={32} /></div>
              <h3>Mechanic Verified</h3>
              <p>Every vehicle undergoes a 120-point inspection by our certified engineers.</p>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}><FileText size={32} /></div>
              <h3>Paperwork Sorted</h3>
              <p>We handle RTO transfer, NOC issuance, and insurance renewals for you.</p>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}><ShieldCheck size={32} /></div>
              <h3>Secure Payments</h3>
              <p>Funds are held in escrow until you physically verify and accept the vehicle.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

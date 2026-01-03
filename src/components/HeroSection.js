'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay} />

            {/* Background Image Container - In a real app, use next/image with object-fit */}
            <div className={styles.bgImage} />

            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.textContent}
                >
                    <div className={styles.badge}>
                        INDIA'S #1 COMMERCIAL MARKETPLACE
                    </div>
                    <h1>
                        Buy & Sell <br />
                        <span className={styles.highlight}>Heavy Metal.</span>
                    </h1>
                    <p>
                        Verified Trucks, JCBs, and Equipment at fair market prices.
                        Direct from owners, zero hidden fees.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.searchWrapper}
                >
                    <div className={styles.searchBar}>
                        <Search className={styles.searchIcon} size={24} />
                        <input
                            type="text"
                            placeholder="Try 'Tata Ace', 'JCB 3DX', or 'Mumbai'"
                            className={styles.input}
                        />
                        <button className={styles.searchBtn}>Search Used</button>
                    </div>
                    <div className={styles.tags}>
                        <span>Popular:</span>
                        <button>Tata Ace</button>
                        <button>Eicher Pro</button>
                        <button>JCB 3DX</button>
                        <button>Ashok Leyland</button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

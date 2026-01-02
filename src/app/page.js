import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>
          India's Trusted <span className={styles.highlight}>Commercial Vehicle</span> Marketplace
        </h1>
        <p className={styles.subtitle}>
          Buy, Sell, and Rent Trucks, Tempos, and Construction Equipment with complete peace of mind.
        </p>
      </header>

      <section className={styles.splitSection}>
        {/* Buy & Sell Card */}
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/truck.png"
              alt="Buy & Sell Trucks"
              fill
              className={styles.cardImage}
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className={styles.overlay} />
          </div>
          <div className={styles.cardContent}>
            <h2>Buy & Sell</h2>
            <p>Direct deals for Trucks, Tempos & Trailers.</p>
            <div className={styles.actions}>
              <Link href="/buy-sell?mode=buy" className="btn btn-primary">Buy Vehicle</Link>
              <Link href="/buy-sell/create" className="btn btn-outline">Sell Vehicle</Link>
            </div>
          </div>
        </div>

        {/* Rent Card */}
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/jcb.png"
              alt="Rent Construction Equipment"
              fill
              className={styles.cardImage}
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className={styles.overlay} />
          </div>
          <div className={styles.cardContent}>
            <h2>Rent with Guarantee</h2>
            <p>Verified JCBs & Equipment. Payment Protection.</p>
            <div className={styles.actions}>
              <Link href="/rent" className="btn btn-primary">Rent Equipment</Link>
              <Link href="/rent/list" className="btn btn-outline">List for Rent</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>Trusted</h3>
          <p>Verified Users & KYC Mandatory</p>
        </div>
        <div className={styles.feature}>
          <h3>Secure</h3>
          <p>Escrow Payments for Rentals</p>
        </div>
        <div className={styles.feature}>
          <h3>Transparent</h3>
          <p>No Hidden Broker Fees</p>
        </div>
      </section>
    </div>
  );
}

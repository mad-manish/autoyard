'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Auto<span className={styles.highlight}>Yard</span>
        </Link>

        <div className={styles.links}>
          <Link href="/buy-sell" className={styles.link}>{t('buySell')}</Link>
          <Link href="/rent" className={styles.link}>{t('rent')}</Link>
          <Link href="/services" className={styles.link}>{t('services')}</Link>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.voiceBtn}
            onClick={() => alert('🎤 Listening... \n(Voice Search Mock)')}
            title="Voice Search"
          >
            🎙️
          </button>

          <button
            className={styles.langBtn}
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
          >
            {lang === 'en' ? '🇮🇳 HI' : '🇬🇧 EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}

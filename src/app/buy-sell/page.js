import VehicleCard from '@/components/VehicleCard';
import Link from 'next/link';
import styles from './page.module.css';

const MOCK_LISTINGS = [
    { id: 1, title: 'Tata Prima 3530.K', price: '45,00,000', location: 'Mumbai, MH', year: '2022', type: 'Truck', image: '/images/truck.png', certified: true },
    { id: 2, title: 'Ashok Leyland Dost', price: '7,50,000', location: 'Pune, MH', year: '2023', type: 'Tempo', image: null, greatDeal: true },
    { id: 3, title: 'Mahindra Bolero Pickup', price: '8,20,000', location: 'Delhi, DL', year: '2021', type: 'Pickup', image: null },
    { id: 4, title: 'Eicher Pro 2049', price: '12,00,000', location: 'Bangalore, KA', year: '2020', type: 'Truck', image: null, certified: true },
    { id: 5, title: 'Tata Ace Gold', price: '5,50,000', location: 'Chennai, TN', year: '2023', type: 'Tempo', image: null },
    { id: 6, title: 'BharatBenz 1923C', price: '28,00,000', location: 'Jaipur, RJ', year: '2019', type: 'Tipper', image: null },
];

export default function BuySell({ searchParams }) {
    const mode = searchParams?.mode || 'buy';
    // Check if searchParams.search exists before calling toLowerCase
    const searchQuery = searchParams?.search ? searchParams.search.toLowerCase() : '';

    const filteredListings = MOCK_LISTINGS.filter(item =>
        item.title.toLowerCase().includes(searchQuery) ||
        item.type.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="container">
            <div className={styles.header}>
                <h1>{mode === 'buy' ? 'Buy Commercial Vehicles' : 'Sell Your Vehicle'}</h1>
                <p>Find the best deals on Trucks, Tippers, and heavy machinery.</p>

                {searchQuery && (
                    <div style={{ marginTop: '10px', padding: '8px 16px', background: 'rgba(234, 179, 8, 0.1)', borderRadius: '8px', display: 'inline-block' }}>
                        Results for: <strong>"{searchParams.search}"</strong>
                        <Link href="/buy-sell" style={{ marginLeft: '10px', color: '#ef4444', textDecoration: 'none' }}>Clear ✕</Link>
                    </div>
                )}
            </div>

            <div className={styles.layout}>
                <aside className={styles.filters}>
                    <h3>Filters</h3>

                    <div className={styles.filterGroup}>
                        <label>Category</label>
                        <select className={styles.select}>
                            <option>All Types</option>
                            <option>Trucks</option>
                            <option>Tempos</option>
                            <option>Construction (JCB)</option>
                        </select>
                    </div>

                    <div className={styles.filterGroup}>
                        <label>Price Range</label>
                        <input type="range" min="0" max="5000000" className={styles.range} />
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Up to ₹50 Lakh</div>
                    </div>

                    <button className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>Apply Filters</button>
                </aside>

                <main className={styles.grid}>
                    {filteredListings.length > 0 ? (
                        filteredListings.map(item => (
                            <VehicleCard key={item.id} {...item} />
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8', gridColumn: '1 / -1' }}>
                            <h3>No vehicles found matching "{searchParams.search}"</h3>
                            <p>Try searching for "Tata" or "Ashok"</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

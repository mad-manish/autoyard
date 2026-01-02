import VehicleCard from '@/components/VehicleCard';
import styles from './page.module.css';

const MOCK_LISTINGS = [
    { id: 1, title: 'Tata Prima 3530.K', price: '45,00,000', location: 'Mumbai, MH', year: '2022', type: 'Truck', image: '/images/truck.png', certified: true },
    { id: 2, title: 'Ashok Leyland Dost', price: '7,50,000', location: 'Pune, MH', year: '2023', type: 'Tempo', image: null, greatDeal: true },
    { id: 3, title: 'Mahindra Bolero Pickup', price: '8,20,000', location: 'Delhi, DL', year: '2021', type: 'Pickup', image: null },
    { id: 4, title: 'Eicher Pro 2049', price: '12,00,000', location: 'Bangalore, KA', year: '2020', type: 'Truck', image: null, certified: true },
    { id: 5, title: 'Tata Ace Gold', price: '5,50,000', location: 'Chennai, TN', year: '2023', type: 'Tempo', image: null },
    { id: 6, title: 'BharatBenz 1923C', price: '28,00,000', location: 'Jaipur, RJ', year: '2019', type: 'Tipper', image: null },
];

export default function BuySellPage() {
    return (
        <div className="container">
            <div className={styles.header}>
                <h1>Buy & Sell Vehicles</h1>
                <button className="btn btn-primary">Sell Your Vehicle</button>
            </div>

            <div className={styles.layout}>
                <aside className={styles.filters}>
                    <h3>Filters</h3>
                    <div className={styles.filterGroup}>
                        <label>Type</label>
                        <select className={styles.select}>
                            <option>All Types</option>
                            <option>Truck</option>
                            <option>Tempo / Pickup</option>
                            <option>Tipper</option>
                            <option>Trailer</option>
                        </select>
                    </div>
                    <div className={styles.filterGroup}>
                        <label>City</label>
                        <select className={styles.select}>
                            <option>All India</option>
                            <option>Mumbai</option>
                            <option>Delhi</option>
                            <option>Bangalore</option>
                        </select>
                    </div>
                    <div className={styles.filterGroup}>
                        <label>Price Range</label>
                        <input type="range" min="0" max="5000000" className={styles.range} />
                    </div>
                </aside>

                <main className={styles.grid}>
                    {MOCK_LISTINGS.map(vehicle => (
                        <VehicleCard key={vehicle.id} {...vehicle} />
                    ))}
                </main>
            </div>
        </div>
    );
}

import VehicleCard from '@/components/VehicleCard';
import styles from '../buy-sell/page.module.css'; // Reusing layout styles

const MOCK_RENTALS = [
    { id: 1, title: 'JCB 3CX Backhoe', price: '12,000 / day', location: 'Mumbai, MH', year: '2022', type: 'JCB', image: '/images/jcb.png' },
    { id: 2, title: 'Tata Hitachi 200', price: '18,000 / day', location: 'Pune, MH', year: '2021', type: 'Excavator', image: null },
    { id: 3, title: 'Mahindra EarthMaster', price: '10,000 / day', location: 'Delhi, DL', year: '2023', type: 'Backhoe', image: null },
    { id: 4, title: 'Hyva Tipper Truck', price: '5,000 / day', location: 'Bangalore, KA', year: '2020', type: 'Tipper', image: null },
    { id: 5, title: 'Escorts Hydra Crane', price: '8,000 / day', location: 'Chennai, TN', year: '2019', type: 'Crane', image: null },
];

export default function RentPage() {
    return (
        <div className="container">
            <div className={styles.header}>
                <h1>Rent Heavy Equipment</h1>
                <button className="btn btn-primary">List for Rent</button>
            </div>

            <div className={styles.layout}>
                <aside className={styles.filters}>
                    <h3>Filters</h3>
                    <div className={styles.filterGroup}>
                        <label>Equipment Type</label>
                        <select className={styles.select}>
                            <option>All Types</option>
                            <option>JCB / Backhoe</option>
                            <option>Excavator</option>
                            <option>Crane</option>
                            <option>Tipper</option>
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
                        <label>Duration</label>
                        <select className={styles.select}>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                        </select>
                    </div>
                </aside>

                <main className={styles.grid}>
                    {MOCK_RENTALS.map(vehicle => (
                        <VehicleCard key={vehicle.id} {...vehicle} linkPrefix="/rent" />
                    ))}
                </main>
            </div>
        </div>
    );
}

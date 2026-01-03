'use client';

import { Filter } from 'lucide-react';
import VehicleCard from '@/components/VehicleCard';
import styles from '../buy-sell/page.module.css';

const MOCK_RENTALS = [
    { id: 1, title: 'JCB 3CX Backhoe', price: '12,000 / day', location: 'Mumbai, MH', year: '2022', type: 'JCB', image: '/images/jcb.png', certified: true },
    { id: 2, title: 'Tata Hitachi 200', price: '18,000 / day', location: 'Pune, MH', year: '2021', type: 'Excavator', image: null, certified: true },
    { id: 3, title: 'Mahindra EarthMaster', price: '10,000 / day', location: 'Delhi, DL', year: '2023', type: 'Backhoe', image: null },
    { id: 4, title: 'Hyva Tipper Truck', price: '5,000 / day', location: 'Bangalore, KA', year: '2020', type: 'Tipper', image: null, greatDeal: true },
    { id: 5, title: 'Escorts Hydra Crane', price: '8,000 / day', location: 'Chennai, TN', year: '2019', type: 'Crane', image: null },
];

export default function RentPage() {
    return (
        <div className="container">
            <div className={styles.header}>
                <div>
                    <h1>Rent Heavy Equipment</h1>
                    <p>Verified operators, flexible daily/monthly plans.</p>
                </div>
            </div>

            <div className={styles.layout}>
                <aside className={styles.filters}>
                    <h3><Filter size={20} /> Filters</h3>

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
                        <label>Operator</label>
                        <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'normal', cursor: 'pointer' }}>
                                <input type="checkbox" defaultChecked /> With Driver
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'normal', cursor: 'pointer' }}>
                                <input type="checkbox" /> Machine Only
                            </label>
                        </div>
                    </div>

                    <div className={styles.filterGroup}>
                        <label>Rental Duration</label>
                        <select className={styles.select}>
                            <option>Daily Rate</option>
                            <option>Weekly Rate</option>
                            <option>Monthly Rate</option>
                        </select>
                    </div>
                </aside>

                <main className={styles.grid}>
                    {MOCK_RENTALS.map(vehicle => (
                        <div key={vehicle.id} style={{ position: 'relative', height: '100%' }}>
                            <VehicleCard {...vehicle} linkPrefix="/rent" />
                        </div>
                    ))}
                </main>
            </div>
        </div>
    );
}

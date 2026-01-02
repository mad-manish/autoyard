'use client';

import VehicleCard from '@/components/VehicleCard';
import styles from '../buy-sell/page.module.css';

const MOCK_RENTALS = [
    { id: 1, title: 'JCB 3CX Backhoe', price: '12,000 / day', location: 'Mumbai, MH', year: '2022', type: 'JCB', image: '/images/jcb.png', driverIncluded: true },
    { id: 2, title: 'Tata Hitachi 200', price: '18,000 / day', location: 'Pune, MH', year: '2021', type: 'Excavator', image: null, driverIncluded: true },
    { id: 3, title: 'Mahindra EarthMaster', price: '10,000 / day', location: 'Delhi, DL', year: '2023', type: 'Backhoe', image: null, machineOnly: true },
    { id: 4, title: 'Hyva Tipper Truck', price: '5,000 / day', location: 'Bangalore, KA', year: '2020', type: 'Tipper', image: null, driverIncluded: true },
    { id: 5, title: 'Escorts Hydra Crane', price: '8,000 / day', location: 'Chennai, TN', year: '2019', type: 'Crane', image: null, machineOnly: true },
];

export default function RentPage() {
    return (
        <div className="container">
            <div className={styles.header}>
                <h1>Rent Heavy Equipment</h1>
                <p>With verified operators or self-drive options.</p>
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
                        <label>Operator</label>
                        <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'normal' }}>
                                <input type="checkbox" defaultChecked /> With Driver
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'normal' }}>
                                <input type="checkbox" /> Machine Only
                            </label>
                        </div>
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
                        <div key={vehicle.id} style={{ position: 'relative' }}>
                            <VehicleCard {...vehicle} linkPrefix="/rent" />
                            {vehicle.driverIncluded && (
                                <span style={{
                                    position: 'absolute', bottom: '80px', right: '12px',
                                    background: '#dbeafe', color: '#1e40af', padding: '4px 8px',
                                    borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700', zIndex: 5
                                }}>
                                    👨‍✈️ Driver Included
                                </span>
                            )}
                            {vehicle.machineOnly && (
                                <span style={{
                                    position: 'absolute', bottom: '80px', right: '12px',
                                    background: '#f3f4f6', color: '#374151', padding: '4px 8px',
                                    borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700', zIndex: 5
                                }}>
                                    🚜 Machine Only
                                </span>
                            )}
                        </div>
                    ))}
                </main>
            </div>
        </div>
    );
}

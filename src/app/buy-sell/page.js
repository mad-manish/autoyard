'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import VehicleCard from '@/components/VehicleCard';
import Link from 'next/link';
import styles from './page.module.css';

const MOCK_LISTINGS = [
    { id: 1, title: 'Tata Prima 3530.K', price: '45,00,000', location: 'Mumbai, MH', year: '2022', type: 'Truck', image: '/images/truck.png', certified: true, km: 45000 },
    { id: 2, title: 'Ashok Leyland Dost', price: '7,50,000', location: 'Pune, MH', year: '2019', type: 'Tempo', image: null, greatDeal: true, km: 60000 },
    { id: 3, title: 'Mahindra Bolero Pickup', price: '8,20,000', location: 'Delhi, DL', year: '2021', type: 'Pickup', image: null, km: 30000 },
    { id: 4, title: 'Eicher Pro 2049', price: '12,00,000', location: 'Bangalore, KA', year: '2020', type: 'Truck', image: null, certified: true, km: 55000 },
    { id: 5, title: 'Tata Ace Gold', price: '3,50,000', location: 'Chennai, TN', year: '2018', type: 'Tempo', image: null, km: 80000 },
    { id: 6, title: 'BharatBenz 1923C', price: '28,00,000', location: 'Jaipur, RJ', year: '2019', type: 'Tipper', image: null, km: 90000 },
    { id: 7, title: 'JCB 3DX Super', price: '32,00,000', location: 'Nagpur, MH', year: '2021', type: 'JCB', image: '/images/jcb.png', km: 2500 }, // Added JCB
];

export default function BuySell() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Initial State
    const initialSearch = searchParams.get('search') || '';
    const initialMode = searchParams.get('mode') || 'buy';

    const [filters, setFilters] = useState({
        search: initialSearch,
        category: 'All Types',
        minYear: 'Any Year',
        maxKm: 'Any'
    });

    // Update state if URL changes (e.g. from Home page search)
    useEffect(() => {
        setFilters(prev => ({ ...prev, search: searchParams.get('search') || '' }));
    }, [searchParams]);

    // Filtering Logic
    const filteredListings = MOCK_LISTINGS.filter(item => {
        // Text Search
        const matchesSearch = item.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            item.type.toLowerCase().includes(filters.search.toLowerCase());

        // Category Filter
        const matchesCategory = filters.category === 'All Types' || item.type.includes(filters.category) || (filters.category === 'JCB / Construction' && item.type === 'JCB');

        // Year Filter
        let matchesYear = true;
        if (filters.minYear === '2022 & Later') matchesYear = parseInt(item.year) >= 2022;
        if (filters.minYear === '2020 - 2022') matchesYear = parseInt(item.year) >= 2020 && parseInt(item.year) < 2022;
        if (filters.minYear === '2018 - 2020') matchesYear = parseInt(item.year) >= 2018 && parseInt(item.year) < 2020;
        if (filters.minYear === 'Older than 2018') matchesYear = parseInt(item.year) < 2018;

        // KM Filter
        let matchesKm = true;
        if (filters.maxKm !== 'Any') {
            const max = parseInt(filters.maxKm.replace(/[^0-9]/g, ''));
            matchesKm = item.km <= max;
        }

        return matchesSearch && matchesCategory && matchesYear && matchesKm;
    });

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const clearSearch = () => {
        router.push('/buy-sell');
        setFilters(prev => ({ ...prev, search: '' }));
    };

    return (
        <div className="container">
            <div className={styles.header}>
                <h1>{initialMode === 'buy' ? 'Used Commercial Vehicles' : 'Sell Your Vehicle'}</h1>
                <p>Mechanic verified trucks and equipment at fair prices.</p>

                {filters.search && (
                    <div style={{ marginTop: '10px', padding: '8px 16px', background: 'rgba(234, 179, 8, 0.1)', borderRadius: '8px', display: 'inline-block' }}>
                        Results for: <strong>"{filters.search}"</strong>
                        <button onClick={clearSearch} style={{ marginLeft: '10px', color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Clear ✕</button>
                    </div>
                )}
            </div>

            <div className={styles.layout}>
                <aside className={styles.filters}>
                    <h3>Filters</h3>

                    <div className={styles.filterGroup}>
                        <label>Category</label>
                        <select
                            className={styles.select}
                            value={filters.category}
                            onChange={(e) => handleFilterChange('category', e.target.value)}
                        >
                            <option>All Types</option>
                            <option>Truck</option>
                            <option>Tempo</option>
                            <option>JCB / Construction</option>
                        </select>
                    </div>

                    <div className={styles.filterGroup}>
                        <label>Price Range</label>
                        <input type="range" min="0" max="5000000" className={styles.range} />
                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Up to ₹50 Lakh</div>
                    </div>

                    <div className={styles.filterGroup}>
                        <label>Model Year</label>
                        <select
                            className={styles.select}
                            value={filters.minYear}
                            onChange={(e) => handleFilterChange('minYear', e.target.value)}
                        >
                            <option>Any Year</option>
                            <option>2022 & Later</option>
                            <option>2020 - 2022</option>
                            <option>2018 - 2020</option>
                            <option>Older than 2018</option>
                        </select>
                    </div>

                    <div className={styles.filterGroup}>
                        <label>Max KMs Driven</label>
                        <select
                            className={styles.select}
                            value={filters.maxKm}
                            onChange={(e) => handleFilterChange('maxKm', e.target.value)}
                        >
                            <option>Any</option>
                            <option>Under 20,000</option>
                            <option>Under 50,000</option>
                            <option>Under 100,000</option>
                        </select>
                    </div>

                    <button className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>Filters Active</button>
                    <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '0.8rem', color: '#94a3b8' }}>
                        Found {filteredListings.length} Vehicles
                    </div>
                </aside>

                <main className={styles.grid}>
                    {filteredListings.length > 0 ? (
                        filteredListings.map(item => (
                            <VehicleCard key={item.id} {...item} />
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8', gridColumn: '1 / -1' }}>
                            <h3>No vehicles found</h3>
                            <p>Try changing your filters or search term.</p>
                            <button onClick={() => setFilters({ search: '', category: 'All Types', minYear: 'Any Year', maxKm: 'Any' })} style={{ color: '#2563eb', marginTop: '10px', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}>Reset All Filters</button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

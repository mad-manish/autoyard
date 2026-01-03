'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Filter, X } from 'lucide-react';
import VehicleCard from '@/components/VehicleCard';
import styles from './page.module.css';

const MOCK_LISTINGS = [
    { id: 1, title: 'Tata Prima 3530.K', price: '45,00,000', location: 'Mumbai, MH', year: '2022', type: 'Truck', image: '/images/truck.png', certified: true, km: 45000 },
    { id: 2, title: 'Ashok Leyland Dost', price: '7,50,000', location: 'Pune, MH', year: '2019', type: 'Tempo', image: null, greatDeal: true, km: 60000 },
    { id: 3, title: 'Mahindra Bolero Pickup', price: '8,20,000', location: 'Delhi, DL', year: '2021', type: 'Pickup', image: null, km: 30000 },
    { id: 4, title: 'Eicher Pro 2049', price: '12,00,000', location: 'Bangalore, KA', year: '2020', type: 'Truck', image: null, certified: true, km: 55000 },
    { id: 5, title: 'Tata Ace Gold', price: '3,50,000', location: 'Chennai, TN', year: '2018', type: 'Tempo', image: null, km: 80000 },
    { id: 6, title: 'BharatBenz 1923C', price: '28,00,000', location: 'Jaipur, RJ', year: '2019', type: 'Tipper', image: null, km: 90000 },
    { id: 7, title: 'JCB 3DX Super', price: '32,00,000', location: 'Nagpur, MH', year: '2021', type: 'JCB', image: '/images/jcb.png', km: 2500 },
];

function BuySellContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const initialSearch = searchParams.get('search') || '';
    const initialMode = searchParams.get('mode') || 'buy';

    const [filters, setFilters] = useState({
        search: initialSearch,
        category: 'All Types',
        minYear: 'Any Year',
        maxKm: 'Any'
    });

    useEffect(() => {
        setFilters(prev => ({ ...prev, search: searchParams.get('search') || '' }));
    }, [searchParams]);

    const filteredListings = MOCK_LISTINGS.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            item.type.toLowerCase().includes(filters.search.toLowerCase());

        const matchesCategory = filters.category === 'All Types' ||
            item.type.includes(filters.category) ||
            (filters.category === 'JCB / Construction' && item.type === 'JCB');

        let matchesYear = true;
        if (filters.minYear === '2022 & Later') matchesYear = parseInt(item.year) >= 2022;
        if (filters.minYear === '2020 - 2022') matchesYear = parseInt(item.year) >= 2020 && parseInt(item.year) < 2022;
        if (filters.minYear === '2018 - 2020') matchesYear = parseInt(item.year) >= 2018 && parseInt(item.year) < 2020;
        if (filters.minYear === 'Older than 2018') matchesYear = parseInt(item.year) < 2018;

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
                <div>
                    <h1>{initialMode === 'buy' ? 'Used Marketplace' : 'Sell Your Vehicle'}</h1>
                    <p>Verified listings directly from owners.</p>
                </div>

                {filters.search && (
                    <button onClick={clearSearch} className={styles.clearBtn}>
                        <X size={16} />
                        Clear "{filters.search}"
                    </button>
                )}
            </div>

            <div className={styles.layout}>
                <aside className={styles.filters}>
                    <h3><Filter size={20} /> Filters</h3>

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
                            <option>Tipper</option>
                        </select>
                    </div>

                    <div className={styles.filterGroup}>
                        <label>Price Range</label>
                        <input type="range" min="0" max="5000000" className={styles.range} />
                        <div style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
                            <span>₹0</span>
                            <span>₹50L+</span>
                        </div>
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
                            <option>Under 20,000 km</option>
                            <option>Under 50,000 km</option>
                            <option>Under 100,000 km</option>
                        </select>
                    </div>
                </aside>

                <main className={styles.grid}>
                    {filteredListings.length > 0 ? (
                        filteredListings.map(item => (
                            <VehicleCard key={item.id} {...item} />
                        ))
                    ) : (
                        <div className={styles.emptyState}>
                            <h3>No vehicles found</h3>
                            <p>Try adjusting your search or filters.</p>
                            <button
                                onClick={() => setFilters({ search: '', category: 'All Types', minYear: 'Any Year', maxKm: 'Any' })}
                                style={{ marginTop: '16px', color: 'var(--accent-blue)', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}
                            >
                                Reset All Filters
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default function BuySell() {
    return (
        <Suspense fallback={<div className="container" style={{ padding: '40px' }}>Loading...</div>}>
            <BuySellContent />
        </Suspense>
    );
}

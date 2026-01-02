'use client';
// Mark as client component for interactivity
import { useState } from 'react';
import styles from './RentalCalendar.module.css';

export default function RentalCalendar() {
    const [selectedDates, setSelectedDates] = useState([]);

    const toggleDate = (day) => {
        if (selectedDates.includes(day)) {
            setSelectedDates(selectedDates.filter(d => d !== day));
        } else {
            setSelectedDates([...selectedDates, day]);
        }
    };

    const days = Array.from({ length: 30 }, (_, i) => i + 1);

    return (
        <div className={styles.calendar}>
            <h4>Select Availability</h4>
            <div className={styles.grid}>
                {days.map(day => (
                    <button
                        key={day}
                        className={`${styles.day} ${selectedDates.includes(day) ? styles.selected : ''}`}
                        onClick={() => toggleDate(day)}
                    >
                        {day}
                    </button>
                ))}
            </div>
            <p className={styles.hint}>Select dates to check price</p>
        </div>
    );
}

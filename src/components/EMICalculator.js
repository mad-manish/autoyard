'use client';

import { useState, useEffect } from 'react';
import styles from './EMICalculator.module.css';

export default function EMICalculator({ price }) {
    // Convert price string "45,00,000" to number
    const priceNum = parseInt(price.replace(/,/g, '')) || 0;

    const [downPayment, setDownPayment] = useState(priceNum * 0.2); // 20% default
    const [interestRate, setInterestRate] = useState(10.5); // 10.5% default
    const [tenure, setTenure] = useState(60); // 60 months default

    const loanAmount = priceNum - downPayment;

    // EMI Formula: [P x R x (1+R)^N]/[(1+R)^N-1]
    const calculateEMI = () => {
        const r = interestRate / 12 / 100;
        const emi = loanAmount * r * (Math.pow(1 + r, tenure) / (Math.pow(1 + r, tenure) - 1));
        return Math.round(emi).toLocaleString('en-IN');
    };

    return (
        <div className={styles.calculator}>
            <h3>💰 Monthly EMI Estimator</h3>
            <div className={styles.result}>
                <span className={styles.label}>Your Monthly Payment</span>
                <span className={styles.amount}>₹ {calculateEMI()}</span>
            </div>

            <div className={styles.sliderGroup}>
                <label>Down Payment: <strong>₹ {downPayment.toLocaleString()}</strong></label>
                <input
                    type="range"
                    min="0"
                    max={priceNum}
                    step="10000"
                    value={downPayment}
                    onChange={(e) => setDownPayment(parseInt(e.target.value))}
                    className={styles.slider}
                />
                <div className={styles.rangeLabels}>
                    <span>0%</span>
                    <span>100%</span>
                </div>
            </div>

            <div className={styles.sliderGroup}>
                <label>Loan Duration: <strong>{tenure} Months</strong></label>
                <input
                    type="range"
                    min="12"
                    max="84"
                    step="12"
                    value={tenure}
                    onChange={(e) => setTenure(parseInt(e.target.value))}
                    className={styles.slider}
                />
                <div className={styles.rangeLabels}>
                    <span>1 Year</span>
                    <span>7 Years</span>
                </div>
            </div>

            <button className={styles.applyBtn} onClick={() => alert("Application Sent to Partner Banks!")}>
                Get Loan Approval
            </button>
        </div>
    );
}

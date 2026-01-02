'use client';

import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
    en: {
        buySell: 'Buy & Sell',
        rent: 'Rent',
        admin: 'Admin',
        services: 'Services',
        login: 'Login',
        sellVehicle: 'Sell Vehicle',
        rentEquipment: 'Rent Equipment',
        listRent: 'List for Rent',
        heroTitle: "India's Trusted Commercial Vehicle Marketplace",
        heroSubtitle: "Buy, Sell, and Rent Trucks, Tempos, and Construction Equipment with complete peace of mind.",
        trusted: "Trusted",
        secure: "Secure",
        transparent: "Transparent",
        getLoan: "Get Loan / EMI",
        certified: "AutoYard Certified",
        greatDeal: "Great Deal",
        contactSeller: "Contact Seller",
        bookNow: "Book Now",
        needDriver: "Need Driver / Operator?",
        verifiedUser: "Verified User",
        escrow: "Escrow Protection",
    },
    hi: {
        buySell: 'खरीदें और बेचें',
        rent: 'किराये पर लें',
        admin: 'एडमिन',
        services: 'सेवाएं',
        login: 'लॉगिन',
        sellVehicle: 'गाड़ी बेचें',
        rentEquipment: 'मशीन किराये पर',
        listRent: 'किराये पर दें',
        heroTitle: "भारत का भरोसेमंद कमर्शियल वाहन मार्केटप्लेस",
        heroSubtitle: "ट्रक, टेम्पो और जेसीबी खरीदें, बेचें और किराये पर लें - पूरी सुरक्षा के साथ।",
        trusted: "भरोसेमंद",
        secure: "सुरक्षित",
        transparent: "पारदर्शी",
        getLoan: "लोन / ईएमआई प्राप्त करें",
        certified: "ऑटोयार्ड सर्टिफाइड",
        greatDeal: "बढ़िया डील",
        contactSeller: "सैलर से बात करें",
        bookNow: "अभी बुक करें",
        needDriver: "ड्राइवर / ऑपरेटर चाहिए?",
        verifiedUser: "वेरिफाइड यूजर",
        escrow: "एस्क्रो सुरक्षा",
    }
};

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('en');

    const t = (key) => translations[lang][key] || key;

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

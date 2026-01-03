import './globals.css';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import { LanguageProvider } from '../context/LanguageContext';
import SOSButton from '../components/SOSButton';

export const metadata = {
  title: 'AutoYard - Commercial Vehicle Marketplace',
  description: 'Buy, Sell, and Rent Trucks, JCBs, and Commercial Vehicles in India.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          <main style={{ paddingBottom: '80px' }}>{children}</main>
          <BottomNav />
          {/* <SOSButton /> */}
        </LanguageProvider>
      </body>
    </html>
  );
}

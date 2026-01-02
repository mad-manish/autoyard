import './globals.css';
import Navbar from '../components/Navbar';
import { LanguageProvider } from '../context/LanguageContext';
import SOSButton from '../components/SOSButton';

export const metadata = {
  title: 'AutoYard - Commercial Vehicle Marketplace',
  description: 'Buy, Sell, and Rent Commercial Vehicles in India with Trust.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <SOSButton />
        </LanguageProvider>
      </body>
    </html>
  );
}

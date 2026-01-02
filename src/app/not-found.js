import Link from 'next/link';
import Navbar from '../components/Navbar'; // Import Navbar explicitly for 404

export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>404 - Page Not Found</h2>
            <p style={{ marginBottom: '30px' }}>Could not find requested resource</p>
            <Link href="/" style={{
                background: '#eab308',
                color: 'black',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
            }}>
                Return Home
            </Link>
        </div>
    );
}

// components/Navbar.js

import Link from 'next/link';
import styles from './Navbar.module.css'; // Optional: For CSS styles

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/page1" className={styles.link}>Explore no Navigation</Link>
            <Link href="/page2" className={styles.link}>Explore with Navigation</Link>
            <Link href="/page3" className={styles.link}>Canvas</Link>
            <Link href="/page4" className={styles.link}>Explore with Row Policies</Link>
            <Link href="/page5" className={styles.link}>Passing Custom Attributes</Link>
        </nav>
    );
};

export default Navbar;

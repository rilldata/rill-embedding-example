import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (

    <nav className={styles.navbar}>
      <Link href="/" style={{ marginLeft: "-10px", fontWeight: 'bold', fontSize: '18px', textDecoration: 'none', color: "#3524c7" }}>
        Home
      </Link>
      <h3> Views</h3>
      <Link href="/views/simple-iframe" style={{ textDecoration: 'none', color: '#3524c7' }}>
        Embed Explore dashboard
      </Link>

      <h3> Navigation </h3>
      <Link href="/navigation/navigation-enabled" style={{ textDecoration: 'none', color: '#3524c7' }}>
        Embed with navigation
      </Link>
      <Link href="/navigation/pivot-disabled" style={{ textDecoration: 'none', color: '#3524c7' }}>
        No pivot embed dashboard
      </Link>

      <h3> Row Access Policies </h3>
      <Link href="/row-access-policy/row-access-policy" style={{ textDecoration: 'none', color: '#3524c7' }}>
        Row access policy enabled dashboard
      </Link>
      <Link href="/row-access-policy/custom-attributes" style={{ textDecoration: 'none', color: '#3524c7' }}>
        Passing custom attributes to metrics view
      </Link>


      <h3> Other </h3>
      <Link href="/other/no-data" style={{ textDecoration: 'none', color: '#3524c7' }}>
        Error loading embed dashboard
      </Link>

      <h3> Coming soon </h3>
      <Link href="/other/canvas" style={{ textDecoration: 'none', color: '#3524c7' }}>
        Canvas dashboard
      </Link>
      <Link href="/views/custom-view" style={{ textDecoration: 'none', color: '#3524c7' }}>
        Default views
      </Link>
      <Link href="/views/filtered-view" style={{ textDecoration: 'none', color: '#3524c7' }}>
        Initial filtered views
      </Link>

    </nav>
  );
}

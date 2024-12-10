import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (

<nav className={styles.navbar}>
    <h3>
    <Link href="/" style={{ textDecoration: 'none', color: '#3524c7' }}>
        Home
    </Link></h3>
    <h3> Views: </h3>
    <Link href="/views/simple-iframe" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Basic Embed Dashboard
    </Link>

      <Link href="/views/custom-view" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Default View (WIP)
      </Link>
      <Link href="/views/filtered-view" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Initial Filtered View (WIP)
        </Link>

      <h3> Navigation: </h3>
    <Link href="/navigation/navigation-enabled" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Embed with Navigation
    </Link>
    <Link href="/navigation/pivot-disabled" style={{ textDecoration: 'none', color: '#3524c7' }}>
        No Pivot Embed Dashboard
      </Link>

      <h3> Row Access Policies: </h3>
    <Link href="/row-access-policy/row-access-policy" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Row Access Policy Enabled Dashboard
    </Link>
    <Link href="/row-access-policy/custom-attributes" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Passing Custom Attributes to Metrics View
    </Link>


    <h3> Other: </h3>
  <Link href="/other/no-data" style={{ textDecoration: 'none', color: '#3524c7' }}>
    Error Loading Embed Dashboard
  </Link>

  <h3> Unavailable: </h3>
  <Link href="/other/canvas" style={{ textDecoration: 'none', color: '#3524c7' }}>
    Canvas Dashboard 
  </Link>
</nav>
  );
}

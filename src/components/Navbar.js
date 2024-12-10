import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const router = useRouter(); // Access the current route

  return (

<nav className={styles.navbar}>
    <h3>
    <a href="/" style={{ textDecoration: 'none', color: '#3524c7' }}>
        Home
    </a></h3>
    <h3> Views: </h3>
    <a href="/views/simple-iframe" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Basic Embed Dashboard
    </a>

      <a href="/views/custom-view" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Default View (WIP)
      </a>
      <a href="/views/filtered-view" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Initial Filtered View (WIP)
        </a>

      <h3> Navigation: </h3>
    <a href="/navigation/navigation-enabled" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Embed with Navigation
    </a>
    <a href="/navigation/pivot-disabled" style={{ textDecoration: 'none', color: '#3524c7' }}>
        No Pivot Embed Dashboard
      </a>

      <h3> Row Access Policies: </h3>
    <a href="/row-access-policy/row-access-policy" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Row Access Policy Enabled Dashboard
    </a>
    <a href="/row-access-policy/custom-attributes" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Passing Custom Attributes to Metrics View
    </a>


    <h3> Other: </h3>
  <a href="/other/no-data" style={{ textDecoration: 'none', color: '#3524c7' }}>
    Error Loading Embed Dashboard
  </a>

  <h3> Unavailable: </h3>
  <a href="/other/canvas" style={{ textDecoration: 'none', color: '#3524c7' }}>
    Canvas Dashboard 
  </a>
</nav>
  );
}

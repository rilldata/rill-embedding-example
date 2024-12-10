// src/components/Layout.js
import Navbar from './Navbar';
import Topbar from './Topbar';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Topbar />
      <div className={styles.content}>
        <Navbar />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}

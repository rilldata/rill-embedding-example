import Navbar from './Navbar';
import Topbar from './Topbar';
import styles from '../styles/Layout.module.css';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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

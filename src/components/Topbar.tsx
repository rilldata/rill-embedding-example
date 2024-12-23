import styles from '../styles/Topbar.module.css';

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className="logo">
        <h1>Rill Data Embed Examples</h1>
      </div>
      <p className="subtitle">Your guide to embedding Rill Data dashboards seamlessly</p>
    </header>
  );
}

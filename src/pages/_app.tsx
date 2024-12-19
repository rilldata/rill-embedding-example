// src/pages/_app.tsx
import '../styles/global.css';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

import Head from 'next/head';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  // State for loading the iframe URL
  const [isLoading, setLoading] = useState(true);
  const [iframeSrc, setIframeSrc] = useState('');
  const [error, setError] = useState('');

  // Fetch the iframe URL from the new backend route (nav-iframe.js)
  useEffect(() => {
    fetch(`/api/canvas-iframe`, { // Update the API route here
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(({ iframeSrc, error }) => {
        if (error !== undefined) {
          setError(error);
        } else {
          setIframeSrc(iframeSrc);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Render loading state
  if (isLoading) {
    return (
      <div className="container">
        <Navbar />
        <p>Loading...</p>
      </div>
    );
  };

  // Render error state
  if (error) {
    return (
      <div className="container">
        <Navbar />
        <p>Failed with error: {error}</p>
      </div>
    );
  };

  // Render the iframe
  return (
    <div className="container">
      <Navbar /> 
      <Head>
        <title>Rill Canvas Embedding Example</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; frame-src https://ui.rilldata.com; script-src https://ui.rilldata.com; style-src 'unsafe-inline'" />
      </Head>
      <h1>Canvas Dashboard</h1>
      <p>Not only can you embed our classic dashboards, we also allow the ability to embed Canvas Dashboards.</p>
      <h3>We are currently rebuilding this dashboard, come back soon for updates!</h3>
      <iframe className="iframe" allow="clipboard-read; clipboard-write" src={iframeSrc} />
    </div>
  );
}

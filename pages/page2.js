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
    fetch(`/api/nav-iframe`, { // Update the API route here
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
        <title>Rill Navigation Embedding Example</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; frame-src https://ui.rilldata.com; script-src https://ui.rilldata.com; style-src 'unsafe-inline'" />
      </Head>
      <h1>Rill Embedding with Navigation Enabled</h1>
      <p>This example demonstrates adding the navigate:true parameter to the iframe creation. Notice the Home / * in the top of the frame. Users can navigate to any of the dashboards that are available. If you want to limit the users, please review Explore with Row policies.</p>
      <iframe className="iframe" allow="clipboard-read; clipboard-write" src={iframeSrc} />
    </div>
  );
}

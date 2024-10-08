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
    fetch(`/api/rowpol-iframe`, { // Update the API route here
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
        <title>Rill Policy Embedding Example</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; frame-src https://ui.rilldata.com; script-src https://ui.rilldata.com; style-src 'unsafe-inline'" />
      </Head>
      <h1>Rill Dashboard with Dashboard Access Policies Enabled</h1>
      <p>As you begin to define row policies, you can use this logic in the iframe URL creation. Simply pass an user_id, user_email or attributes to define the access granted to the embed.</p>
      <p>In this example, we have a row policy that checks the already used user@domain.com's domain `domain.com` to filter only the Disney Pub Name.</p>
      <iframe className="iframe" allow="clipboard-read; clipboard-write" src={iframeSrc} />
    </div>
  );
}

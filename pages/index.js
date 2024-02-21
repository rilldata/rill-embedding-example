import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
  // State for loading the iframe URL
  const [isLoading, setLoading] = useState(true);
  const [iframeURL, setIframeURL] = useState('');
  const [error, setError] = useState('');

  // Fetch the iframe URL from our backend (see pages/api/iframe.js)
  useEffect(() => {
    fetch(`/api/iframe`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then(({ data }) => {
      setIframeURL(data.iframeSrc);
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
        <p>Loading...</p>
      </div>
    );
  };

  // Render error state
  if (error) {
    return (
      <div className="container">
        <p>Failed with error: {error}</p>
      </div>
    );
  };

  // Render the iframe
  return (
    <div className="container">
      <Head>
        <title>Rill Embedding Example</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; frame-src https://ui.rilldata.com; script-src https://ui.rilldata.com; style-src 'unsafe-inline'" />
      </Head>
      <h1>Rill Embedding Example</h1>
      <p>Below you will find an iframe that embeds a demo dashboard.</p>
      <iframe className="iframe" src={iframeURL} />
    </div>
  )
}

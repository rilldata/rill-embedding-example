import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Page1() {
  const [isLoading, setLoading] = useState(true);
  const [iframeSrc, setIframeSrc] = useState('');
  const [error, setError] = useState('');

  // Fetch the iframe URL from the backend
  useEffect(() => {
    fetch(`/api/view-iframe`, {
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
            const newIframeSrc = new URL(iframeSrc);

            // Correctly iterate over the object using Object.entries
            for (const [key, value] of Object.entries({
              tr: 'P6M',
              f: "author_name IN ('Alexey Milovidov')"
            })) {
              newIframeSrc.searchParams.set(key, value); // Set each query parameter
            }
            
            setIframeSrc(newIframeSrc.toString()); // Update the iframe source
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Function to update iframe URL parameters dynamically
  const updateIframeParams = (params) => {
    const newIframeSrc = new URL(iframeSrc);
    for (const [key, value] of Object.entries(params)) {
      newIframeSrc.searchParams.set(key, value);
    }
    setIframeSrc(newIframeSrc.toString());
  };

  // Render loading state
  if (isLoading) {
    return (
      <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f9f9f9' }}>
        <div style={{ flex: 1, padding: '20px' }}>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f9f9f9' }}>
        <div style={{ flex: 1, padding: '20px' }}>
          <p>Failed with error: {error}</p>
        </div>
      </div>
    );
  }

  // Render the iframe and buttons
  return (
    <div style={{ display: 'flex', height: '100%', backgroundColor: '#f9f9f9' }}>
      <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            marginBottom: '20px',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            padding: '10px',
            borderRadius: '8px',
          }}
        >
          <h1 style={{ margin: 0, fontSize: '2rem', color: '#333' }}>
            Modify the default view of your dashboard (Filters)
          </h1>
          <p>By modifying the URL of the iframe, you can set the default filters on your dashboard on load. Your users will be able to modify the filters afterwards. Upon refresh, will return to initial filtered state. 
            <br/>
             This feature is still in testing phase. Please contact us for more information.</p>
        </div>
        <div style={{ marginTop: '10px', marginBottom: '30px', textAlign: 'center' }}>
          <button
            onClick={() => updateIframeParams({ view: 'explore', tr: 'inf', f: "", compare_dim: "", compare_tr: ""})}>
            Remove Filters
          </button>

          <button
            onClick={() => updateIframeParams({ view: 'explore', tr: 'P3M', compare_dim: 'author_name', f: "author_name IN ('Alexey Milovidov', 'Robert Schulze', 'Max Kainov')" })}>
            Compare Authors!
          </button>

          <button
            onClick={() => updateIframeParams({ view: 'explore', tr: 'P3M', compare_tr: 'rill-PP', compare_dim: '', f: '',})}>
            Compare Time!
          </button>
        </div>
        <div
          style={{
            flex: 1,
            padding: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <iframe
            className="iframe"
            allow="clipboard-read; clipboard-write"
            src={iframeSrc}
            style={{
              width: '100%',
              height: '1000px',
              border: 'none',
            }}
          />
        </div>

        <div
          style={{
            marginTop: '20px',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'left',
          }}
        >
          <h3>Related Links:</h3>
          <a href="https://docs.rilldata.com/integrate/embedding">
            Embedding documentation
          </a>
          <br />
          <a href="https://github.com/rilldata/rill-embedding-example">
            iframe JS code
          </a>
          <br />
          <a href="https://ui.rilldata.com/demo/rill-openrtb-prog-ads/explore/bids_data_model_metrics_explore">
            Rill Dashboard
          </a>
          <br />
        </div>

        
      </div>
    </div>
  );
}

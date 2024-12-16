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
            tr: 'P12M',
            view: 'ttd',
            measure: 'total_line_changes',
            compare_dim: 'author_name',
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
            Modify the default view of your dashboard (Views)
          </h1>
          <p>By modifying the URL of the iframe, you can set the default view of your Explore dashboard to the Time Dimension Detail (TDD) view or pivot view.
            <br />
            This feature is still in development. Please contact us for more information.</p>

          <div style={{ marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>
            <button
              onClick={() => updateIframeParams({ tr: 'P3M', view: 'ttd', measure: 'total_line_changes', compare_dim: 'author_name' })}>
              TTD View
            </button>

            <button
              onClick={() => updateIframeParams({ tr: 'P3M', view: 'explore', measure: 'total_line_changes' })}>
              Explore View
            </button>

            <button
              onClick={() => updateIframeParams({ tr: 'P3M', view: 'pivot', rows: 'author_name', cols: 'total_line_changes', })}>
              Pivot View
            </button>
          </div>
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
          <a href="https://github.com/rilldata/rill-embedding-example/blob/main/src/pages/api/view-iframe.js">
            iframe code
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

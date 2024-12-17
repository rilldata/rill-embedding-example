import { useState, useEffect } from 'react';

export default function NavEnabledPage() {
  // State for loading the iframe URL
  const [isLoading, setLoading] = useState<boolean>(true);
  const [iframeSrc, setIframeSrc] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Fetch the iframe URL from our backend
  useEffect(() => {
    fetch(`/api/nav-iframe`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(({ iframeSrc, error }: { iframeSrc: string; error?: string }) => {
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

  // Render the iframe
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f9f9f9' }}>
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
          <h1 style={{ margin: 0, fontSize: '2rem', color: '#333' }}>Navigation enabled embed dashboard</h1>
          <p>
            When enabling navigation on your embed iframe, your users can navigate to other Explore dashboards. If you want to restrict the navigable Explore dashboards, you will need to also pass a user parameter and enable access policies on your metrics view.
            Please refer to our{' '}
            <a href="https://docs.rilldata.com/integrate/embedding">embedding documentation</a> and{' '}
            <a href="https://docs.rilldata.com/manage/security">dashboard access policies documentation</a>.
          </p>
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
              backgroundColor: '#ffffff',
              padding: '10px',
              borderRadius: '8px',
              textAlign: 'left',
            }}
          >
            <h3>Related Links:</h3>
            <a href="https://docs.rilldata.com/integrate/embedding">Embedding documentation</a> <br />
            <a href="https://github.com/rilldata/rill-embedding-example/blob/main/src/pages/api/nav-iframe.js">
              iframe code
            </a>{' '}
            <br />
            <a href="https://ui.rilldata.com/demo/rill-openrtb-prog-ads/explore/auction_data_model_metrics_explore">
              Rill Dashboard
            </a>{' '}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

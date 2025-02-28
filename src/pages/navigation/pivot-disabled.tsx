import { useState, useEffect } from 'react';

export default function PivotDisabledPage() {
  // State for loading the iframe URL
  const [isLoading, setLoading] = useState<boolean>(true);
  const [iframeSrc, setIframeSrc] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Fetch the iframe URL from our backend (see pages/api/iframe.js)
  useEffect(() => {
    fetch(`/api/pivot-disabled-iframe`, {
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
      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column' }}>
        {/* Title Banner */}
        <div
          style={{
            marginBottom: '20px',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            padding: '10px',
            borderRadius: '8px',
          }}
        >
          <h1 style={{ margin: 0, fontSize: '2rem', color: '#333' }}>Pivot view disabled dashboard</h1>
          <p>
            It is possible to disable the pivot table on an explore dashboard. You will need to enable the following parameter on the explore dashboard.

            Please see <a href='https://github.com/rilldata/rill-examples/blob/main/rill-openrtb-prog-ads/dashboards/pivot_disabled.yaml'> an example explore dashboard </a> from our demo project.

            <code>{`
embeds:
    hide_pivot: true 
        `}</code>

          </p>
          {/* Page Content */}
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
              textAlign: 'left'
            }}
          >
          </div>
        </div>


      </div>
    </div>
  );
};

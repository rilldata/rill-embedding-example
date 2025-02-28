
import { useState, useEffect } from 'react';

export default function CustomAttributes() {
  // State for loading the iframe URL
  const [isLoading, setLoading] = useState<boolean>(true);
  const [iframeSrc, setIframeSrc] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Fetch the iframe URL from our backend (see pages/api/iframe.js)
  useEffect(() => {
    fetch(`/api/custom-attribute-iframe`, {
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
          <h1 style={{ margin: 0, fontSize: '2rem', color: '#333' }}>Passing custom attributes to your embed dashboard</h1>
          <p>
            Along with the out of box parameters, it is possible to send custom attributes to use directly in your metric views row access policy.
            Please refer to our <a href='https://docs.rilldata.com/integrate/embedding'> embedding documentation</a> for more information.
          </p>

          <code>{`
#Passing attributes into the iframe creation request
body: JSON.stringify({
                resource: rillDashboard,
                attributes: {
                    "app_site_name": "FuboTV", 
                    "pub_name": "Taboola"
                }
                // You can pass additional parameters for row-level security policies here.
                // For details, see: https://docs.rilldata.com/integrate/embedding
            }),

#Using the custom attribute in the row filter directly.
security:
  access: true
    row_filter: >
        app_site_name = '{{ .user.app_site_name }}' AND
        pub_name = '{{ .user.pub_name }}' 

`}

          </code>
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

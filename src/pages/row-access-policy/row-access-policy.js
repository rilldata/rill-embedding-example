
import { useState, useEffect } from 'react';

export default function Page1() {
  // State for loading the iframe URL
  const [isLoading, setLoading] = useState(true);
  const [iframeSrc, setIframeSrc] = useState('');
  const [error, setError] = useState('');

  // Fetch the iframe URL from our backend (see pages/api/iframe.js)
  useEffect(() => {
    fetch(`/api/rowpol-iframe`, {
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
          <h1 style={{ margin: 0, fontSize: '2rem', color: '#333' }}>Row Access Policy Embed Dashboard</h1>
        <p>
        This is an example of a dashboard with row access policies enabled. When creating the embed URL we pass the following email `test@domain.com` which is recognized at the metrics view to filter the Pub Name dimension to Disney. Depending on your use case, you can pass `user_id`, `user_email`, `user_domain`, or attributes.
        
        </p>
        <code>{`
#Passing the user_email into the iframe creation request
body: JSON.stringify({
    resource: rillDashboard,
    user_email: 'test@domain.com',
    // You can pass additional parameters for row-level security policies here.
    // For details, see: https://docs.rilldata.com/integrate/embedding
}),
#Using the domain of the user to filter the rows based off a mapping table.
security:
    access: true
    row_filter: "Pub_Name IN (SELECT PubName FROM mapping WHERE domain = '{{ .user.domain }}')"

#Sample mapping table that maps domain.com to Disney which is used in the row access policy.
SELECT * FROM (VALUES 
      ('Disney', 'domain.com')
    ) AS t(PubName, domain)   
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
            textAlign: 'center',
            backgroundColor: '#ffffff',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'left'
          }}
        >
        <h3> Related Links: </h3>
        <a href= 'https://docs.rilldata.com/integrate/embedding'> Embedding documentation</a> <br/>
        <a href= 'https://docs.rilldata.com/integrate/security'> Dashboard Access Policy documentation</a> <br/>
        <a href= 'https://github.com/rilldata/rill-embedding-example/blob/main/src/pages/api/rowpol-iframe.js'> iframe JS code</a> <br/>
        <a href= 'https://ui.rilldata.com/demo/rill-openrtb-prog-ads/explore/auction_data_model_metrics_explore_row_policies'> Rill Dashboard</a> <br/>
      </div>
        
      </div>
        
      </div>
    </div>
  );
};

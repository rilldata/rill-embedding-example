import { useState, useEffect } from 'react';

export default function FilteredViewPage() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [iframeSrc, setIframeSrc] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Fetch the iframe URL from the backend
  useEffect(() => {
    fetch(`/api/view-iframe`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(({ iframeSrc, error }: { iframeSrc: string; error?: string }) => {
        if (error) {
          setError(error);
        } else {
          const newIframeSrc = new URL(iframeSrc);

          // Set default query parameters
          Object.entries({
            tr: 'P7D',
            f: "device_state IN ('NY')",
          }).forEach(([key, value]) => newIframeSrc.searchParams.set(key, value));

          setIframeSrc(newIframeSrc.toString());
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Function to update iframe URL parameters dynamically
  const updateIframeParams = (params: Record<string, string>) => {
    const newIframeSrc = new URL(iframeSrc);
    Object.entries(params).forEach(([key, value]) => {
      newIframeSrc.searchParams.set(key, value);
    });
    setIframeSrc(newIframeSrc.toString());
  };

  // Loading state
  if (isLoading) {
    return (
      <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f9f9f9' }}>
        <div style={{ flex: 1, padding: '20px' }}>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Error state
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
        {/* Header */}
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
          <p>
            By modifying the URL of the iframe, you can set the default filters on your dashboard on load. Your users will be able to modify the filters afterwards. Upon refresh, it will return to the initial filtered state.
            <br />
            This feature is still in development. Please contact us for more information.
          </p>
        </div>

        {/* Buttons */}
        <div style={{ marginTop: '10px', marginBottom: '30px', textAlign: 'center' }}>
          <button
            onClick={() => updateIframeParams({ view: 'explore', tr: 'PT24H', f: '', compare_dim: '', compare_tr: '' })}
          >
            Remove Filters
          </button>
          <button
            onClick={() => updateIframeParams({ view: 'explore', tr: 'PT24H', compare_dim: 'pub_name', f: "pub_name IN ('Disney', 'Pluto TV', 'LG USA')", })}
          >
            Compare Publishers!
          </button>
          <button
            onClick={() => updateIframeParams({ view: 'explore', tr: 'PT24H', compare_tr: 'rill-PD', compare_dim: '', f: '', })}
          >
            Compare Time!
          </button>
        </div>

        {/* Iframe */}
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

        {/* Related Links */}
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
          <a href="https://docs.rilldata.com/integrate/embedding">Embedding documentation</a>
          <br />
          <a href="https://github.com/rilldata/rill-embedding-example/blob/main/src/pages/api/view-iframe.js">
            iframe code
          </a>
          <br />
          <a href="https://ui.rilldata.com/demo/rill-openrtb-prog-ads/explore/bids_explore">
            Rill Dashboard
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}

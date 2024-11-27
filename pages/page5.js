import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Page1() {
  // State for loading the iframe URL
  const [isLoading, setLoading] = useState(true);
  const [iframeSrc, setIframeSrc] = useState('');
  const [error, setError] = useState('');
  const [isHidden, setIsHidden] = useState(true); // State to toggle visibility

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  // Fetch the iframe URL from our backend (see pages/api/iframe.js)
  useEffect(() => {
    fetch(`/api/iframe-attributes`, {
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
        <LeftSideNav />
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
        <LeftSideNav />
        <div style={{ flex: 1, padding: '20px' }}>
          <p>Failed with error: {error}</p>
        </div>
      </div>
    );
  }

  // Render the iframe
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f9f9f9' }}>
      {/* Left-Side Navigation */}
      <LeftSideNav />

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
          <h1 style={{ margin: 0, fontSize: '2rem', color: '#333' }}>Row Access Policy with Custom Attributes Embed Dashboard</h1>
          <p style={{ fontSize: '1rem', color: '#666' }}>Similar to `Row Access policy Embed Dashboard`, we can also pass custom attributes via the embed URL creation process. In this case, you will need to use a JSON object called attributes to pass these into Rill. Similarly, Rill at the metrics view will be able to filter to dashboard based on your defined row access policy .</p>
          <button
              onClick={toggleHidden}
              style={{
                padding: '10px 15px',
                backgroundColor: '#3524c7',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginBottom: '10px',
              }}
            >
        {isHidden ? 'Show More Details' : 'Hide Details'}
      </button>



{/* Section that can be toggled */}
{!isHidden && (
        <div>
          <p style={{ fontSize: '1rem', color: '#666' }}>URL embed contents</p>
          <pre
            style={{
              backgroundColor: '#f4f4f4',
              padding: '10px',
              borderRadius: '5px',
              overflowX: 'auto',
              textAlign: 'left',
              margin: '20px 0',
            }}
          >
            
            <code>
              {`body: JSON.stringify({
                resource: rillDashboard,
                attributes: {
                    "custom_attribute_from_embed": "Value1",
                    "embed_pub_name": "Disney"
                }
                // You can pass additional parameters for row-level security policies here.
                // For details, see: https://docs.rilldata.com/integrate/embedding
            }),`}
            </code>
          </pre>

          <p style={{ fontSize: '1rem', color: '#666' }}>Rill Metric view</p>

          <pre
            style={{
              backgroundColor: '#f4f4f4',
              padding: '10px',
              borderRadius: '5px',
              overflowX: 'auto',
              textAlign: 'left',
              margin: '20px 0',
            }}
          >
            <code>
              {`security:
  access: true
  row_filter: "Pub_Name = '{{ .user.embed_pub_name }}'"

  #row_filter: "Pub_Name IN (SELECT PubName FROM test WHERE custom_attribute = '{{ .user.custom_attribute_from_embed }}')"


`}
            </code>
          </pre>

    
          </div>
      )}
        </div>

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
              height: '800px',
              border: 'none',
            }}
          />
        </div>
      </div>
      <div>
      </div>
        
      </div>
  );
}

// Left-Side Navigation Component
function LeftSideNav() {
  return (
    <div
      style={{
        width: '300px',
        borderRight: '1px solid #ddd',
        padding: '20px',
        backgroundColor: '#F8F8F8',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
      <Link href="/">
            <img src='/img/rill logo indigo.png'
                 style={{
              width: '75px',
              height: 'auto',
            }}/>
          </Link>
      </h2>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Link href="/page1" style={{ textDecoration: 'none', color: '#3524c7' }}>
          Basic Embed Example
        </Link>
        <Link href="/page2" style={{ textDecoration: 'none', color: '#3524c7' }}>
          Embed with Navigation
        </Link>
        <Link href="/page3" style={{ textDecoration: 'none', color: '#3524c7' }}>
          Canvas Dashboard (WIP)
        </Link>
        <Link href="/page4" style={{ textDecoration: 'none', color: '#3524c7' }}>
          Row Access Policy Enabled Dashboard
        </Link>
        <Link href="/page5" style={{ textDecoration: 'none', color: '#3524c7' }}>
          Passing Custom Attributes via the Embed URL creation
        </Link>
      </nav>
    </div>
  );
}

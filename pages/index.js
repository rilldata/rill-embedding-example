import Head from 'next/head';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link'; // Import Link from Next.js

export default function Home() {
  useEffect(() => {
    // Any additional setup can go here
  }, []);

  return (
    <div className="splash-container">
      <Head>
        <title>Rill Data Embed Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="splash-header">
        <h1>Welcome to Rill Data Embed Examples</h1>
        <p>Your guide to embedding Rill Data dashboards seamlessly.</p>
        <p> For more information, please see our <a target="_blank" href='https://github.com/rilldata/rill-embedding-example?tab=readme-ov-file'>GitHub repository</a> and our <a href='https://docs.rilldata.com/integrate/embedding' target="_blank">Documentations page.</a></p>
      </div>
      <div className="use-cases">
        <a href="/page1" className="use-case">
          <div className="use-case-content">
            <h2>1. Basic Embedding</h2>
            <p> <br/>
              In this example, we demonstrate how to embed Rill Data dashboards
              directly into your application. This allows users to access 
              interactive data visualizations without navigating away from your site. <br/><br/>

Take a look at the pages/api/iframe.js
            </p>
          </div>
        </a>
        <a href="/page2" className="use-case">
          <div className="use-case-content">
            <h2>2. Embedding with Navigation</h2>
            <p> <br/>
              This use case showcases how to incorporate navigation within the 
              embedded Rill Data dashboards, enhancing user experience by allowing 
              easy switching between different views and data sets. <br/><br/>

              Take a look at the pages/api/nav-iframe.js
            </p>
          </div>
        </a>
        <a href="/page3" className="use-case">
          <div className="use-case-content">
            <h2>3. Canvas Dashboard</h2>
            <p> <br/>
              Explore the capabilities of the Canvas Dashboard, where users can 
              create custom visualizations and dashboards tailored to their specific 
              data analysis needs. <br/><br/>

Take a look at the pages/api/canvas-iframe.js
            </p>
          </div>
        </a>
        <a href="/page4" className="use-case">
          <div className="use-case-content">
            <h2>4. Dashboard Access Policy Enabled Dashboard</h2>
            <p> <br/>
              See row policies in Action! In this example 'normal embed use case', 
              we pass an email in the iframe creation request to a dashboard
              that has row policies enabled. <br/> No measures will be displayed based on the
              rule defined in Rill! <br/><br/>

Take a look at the pages/api/rowpol-iframe.js
            </p>
          </div>
        </a>
      </div>
      <style jsx>{`
        .splash-container {
          text-align: center;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .splash-header {
          margin-bottom: 40px;
        }
        h1 {
          font-size: 2.5rem;
          color: #333;
        }
        p {
          font-size: 1.2rem;
          color: #666;
        }
        .use-cases {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          width: 100%; /* Full width of the container */
        }
        .use-case {
          display: block; /* Make it block to occupy full width */
          width: 100%; /* Full width for the link */
          text-decoration: none; /* Remove underline */
          color: inherit; /* Inherit text color */
        }
        .use-case-content {
          background: white;
          height: 200px;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Shadow effect */
          transition: transform 0.2s; /* Animation effect */
          max-width: 800px; /* Set max width for the box */
          width: 100%; /* Ensure it takes full width */
          margin: 0 auto; /* Center the box */
        }
        .use-case-content h2, 
        .use-case-content p {
          margin: 0; /* Remove default margins */
          text-decoration: none; /* Ensure no underlines */
        }
        .use-case:hover .use-case-content {
          transform: scale(1.02); /* Slightly scale up on hover */
        }
        h2 {
          color: #0070f3;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

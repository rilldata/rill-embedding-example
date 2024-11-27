import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f9f9f9' }}>
      {/* Left-Side Navigation */}
      <div
        style={{
          width: '300px',
          borderRight: '1px solid #ddd', /* Adjust for left-side navigation */
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
          <Link href="/page6" style={{ textDecoration: 'none', color: '#3524c7' }}>
          No Pivot Embed Dashboard
        </Link>
        </nav>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column' }}>
        {/* Title Banner */}
        <div style={{ marginBottom: '20px', textAlign: 'center', backgroundColor: '#ffffff', padding: '10px', borderRadius: '8px' }}>
          <h1 style={{ margin: 0, fontSize: '2rem', color: '#333' }}>Rill Data Embed Examples</h1>
          <p style={{ fontSize: '1rem', color: '#666' }}>Your guide to embedding Rill Data dashboards seamlessly.</p>
        </div>

        {/* Page Content */}
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
          <h2>Please select a page in the Navigation Bar for an example of each type of Embed Dashboard.</h2>
<br/>
          <a href='/page1'> <b>Basic Rill Dashboard</b></a>:  A simple embed Rill dashboard example. <br/><br/>
          <a href='/page2'> <b> Embed Dashbaord with Navigation</b></a>:  A Rill Embedded dashboard with navigation to other dashboards and project view.      <br/><br/>
          <a href='/page3'> <b> Canvas Dashboard - Current unavailable</b></a>:  We are re-working Canvas Dashboards and will be available soon!    <br/><br/>
          <a href='/page4'> <b> Row Access Policy Dashboard</b></a>:  Using default available parameters to pass to Rill during URL creation to filter row/columns/access    <br/><br/>
          <a href='/page5'> <b> Row Access Policy Dashboard with Custom Attributes</b></a>:  Embed Dashboards allow for custom attributes to be passed during the URL creation process.    <br/><br/>
          <a href='/page6'> <b> Pivot Disabled Embed Dashboard</b></a>:  Embed Dashboards that disabled pivot view.   <br/><br/>

          <h3> Coming soon:</h3>
          
          <p> Human Readable URL State to pass during URL creation</p>


        </div>
      </div>
    </div>
  );
}

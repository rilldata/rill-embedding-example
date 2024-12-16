import Link from 'next/link';
// src/pages/index.js
export default function Home() {
  return <div style={{ flex: 1, padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', height: '100%' }}>
    <p> In each of the following pages, you can navigate the corresponding `src/pages/api` in the <Link href='https://github.com/rilldata/rill-embedding-example'> GitHub repository </Link> for the equivalent iframe request. In some cases, you will need to pass extra parameters to Rill in order
      to support the feature. (IE: Navigation and Row Access Policies)
    </p>
    <h3>Views:</h3>
    <Link href="/views/simple-iframe" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Embed Explore dashboard
    </Link>
    : An embed dashboard that defaults to the Explore page view. Navigation to other types of views allowed.
    <br /><br />



    <h3>Navigation:</h3>
    <Link href="/navigation/navigation-enabled" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Embed with navigation
    </Link>
    : Navigation to other dashboards outside of the requested dashboard is enabled. See the top of the embed iframe.
    < br /><br />
    <Link href="/navigation/pivot-disabled" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Pivot disabled dashboard
    </Link>
    : Adding a few lines to your dashboard allows you to disable the pivot view from your viewers. Please refer to the < Link href='https://github.com/rilldata/rill-examples/blob/main/rill-openrtb-prog-ads/dashboards/pivot_disabled.yaml' > Explore dashboard YAML file.  </Link >
    <br /><br />


    <h3>Row Access Policies:</h3>
    <Link href="/row-access-policy/row-access-policy" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Row access policy enabled dashboard
    </Link>
    : Basic row access policy dashboard using a dimension mapping file. Please refer to our <Link href='https://docs.rilldata.com/integrate/embedding'> embedding documentation. </Link>
    <br /><br />
    <Link href="/row-access-policy/custom-attributes" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Passing custom attributes via the embed URL creation
    </Link>
    : Pass the `attributes` parameter in a iframe request to utilize custom variables in your row access policies . Please refer to our < Link href='https://docs.rilldata.com/integrate/embedding' > embedding documentation. </Link >
    <br /><br />


    <h3>Other:</h3>
    <Link href="/other/no-data" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Error loading embed dashboard
    </Link>
    : When no rows are returned due to the access policies defined, users will see this view.

    < br /><br />
    <h3>Coming soon:</h3>
    <Link href="/other/canvas" style={{ textDecoration: 'none', color: '#3524c7' }}> Canvas dashboard
    </Link>
    : Embed your Rill canvas dashboard!
    < br /><br />
    <Link href="/views/custom-view" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Default dashbord views
    </Link>
    : Create an embed dashboard with a default view defined! Pivot, TDD or Explore.
    <br /><br />
    <Link href="/views/filtered-view" style={{ textDecoration: 'none', color: '#3524c7' }}>
      Initial filtered dashboard views
    </Link>
    : Embed a dashboard with default filters enabled. Your users can modify the dashboard but a refresh will return back to your filtered view.
    <br /><br />

    <p> For information on these features, reach out to us at  <a href="mailto:contact@rilldata.com?subject=Inquiry%20about%20embed%20dashboards&body=Hello%20Rill%20Team,">  support@rilldata.com</a>. </p>

  </div >


}



import Link from 'next/link';
// src/pages/index.js
export default function Home() {
    return  <div style={{ flex: 1, padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', height: '100%' }}>
  <p> In each of the following pages, you can navigate the corresponding `route/page-name` in the <Link href ='https://github.com/rilldata/rill-embedding-example'> GitHub repository </Link> for the equivalent iframe request. In some cases, you will need to pass extra parameters to Rill in order 
      to support the feature. (IE: Navigation and Row Access Policies) 
  </p>
      <h3>Views:</h3>
      <Link href="/simple-iframe" style={{ textDecoration: 'none', color: '#3524c7' }}>
        Embed Explore view
      </Link>
      : An embed dashboard that defaults to the Explore page view. Navigation to other types of views allowed.
      <br/><br/>
      <Link href="/views/custom-view" style={{ textDecoration: 'none', color: '#3524c7' }}>
        Default Explore View (WIP)
        </Link>
      : An embed dashboard that defaults to the Time Dimension Detail page view. Navigation to other types of views allowed. This feature is still in testing. Contact us for more information!
      <br/><br/>
        <Link href="/error-loading-data" style={{ textDecoration: 'none', color: '#3524c7' }}>
          Initial Filtered View (WIP)
        </Link>
        : Apply default filters to a dashboard on first load. Users can modify the filters but will reset on refresh. Please refer to our <Link href= 'https://docs.rilldata.com/integrate/embedding'> embedding documentation. </Link> This feature is still in testing. Contact us for more information!
        <br/><br/>
  
  
        <h3>Navigation:</h3>
      <Link href="/navigation-iframe" style={{ textDecoration: 'none', color: '#3524c7' }}>
        Embed with Navigation
      </Link>
      : Navigation to other dashboards outside of the requested dashboard is enabled. See the top of the embed iframe.
      <br/><br/>
      <Link href="/disabled-pivot-view" style={{ textDecoration: 'none', color: '#3524c7' }}>
          Pivot Disabled Dashboard
        </Link>
        : Adding a few lines to your dashboard allows you to disable the pivot view from your viewers. Please refer to the <Link href= 'https://github.com/rilldata/rill-examples/blob/main/rill-openrtb-prog-ads/dashboards/pivot_disabled.yaml'> explore dashboard YAML file.  </Link>
        <br/><br/>
  
  
        <h3>Row Access Policies:</h3>
      <Link href="/row-access-policy-embed" style={{ textDecoration: 'none', color: '#3524c7' }}>
        Row Access Policy Enabled Dashboard
      </Link>
      : Basic Row Access Policy Dashboard using a dimension mapping file. Please refer to our <Link href= 'https://docs.rilldata.com/integrate/embedding'> embedding documentation. </Link>
      <br/><br/>
      <Link href="/custom-attributes-embed" style={{ textDecoration: 'none', color: '#3524c7' }}>
        Passing Custom Attributes via the Embed URL creation
      </Link>
      : Using Custom Attributes in iframe request to pass to row access policies, (attributes). Please refer to our <Link href= 'https://docs.rilldata.com/integrate/embedding'> embedding documentation. </Link>
      <br/><br/>
  
  
      <h3>Other:</h3>
      <Link href="/error-loading-data" style={{ textDecoration: 'none', color: '#3524c7' }}>
          Error Loading Embed Dashboard
      </Link>
      : When no rows are returned due to the access policies defined. Users will see this view.
  
      <br/><br/>
      <h3>Unavailable:</h3>
      <Link href="/canvas-dashboard" style={{ textDecoration: 'none', color: '#3524c7' }}>
          Canvas Dashboard (WIP)
      </Link>
      : As we are rebuilding this feature, it is currently not available.
  
  
      </div>


  }
  
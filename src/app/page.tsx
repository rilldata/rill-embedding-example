const Home = () => {
  return (
    <div className="max-w-4xl p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Rill Embedding Examples</h2>
      <p className="text-gray-600 mb-6">
        In each of the following pages, you can navigate the corresponding
        <code className="bg-gray-100 text-gray-800 px-1 rounded">src/app/[page]</code> in the{' '}
        <a
          href="https://github.com/rilldata/rill-embedding-example"
          className="text-indigo-600 underline"
        >
          GitHub repository
        </a>{' '}
        for the equivalent iframe request. In some cases, you will need to pass extra parameters to Rill in order to
        support a specific feature such as Navigation and Row Access Policies.
      </p>
      <p className="text-grey-600 mb-6">
        The actual iframe request issued on the server can be found at <a href="" className="text-indigo-600 underline">this location</a>
      </p>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Views</h3>
        <ul className="space-y-4">
          <li>
            <a
              href="/views/custom-view"
              className="text-indigo-600 underline"
            >
              Embed Explore dashboard
            </a>
            : An embed dashboard that defaults to the Explore page view. Navigation to other types of views is allowed.
          </li>
          {/* <li>
            <a
              href="/views/simple-iframe"
              className="text-indigo-600 underline"
            >
              Custom View Explore dashboard
            </a>
            : An embed dashboard that uses the API get_state and set_state to create different views.
          </li> */}
          <li>
            <a
              href="/views/canvas"
              className="text-indigo-600 underline"
            >
              Canvas dashboard
            </a>
            : An embedded Canvas dashboard!
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Navigation</h3>
        <ul className="space-y-4">
          <li>
            <a
              href="/navigation/navigation-enabled"
              className="text-indigo-600 underline"
            >
              Embed with navigation
            </a>
            : Navigation to other dashboards outside of the requested dashboard is enabled. See the top of the embed iframe.
          </li>
          <li>
            <a
              href="/navigation/pivot-disabled"
              className="text-indigo-600 underline"
            >
              Pivot disabled dashboard
            </a>
            : Adding a few lines to your dashboard allows you to disable the pivot view from your viewers. Please refer to the{' '}
            <a
              href="https://github.com/rilldata/rill-examples/blob/main/rill-openrtb-prog-ads/dashboards/pivot_disabled.yaml"
              className="text-indigo-600 underline"
            >
              Explore dashboard yaml file
            </a>.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Row Access Policies</h3>
        <ul className="space-y-4">
          <li>
            <a
              href="/rowaccesspolicy/basic"
              className="text-indigo-600 underline"
            >
              Row access policy enabled dashboard
            </a>
            : Basic row access policy dashboard using a dimension mapping file. Please refer to our{' '}
            <a
              href="https://docs.rilldata.com/integrate/embedding"
              className="text-indigo-600 underline"
            >
              embedding documentation
            </a>.
          </li>
          <li>
            <a
              href="/rowaccesspolicy/custom"
              className="text-indigo-600 underline"
            >
              Passing custom attributes via the embed URL creation
            </a>
            : Pass the <code className="bg-gray-100 text-gray-800 px-1 rounded">attributes</code> parameter in an iframe request to utilize custom variables in your row access policies. Please refer to our{' '}
            <a
              href="https://docs.rilldata.com/integrate/embedding"
              className="text-indigo-600 underline"
            >
              embedding documentation
            </a>.
          </li>
        </ul>
      </div>



      <p className="text-gray-600">
        For information on these features, reach out to us at{' '}
        <a
          href="mailto:support@rilldata.com?subject=Inquiry%20about%20embed%20dashboards&body=Hello%20Rill%20Team,"
          className="text-indigo-600 underline"
        >
          support@rilldata.com
        </a>.
      </p>
    </div>

  );
};

export default Home;

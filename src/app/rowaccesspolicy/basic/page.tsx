import IframeFetcher from '../../components/IframeFetcher';

const SimpleIframe = () => {
    const org = 'demo';
    const project = 'rill-embed';
    const iframeBody = {
        resource: 'auction_basic_access_policy_metrics_explore',
        user_email: "user@fubo.tv",
    };

    return (
        <div className="p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Basic Row Access Policy  dashboard</h2>
            <p className="text-gray-600 mb-6">
                If you are embedding a dashboard with row access policies enabled, you can send attributes in the iframeBody to create a dashboard with a specific view.                 This is considered a basic example as there is a column that is mapped to one of the default user attributes. However, some dashboards may require more complex mappings, and you can achieve that by using custom attributes.

                Please see <a className="text-indigo-600 underline hover:text-indigo-800" href='https://github.com/rilldata/rill-examples/blob/3516d3d144979d23ceded2a1a72efcbddd452800/rill-embed/metrics/auction_basic_access_policy_metrics.yaml#L13C53-L14C1'> an example metrics view</a> from our demo project, rill-row-access-policies.
            </p>

            <div className="mb-8">
                <IframeFetcher org={org} project={project} body={iframeBody}>
                </IframeFetcher>
            </div>
            <p>
                In this example, a user logs into your application with the email <em>user@fubo.tv</em>. Based on the defined row access policy, we are mapping domain of user_email to <em>App Site Domain</em> dimension. Note that the display_name and name of the dimension are not always the same.
                When you pass the user_email attribute to the iframe, the dashboard will display the metrics for the users email domain. The user will not be able to see data for other domains. You can also completely remove the column <em>App Site Domain</em> from the dashboard, using further metrics policies.
                <br /><br />

            </p>
            <img
                src="/images/email-domain-metrics.png"
                alt="Basic Row Access Policy Metrics"
                className="rounded-xl shadow-lg max-w-full h-auto my-4"
            />

            <h3 className="text-lg font-semibold text-gray-700 mb-4">Related Links:</h3>
            <ul className="space-y-2">
                <li>
                    <a
                        href="https://docs.rilldata.com/integrate/embedding"
                        className="text-indigo-600 underline hover:text-indigo-800"
                    >
                        Embedding Documentation
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/rilldata/rill-embedding-example/blob/main/src/app/api/get-iframe/route.tsx"
                        className="text-indigo-600 underline hover:text-indigo-800"
                    >
                        Iframe Code
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/rilldata/rill-examples/blob/main/rill-embed/metrics/auction_basic_access_policy_metrics.yaml"
                        className="text-indigo-600 underline hover:text-indigo-800"
                    >
                        Rill Metrics YAML
                    </a>
                </li>
            </ul>
        </div>

    );
};

export default SimpleIframe;

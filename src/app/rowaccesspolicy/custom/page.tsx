import IframeFetcher from '../../components/IframeFetcher';

const SimpleIframe = () => {
    const org = 'demo';
    const project = 'rill-embed';
    const iframeBody = {
        resource: 'auction_custom_access_policy_metrics_explore',
        attributes: {
            app_site_name: "Sling",
            pub_name: "MobilityWare"
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Custom Attributes Dashboard</h2>
            <p className="text-gray-600 mb-6">
                If you are embedding a dashboard with row access policies enabled, you can send attributes in the iframeBody under attributes to create a dashboard with a specific view.
                Please see <a className="text-indigo-600 underline hover:text-indigo-800" href='https://github.com/rilldata/rill-examples/blob/3516d3d144979d23ceded2a1a72efcbddd452800/rill-embed/metrics/auction_custom_access_policy_metrics.yaml#L13'> an example metrics view</a> from our demo project, rill-row-access-policies.
            </p>


            <div className="mb-8">
                <IframeFetcher org={org} project={project} body={iframeBody}>
                </IframeFetcher>
            </div>
            <p>
                Unlike in the basic example, where we are using a default user attribute, here we are using custom attributes.
                In this example, we are passing <em>app_site_name = Sling</em> and <em>pub_name = MobilityWare</em> to provide a very specific view to an end user. Note that the other values in these dimensions are not visible.
                The variables can be defined in the front end of your application and passed to Rill during the iframe request.

                If you want to take it to the next level, you can add the `exclude` parameter to the metrics view security policy to remove those columns completely.

            </p>
            <img
                src="/images/custom-metrics-attributes.png"
                alt="Custom Attributes Metrics"
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
                        href="https://github.com/rilldata/rill-examples/blob/3516d3d144979d23ceded2a1a72efcbddd452800/rill-embed/metrics/auction_custom_access_policy_metrics.yaml#L13"
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

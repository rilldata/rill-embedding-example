import IframeFetcher from '../../components/IframeFetcher';
import RillFrame from '../../components/RillFrame';

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
                If you are embedding a dashboard with row access policies enabled, you can send attributes in the iframeBody  to create a dashboard with a specific view.
                Please see <a className="text-indigo-600 underline hover:text-indigo-800" href='https://github.com/rilldata/rill-examples/blob/main/rill-row-access-policies/metrics/basic_row_access_policy_metrics.yaml#L18'> an example metrics view</a> from our demo project, rill-row-access-policies.
            </p>
            <p>
                In the following example, we are passing the user_email, `user@fubo.tv`. Based on the defined row access policy, we are mapping domain of user_email to `App Site Domain` dimension.
            </p>

            <div className="mb-8">
                <IframeFetcher org={org} project={project} body={iframeBody}>
                    {(iframeUrl, error) => <RillFrame iframeUrl={iframeUrl} error={error} />}
                </IframeFetcher>
            </div>

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
                        href="https://github.com/rilldata/rill-embedding-example/blob/main/src/src/app/components/IframeFetcher.tsx"
                        className="text-indigo-600 underline hover:text-indigo-800"
                    >
                        Iframe Code
                    </a>
                </li>
                <li>
                    <a
                        href="https://ui.rilldata.com/demo/rill-row-access-policies/explore/basic_row_access_policy_explore"
                        className="text-indigo-600 underline hover:text-indigo-800"
                    >
                        Rill Dashboard
                    </a>
                </li>
            </ul>
        </div>

    );
};

export default SimpleIframe;
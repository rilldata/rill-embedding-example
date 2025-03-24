import IframeFetcher from '../../components/iframeFetcher'
import RillFrame from '../../components/RillFrame';

const SimpleIframe = () => {
    const org = 'demo';
    const project = 'rill-embed';
    const iframeBody = {
        resource: 'pivot_disabled_explore',
    };

    return (
        <div className="p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pivot view disabled dashboard</h2>
            <p className="text-gray-600 mb-6">
                It is possible to disable the pivot table on an explore dashboard. You will need to enable the following parameter on the explore dashboard.

                Please see <a className="text-indigo-600 underline hover:text-indigo-800" href='https://github.com/rilldata/rill-examples/blob/main/rill-openrtb-prog-ads/dashboards/auction_explore.yaml#L19'> an example explore dashboard </a> from our demo project.
            </p>

            <div className="mb-8">
                <IframeFetcher org={org} project={project} body={iframeBody}>
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
                        href="https://ui.rilldata.com/demo/rill-openrtb-prog-ads/explore/auction_explore"
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
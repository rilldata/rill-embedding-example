import IframeFetcher from '../../components/iframeFetcher.tsx';


const SimpleIframe = () => {
    const org = 'demo';
    const project = 'rill-embed';
    const iframeBody = {
        resource: 'embed_explore',
        navigation: true
    };

    return (
        <div className="p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Navigation enabled embed dashboard</h2>
            <p className="text-gray-600 mb-6">
                When enabling navigation on your embed iframe, your users can navigate to other Explore dashboards.<br /> If you want to restrict the navigable Explore dashboards, you will need to also pass a user parameter and enable access policies on your metrics view.
                Please refer to our{' '}
                <a href="https://docs.rilldata.com/integrate/embedding" className="text-indigo-600 underline hover:text-indigo-800">embedding documentation</a> and{' '}
                <a href="https://docs.rilldata.com/manage/security" className="text-indigo-600 underline hover:text-indigo-800">dashboard access policies documentation</a>.
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
                        href="https://ui.rilldata.com/demo/rill-openrtb-prog-ads/explore/bids_explore"
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
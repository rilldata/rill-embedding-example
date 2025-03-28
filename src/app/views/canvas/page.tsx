import IframeFetcher from '../../components/IframeFetcher';

const SimpleIframe = () => {
    const org = 'demo';
    const project = 'nyc-canvas-jam';
    const iframeBody = {
        resource: 'Leaderboard',
        type: 'canvas'
    };

    /**
     * The full request would look like
     * 
     * URL: https://admin.rilldata.com/v1/organizations/demo/projects/rill-openrtb-prog-ads/iframe
     * Method: POST
     * headers: {
     *   Authorization: "Bearer ${rillServiceToken}"
     * },
     * body: {
     *   resrouce: "embed_explore"
     * }
     */

    return (
        <div className="p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Canvas Dashboard</h2>
            <p className="text-gray-600 mb-6">
                Below is an example of Canvas Dashboards!
            </p>

            <div className="mb-8  w-[1200px] mx-auto">
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
                        href="https://github.com/rilldata/rill-embedding-example/blob/main/src/app/api/get-iframe/route.tsx"
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

import InteractiveRillFrame from '../../components/InteractiveRillFrame';

const SimpleIframe = () => {
    const org = 'demo';
    const project = 'rill-embed';
    const iframeBody = {
        resource: 'embed_explore'
    };

    return (
        <div className="p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">getState and setState API Demo</h2>
            <p className="text-gray-600 mb-6">
                This page demonstrates the <strong>getState</strong> and <strong>setState</strong> methods from the Rill Iframe API.
                These methods allow you to programmatically control and monitor the state of an embedded Rill dashboard using the postMessage API.
                <strong>Try the interactive controls below to see these methods in action!</strong>
            </p>

            <div className="mb-8">
                <InteractiveRillFrame org={org} project={project} body={iframeBody} />
            </div>


            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">setState(state) Method</h3>
                    <p className="text-gray-600 mb-3">
                        Sets the current state inside the iframe. You can use this to programmatically change views, apply filters,
                        or modify the dashboard configuration.
                    </p>
                    <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                        {`iframe.contentWindow.postMessage({
  id: 1,
  method: "setState",
  params: "view=pivot&tr=PT24H&grain=hour",
}, "*");`}
                    </div>
                    <p className="text-gray-600 mt-2">
                        <strong>Response:</strong> <code className="bg-gray-200 px-2 py-1 rounded">{"{ \"id\": 1, \"result\": true }"}</code>
                    </p>
                </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-700 mb-4 mt-8">Related Links:</h3>
            <ul className="space-y-2">
                <li>
                    <a
                        href="https://docs.rilldata.com/integrate/embed-iframe-api"
                        className="text-indigo-600 underline hover:text-indigo-800"
                    >
                        Rill Iframe API Documentation
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/rilldata/rill-embedding-example/blob/main/src/app/api/get-iframe/route.tsx"
                        className="text-indigo-600 underline hover:text-indigo-800"
                    >
                        Iframe Code Implementation
                    </a>
                </li>
                <li>
                    <a
                        href="https://docs.rilldata.com/integrate/embedding"
                        className="text-indigo-600 underline hover:text-indigo-800"
                    >
                        General Embedding Documentation
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SimpleIframe;

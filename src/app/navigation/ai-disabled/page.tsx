'use client';
import { useState } from 'react';
import IframeFetcher from '../../components/IframeFetcher';

const TABS = [
    { label: 'Explore', resource: 'auction_explore' },
    { label: 'Canvas', resource: 'executive_overview', type: 'canvas' },
];

const AiDisabled = () => {
    const org = 'demo';
    const project = 'no_ai_demo';
    const [activeTab, setActiveTab] = useState(0);

    const tab = TABS[activeTab];
    const iframeBody = {
        resource: tab.resource,
        ...('type' in tab && { type: tab.type }),
    };

    return (
        <div className="p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">AI Disabled Dashboard</h2>
            <p className="text-gray-600 mb-6">
                This dashboard has AI features disabled for embedded users. To disable the AI chat in your Rill project, add the following to your <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">rill.yaml</code>:
            </p>
            <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mb-6 text-sm font-mono overflow-x-auto border border-gray-200">
{`features:
  dashboardChat: '{{ not (.user.embed) }}'`}
            </pre>
            <p className="text-gray-600 mb-6">
                This uses a template expression to disable the dashboard chat feature when the user is viewing via an embed.
            </p>

            <div className="flex border-b border-gray-200 mb-6">
                {TABS.map((t, i) => (
                    <button
                        key={t.label}
                        onClick={() => setActiveTab(i)}
                        className={`px-4 py-2 text-sm font-medium transition-colors ${
                            activeTab === i
                                ? 'border-b-2 border-indigo-600 text-indigo-600'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <div className="mb-8">
                <IframeFetcher key={tab.resource} org={org} project={project} body={iframeBody} />
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
            </ul>
        </div>
    );
};

export default AiDisabled;

'use client';

import InteractiveRillFrame from '../../components/InteractiveRillFrame';

const presetStates = [
    { label: "FuboTV", value: "tr=P7D&grain=day&compare_dim=auction_type&f=app_site_name+IN+('FuboTV')" },
    { label: "Solitaire / Sharethrough", value: "tr=P7D&grain=day&compare_dim=auction_type&f=app_site_name+IN+('Solitaire+\u24CE','Sharethrough+Outstream+Video')" },
    { label: "Sling", value: "tr=P7D&grain=day&compare_dim=auction_type&f=app_site_name+IN+('Sling')" },
];

const UseCasePage = () => {
    const org = 'demo';
    const project = 'rill-embed';
    const iframeBody = {
        resource: 'embed_explore'
    };

    return (
        <div className="p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Use Case</h2>
            <InteractiveRillFrame org={org} project={project} body={iframeBody} presetStates={presetStates} />
        </div>
    );
};

export default UseCasePage;

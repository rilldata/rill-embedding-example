'use client';

import { useState } from 'react';

interface IframeRendererProps {
    iframeUrl: string | null;
    error: string | null;
}

const IframeRenderer = ({ iframeUrl, error }: IframeRendererProps) => {
    const [loaded, setLoaded] = useState(false);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!iframeUrl) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {!loaded && <div>Loading...</div>}
            <iframe
                src={iframeUrl}
                width="100%"
                height="1000px"
                allowFullScreen
                style={{ visibility: loaded ? 'visible' : 'hidden', height: loaded ? '1000px' : '0' }}
                onLoad={() => setLoaded(true)}
            />
        </>
    );
};

export default IframeRenderer;

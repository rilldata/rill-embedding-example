'use client';

import { useEffect, useState } from 'react';

interface IframeRendererProps {
    iframeUrl: string | null;
    error: string | null;
}

const IframeRenderer = ({ iframeUrl, error }: IframeRendererProps) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            console.log('[RillFrame] postMessage received:', event.origin, event.data);
            // TODO: once we identify the right message, use it to set ready=true
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!iframeUrl) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {!ready && <div>Loading...</div>}
            <iframe
                src={iframeUrl}
                width="100%"
                height="1000px"
                allowFullScreen
                style={{ visibility: ready ? 'visible' : 'hidden', height: ready ? '1000px' : '0' }}
                onLoad={() => setReady(true)}
            />
        </>
    );
};

export default IframeRenderer;

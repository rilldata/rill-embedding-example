'use client';

import { useEffect, useMemo, useState } from 'react';
import RillFrame from './RillFrame';

interface IframeFetcherProps {
    org: string;
    project: string;
    body: {
        resource: string;
        attributes?: Record<string, string | number | boolean>;
        [key: string]: unknown;
    };
}

const iframeCache = new Map<string, string>();

const IframeFetcher = ({ org, project, body }: IframeFetcherProps) => {
    const [iframeUrl, setIframeUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const bodyString = useMemo(() => JSON.stringify(body), [body]);
    const cacheKey = `${org}:${project}:${bodyString}`;

    useEffect(() => {
        const cached = iframeCache.get(cacheKey);
        if (cached) {
            setIframeUrl(cached);
            return;
        }

        const fetchUrl = async () => {
            try {
                const res = await fetch('/.netlify/functions/get-iframe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ org, project, body: JSON.parse(bodyString) }),
                });

                const data = await res.json();
                if (!res.ok) throw new Error(data.error || 'Failed to fetch iframe');
                iframeCache.set(cacheKey, data.iframeUrl);
                setIframeUrl(data.iframeUrl);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Unknown error');
                }
            }

        };

        fetchUrl();
    }, [org, project, bodyString, cacheKey]);

    if (error) return <p className="text-red-500">Error loading iframe: {error}</p>;
    if (!iframeUrl) return <p>Loading...</p>;

    return <RillFrame iframeUrl={iframeUrl} error={null} />;
};

export default IframeFetcher;

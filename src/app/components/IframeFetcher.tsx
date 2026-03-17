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
const inflightRequests = new Map<string, Promise<string>>();

const IframeFetcher = ({ org, project, body }: IframeFetcherProps) => {
    const [iframeUrl, setIframeUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const bodyString = useMemo(() => JSON.stringify(body), [body]);
    const cacheKey = `${org}:${project}:${bodyString}`;

    useEffect(() => {
        let cancelled = false;

        const cached = iframeCache.get(cacheKey);
        if (cached) {
            setIframeUrl(cached);
            return;
        }

        // Deduplicate: reuse in-flight request for the same cache key
        let request = inflightRequests.get(cacheKey);
        if (!request) {
            request = fetch('/.netlify/functions/get-iframe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ org, project, body: JSON.parse(bodyString) }),
            }).then(async (res) => {
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || 'Failed to fetch iframe');
                iframeCache.set(cacheKey, data.iframeUrl);
                return data.iframeUrl;
            }).finally(() => {
                inflightRequests.delete(cacheKey);
            });
            inflightRequests.set(cacheKey, request);
        }

        request.then((url) => {
            if (!cancelled) setIframeUrl(url);
        }).catch((err) => {
            if (!cancelled) setError(err instanceof Error ? err.message : 'Unknown error');
        });

        return () => { cancelled = true; };
    }, [org, project, bodyString, cacheKey]);

    if (error) return <p className="text-red-500">Error loading iframe: {error}</p>;
    if (!iframeUrl) return <p>Loading...</p>;

    return <RillFrame iframeUrl={iframeUrl} error={null} />;
};

export default IframeFetcher;

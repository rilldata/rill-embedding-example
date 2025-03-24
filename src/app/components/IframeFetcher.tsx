'use client';

import { useEffect, useState } from 'react';
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

const IframeFetcher = ({ org, project, body }: IframeFetcherProps) => {
    const [iframeUrl, setIframeUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUrl = async () => {
            try {
                const res = await fetch('/api/get-iframe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ org, project, body }),
                });

                const data = await res.json();
                if (!res.ok) throw new Error(data.error || 'Failed to fetch iframe');
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
    }, [org, project, JSON.stringify(body)]);

    if (error) return <p className="text-red-500">Error loading iframe: {error}</p>;
    if (!iframeUrl) return <p>Loading...</p>;

    return <RillFrame iframeUrl={iframeUrl} error={null} />;
};

export default IframeFetcher;

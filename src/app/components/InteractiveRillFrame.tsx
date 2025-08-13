'use client';

import { useEffect, useRef, useState } from 'react';

interface InteractiveRillFrameProps {
    org: string;
    project: string;
    body: {
        resource: string;
        attributes?: Record<string, string | number | boolean>;
        [key: string]: unknown;
    };
}

const InteractiveRillFrame = ({ org, project, body }: InteractiveRillFrameProps) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [iframeUrl, setIframeUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Fetch iframe URL
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
    }, [org, project, body]);

    const sendRequest = (method: string, params?: string) => {
        if (!iframeRef.current?.contentWindow) {
            return;
        }

        const id = Math.random().toString(36).substr(2, 9);
        const message = { id, method, ...(params && { params }) };

        console.log("Sending message:", message);
        iframeRef.current.contentWindow.postMessage(message, "*");
    };

    const handleSetState = (state: string) => {
        sendRequest("setState", state);
    };

    const presetStates = [
        { label: "Pivot View (24H)", value: "view=pivot&rows=app_site_domain&cols=device_os%2Crequests%2Cavg_bid_floor%2C1d_qps&sort_by=&table_mode=nest" },
        { label: "Explore View Comparing States (7D)", value: "view=table&tr=P7D&grain=day&compare_dim=device_state&f=device_state+IN+%28%27NY%27%2C%27NJ%27%2C%27ME%27%29" },
        { label: "Chart View (24H)", value: "view=tdd&grain=day&compare_dim=auction_type&measure=avg_bid_floor&chart_type=line" }
    ];

    if (error) {
        return <div className="text-red-500">Error loading iframe: {error}</div>;
    }

    if (!iframeUrl) {
        return <div>Loading...</div>;
    }

    return (
        <div className="space-y-4">
            {/* Control Panel */}
            <div className="bg-gray-50 p-4 rounded-lg border">
                <div className="mb-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {presetStates.map((preset, index) => (
                            <button
                                key={index}
                                onClick={() => handleSetState(preset.value)}
                                className="bg-green-500 hover:bg-green-600 text-white text-xs font-medium py-2 px-3 rounded transition-colors"
                            >
                                {preset.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Iframe */}
            <iframe
                ref={iframeRef}
                src={iframeUrl}
                width="100%"
                height="800px"
                allowFullScreen
                className="border rounded-lg"
            />
        </div>
    );
};

export default InteractiveRillFrame; 
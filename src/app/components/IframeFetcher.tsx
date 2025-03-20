/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { ReactNode } from 'react';

/**
 * This examples shows the request towards Rill to fetch a iframe URL
 * The iframe url is then passed on to the client and displayed to the end-user
 */

interface IframeFetcherProps {
    org: string; // Your rill organization
    project: string; // Your rill project containing the resource you want to embed
    body: {
        resource: string; // The Rill resource you would want to embed
        navigation?: boolean; // Defaults to false
        [key: string]: any; // Allows additional dynamic parameters such as attributes
    };
    children: (iframeUrl: string | null, error: string | null) => ReactNode;
}

export const fetchIframeUrl = async (org: string, project: string, body: IframeFetcherProps['body']) => {
    const rillServiceToken = process.env.RILL_SERVICE_TOKEN!;
    const url = `https://admin.rilldata.com/v1/organizations/${org}/projects/${project}/iframe`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${rillServiceToken}`,
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch iframe URL');
    }

    return data.iframeSrc;
};

const IframeFetcher = async ({ org, project, body, children }: IframeFetcherProps) => {
    try {
        const iframeUrl = await fetchIframeUrl(org, project, body);
        return <>{children(iframeUrl, null)}</>;
    } catch (error: any) {
        return <>{children(null, error.message)}</>;
    }
};

export default IframeFetcher;

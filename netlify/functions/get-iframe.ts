export default async (req: Request) => {
    if (req.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 });
    }

    const { org, project, body } = await req.json();

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
        return new Response(JSON.stringify({ error: data.message || 'Failed to fetch iframe URL' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify({ iframeUrl: data.iframeSrc }), {
        headers: { 'Content-Type': 'application/json' },
    });
};

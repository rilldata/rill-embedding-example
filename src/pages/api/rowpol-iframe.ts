import { NextApiRequest, NextApiResponse } from 'next';
import { getErrorMessage } from '@/utils/errors';

// Get the secret Rill service token from an environment variable.
const rillServiceToken = process.env.RILL_SERVICE_TOKEN;

// Configure the dashboard to request an iframe URL for.
// Note that the organization must be the same as the one the service token is associated with.
const rillOrg = "demo";
const rillProject = "rill-embed";
const rillDashboard = "auction_basic_access_policy_metrics_explore";

// This is a serverless function that makes an authenticated request to the Rill API to get an iframe URL for a dashboard.
// The iframe URL is then returned to the client.
// Iframe URLs must be requested from the backend to prevent exposing the Rill service token to the browser.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const url = `https://admin.rilldata.com/v1/organizations/${rillOrg}/projects/${rillProject}/iframe`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${rillServiceToken}`,
            },
            body: JSON.stringify({
                resource: rillDashboard,
                user_email: 'test@desmoinesregister.com',
                ttl_seconds: 0
                // You can pass additional parameters for row-level security policies here.
                // For details, see: https://docs.rilldata.com/integrate/embedding
            }),
        });
        const data = await response.json();
        if (response.ok) {
            res.json(data);
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        res.status(500).json({ error: getErrorMessage(error) });
    }
}
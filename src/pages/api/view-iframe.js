// Get the secret Rill service token from an environment variable.
const rillServiceToken = "rill_svc_6OdCwPR7Gg4GIGZa2EMC2Cbi934mNXqWdwnd8SsIM2zEmIA4Dng0Y5"

// Configure the dashboard to request an iframe URL for.
// Note that the organization must be the same as the one the service token is associated with.
const rillOrg = "rill_learn";
const rillProject = "my-rill-tutorial";
const rillDashboard = "advanced_metrics_view_explore";


// This is a serverless function that makes an authenticated request to the Rill API to get an iframe URL for a dashboard.
// The iframe URL is then returned to the client.
// Iframe URLs must be requested from the backend to prevent exposing the Rill service token to the browser.
export default async function handler(req, res) {
    try {
        const url = `https://admin.rilldata.io/v1/organizations/${rillOrg}/projects/${rillProject}/iframe`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${rillServiceToken}`,
            },
            body: JSON.stringify({
                resource: rillDashboard,
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
        res.status(500).json({ error: error.message });
    }
}
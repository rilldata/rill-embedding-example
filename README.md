# Rill embedding example

[![Netlify Status](https://api.netlify.com/api/v1/badges/46648482-644c-4c80-bafb-872057e51b6b/deploy-status)](https://app.netlify.com/sites/next-dev-starter/deploys)

This is a basic [Next.js](https://nextjs.org/) project that embeds a Rill dashboard. It embeds the [demo/rill-openrtb-prog-ads/bids](https://ui.rilldata.com/demo/rill-openrtb-prog-ads/bids) dashboard and is deployed using Netlify to [rill-embedding-example.netlify.app](https://rill-embedding-example.netlify.app/).

See the [Embed Dashboards](https://docs.rilldata.com/integration/embedding) docs page for more details.

## Developing

First, create a Rill service token:
```bash
rill service create rill-embedding-token
```

Second, write it to a `.env` file (which is gitignored):
```bash
cat "RILL_SERVICE_TOKEN=<INSERT TOKEN>" > .env
```

Third, update the `rillOrg`, `rillProject`, and `rillDashboard` variables in `pages/api/iframe.js` to reflect the dashboard you want to embed:
```js
const rillOrg = "demo";
const rillProject = "rill-openrtb-prog-ads";
const rillDashboard = "bids";
```

Lastly, run the development server:
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

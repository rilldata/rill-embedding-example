# Rill embedding example

[![Netlify Status](https://api.netlify.com/api/v1/badges/fb82df0c-351e-4b2b-9e7c-30ff5418ff79/deploy-status)](https://app.netlify.com/sites/rill-embedding-example/deploys)

This is a basic [Next.js](https://nextjs.org/) project that embeds a Rill dashboard. It embeds the [demo/rill-openrtb-prog-ads/](https://ui.rilldata.com/demo/rill-openrtb-prog-ads/) dashboard and is deployed using Netlify to [rill-embedding-example.netlify.app](https://rill-embedding-example.netlify.app/).

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

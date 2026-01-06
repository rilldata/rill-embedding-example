import IframeFetcher from '../../components/IframeFetcher';

const RoseGoldTheme = () => {
  const theme = {
    name: 'Rose Gold',
    description: 'Elegant pink and gold combination',
    primary: '#be185d',
    secondary: '#ec4899',
    background: '#fdf2f8',
    text: '#500724',
    accent: '#fbcfe8',
  };

  const org = 'demo';
  const project = 'rill-embed';
  const iframeBody = {
    resource: 'rose_gold_embed_explore',
  };

  return (
    <div
      className="min-h-screen p-6 rounded-lg"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {/* Header with theme accent */}
      <div
        className="mb-8 pb-6 border-b-4"
        style={{
          borderColor: theme.primary,
        }}
      >
        <h1
          className="text-4xl font-bold mb-2"
          style={{
            color: theme.primary,
          }}
        >
          {theme.name} Theme
        </h1>
        <p
          className="text-lg"
          style={{
            color: theme.secondary,
          }}
        >
          {theme.description}
        </p>
      </div>

      {/* Dashboard Section */}
      <div className="mb-8">
        <IframeFetcher org={org} project={project} body={iframeBody} />
      </div>

      {/* Related Links */}
      <div className="mt-8">
        <h3
          className="text-lg font-semibold mb-4"
          style={{
            color: theme.primary,
          }}
        >
          Related Links:
        </h3>
        <ul className="space-y-2">
          <li>
            <a
              href="https://docs.rilldata.com/integrate/embedding"
              className="hover:opacity-80 transition-opacity underline"
              style={{
                color: theme.secondary,
              }}
            >
              Embedding Documentation
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rilldata/rill-embedding-example"
              className="hover:opacity-80 transition-opacity underline"
              style={{
                color: theme.secondary,
              }}
            >
              GitHub Repository
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rilldata/rill-examples/tree/demo/rill-embed/themes"
              className="hover:opacity-80 transition-opacity underline"
              style={{
                color: theme.secondary,
              }}
            >
              Theme Examples
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RoseGoldTheme;

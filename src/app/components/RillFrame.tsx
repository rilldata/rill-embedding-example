'use client';

interface IframeRendererProps {
    iframeUrl: string | null;
    error: string | null;
}

const IframeRenderer = ({ iframeUrl, error }: IframeRendererProps) => {
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!iframeUrl) {
        return <div>Loading...</div>;
    }

    return (
        <iframe
            src={iframeUrl}
            width="100%"
            height="1000px"
            allowFullScreen
        ></iframe>
    );
};

export default IframeRenderer;

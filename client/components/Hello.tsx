import { useSSRStore } from "@taujs/react";

import "../styles/Hello.scss";

interface HomePageData {
  message: string;
  timestamp: string;
}

interface HomePageProps {
  location?: string;
}

export function Hello({ location }: HomePageProps) {
  const data = useSSRStore<HomePageData>();

  return (
    <div className="home-container">
      <h1 className="home-title">{data.message}</h1>

      <p className="home-subtitle">Welcome to your τjs application</p>

      <div className="home-info">
        <p>
          {Object.keys(data).length !== 0
            ? `Server-rendered at: ${new Date(data.timestamp).toLocaleString()}`
            : `Client-rendered at: ${new Date().toLocaleString()}`}
        </p>
        {location && (
          <p>
            Current location: <strong>{location}</strong>
          </p>
        )}
      </div>

      <div className="home-actions">
        <a
          href="https://taujs.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View Docs
        </a>

        <a
          href="https://github.com/aoede3/taujs-server"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          GitHub
        </a>
      </div>

      <p>
        Edit <code>src/client/components/hello.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

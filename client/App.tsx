import React from "react";

import { Hello } from "./components/Hello";

import "./styles/global.scss";
import "./styles/global.css";

interface AppProps {
  location?: string;
}

export function App({ location }: AppProps) {
  return (
    <React.StrictMode>
      <Hello location={location} />;
    </React.StrictMode>
  );
}

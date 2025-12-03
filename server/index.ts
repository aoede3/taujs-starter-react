import path from "node:path";

import Fastify from "fastify";
import { createServer } from "@taujs/server";

import config from "../taujs.config.js";

const isDev = process.env.NODE_ENV === "development";

// Auto set as below if `clientRoot` omitted. Shown here for clarity.
const clientRoot = isDev
  ? path.resolve(process.cwd(), "client") // source
  : path.resolve(process.cwd(), "dist/client"); // build

const startServer = async () => {
  try {
    const fastify = Fastify();

    await createServer({
      fastify,
      config,
      clientRoot,
      debug: { ssr: isDev },
    });

    await fastify.listen({
      port: config.server?.port || 5173,
      host: config.server?.host || "localhost",
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

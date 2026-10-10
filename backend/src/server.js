import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { routeRequest } from "../routes/index.js";
import { env } from "../config/env.js";

const serverConfigUrl = new URL("../server.json", import.meta.url);
const serverConfig = JSON.parse(await readFile(serverConfigUrl, "utf8"));
const port = env.port || serverConfig.port;
const server = createServer((request, response) => routeRequest(request, response, serverConfig.apiPrefix));

server.listen(port, serverConfig.host, () => {
  console.log(`Backend listening on port ${port}`);
});

import { getHealth } from "../controllers/health.controller.js";
import { handleNotFound } from "../middlewares/not-found.middleware.js";

export function routeRequest(request, response, apiPrefix) {
  if (request.method === "GET" && request.url?.split("?")[0] === `${apiPrefix}/health`) {
    getHealth(request, response);
    return;
  }
  handleNotFound(response);
}

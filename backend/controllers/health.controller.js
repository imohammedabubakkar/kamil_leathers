import { readHealth } from "../services/health.service.js";
import { sendJson } from "../utils/send-json.js";

export function getHealth(_request, response) {
  sendJson(response, 200, readHealth());
}

import { sendJson } from "../utils/send-json.js";

export function handleNotFound(response) {
  sendJson(response, 404, { error: "Not found" });
}

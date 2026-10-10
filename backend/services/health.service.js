import { getHealthStatus } from "../models/health.model.js";
import { healthResponse } from "../contracts/health.contract.js";

export function readHealth() {
  return healthResponse(getHealthStatus());
}

import assert from "node:assert/strict";
import { health } from "./index.js";

assert.equal(health().ok, true);
console.log("smoke-test placeholder passed");

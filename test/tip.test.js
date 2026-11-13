import { test } from "node:test";
import assert from "node:assert/strict";
import { tip, split } from "../src/tip.js";

test("tip rounds to whole cents", () => assert.equal(tip(1999, 15), 300));
test("split spreads the remainder over the first people", () => assert.deepEqual(split(1000, 3), [334, 333, 333]));
test("split refuses zero people", () => assert.throws(() => split(1000, 0), RangeError));

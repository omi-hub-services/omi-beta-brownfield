import { test } from "node:test";
import assert from "node:assert/strict";
import { tip, split, roundUpTotal } from "../src/tip.js";

test("tip rounds to whole cents", () => assert.equal(tip(1999, 15), 300));
test("split spreads the remainder over the first people", () => assert.deepEqual(split(1000, 3), [334, 333, 333]));
test("split refuses zero people", () => assert.throws(() => split(1000, 0), RangeError));
test("roundUpTotal rounds up to the next multiple", () => assert.equal(roundUpTotal(1234, 100), 1300));
test("roundUpTotal keeps an exact multiple", () => assert.equal(roundUpTotal(1200, 100), 1200));
test("roundUpTotal keeps zero", () => assert.equal(roundUpTotal(0, 50), 0));
test("roundUpTotal refuses a bad total", () => {
  for (const t of [-1, 1.5, NaN, "10"]) assert.throws(() => roundUpTotal(t, 100), RangeError);
});
test("roundUpTotal refuses a bad step", () => {
  for (const s of [0, -50, 2.5, NaN, "100"]) assert.throws(() => roundUpTotal(1000, s), RangeError);
});

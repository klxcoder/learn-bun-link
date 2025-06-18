import { sum } from "common-package";
import { expect, test } from "bun:test";

test("sum works", () => {
  expect(sum(2, 3)).toBe(5);
});

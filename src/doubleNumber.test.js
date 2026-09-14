import { describe, expect, test } from "vitest";
import { doubleNumber } from "./doubleNumber.js";

describe("doubleNumber", () => {
  test("dubblerar ett positivt tal", () => {
    expect(doubleNumber(5)).toBe(10);
  });

  test("dubblerar noll", () => {
    expect(doubleNumber(0)).toBe(0);
  });

  test("dubblerar ett negativt tal", () => {
    expect(doubleNumber(-3)).toBe(-6);
  });

  test("dubblerar ett decimaltal", () => {
    expect(doubleNumber(2.5)).toBe(5);
  });
});


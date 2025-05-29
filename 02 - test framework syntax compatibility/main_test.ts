import { describe, it, beforeEach, before } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { add } from "./main.ts";

describe("add function", () => {
  beforeEach(() => {
    // This runs before each test in this block
    console.log("Running a test...");
  });

  it("should add two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should add two negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it("should add a positive and a negative number", () => {
    expect(add(2, -3)).toBe(-1);
  });
});

/*
If you're coming from existing test frameworks like Mocha, Jest, or Jasmine, we also have BDD-style testing APIs available in the standard library.
You can use `describe`, `it`, `beforeEach`, and other BDD-style functions to structure your tests.

This API is a compatibility layer on top of Deno test - and is implemented using Deno.test and `step` functions.

`beforeEach` style functions are only available in the BDD-style API, and they run before each test in the block.

*/

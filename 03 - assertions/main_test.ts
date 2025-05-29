import { assert, assertEquals, assertArrayIncludes, assertAlmostEquals, assertThrows, assertInstanceOf } from "@std/assert";

Deno.test("assert", () => {
  assert(1 + 1, "1 + 1 should equal 2");
});

Deno.test("assertEquals examples", () => {
  assertEquals(1 + 1, 2, "1 + 1 should equal 2");
  assertEquals("hello".toUpperCase(), "HELLO", "String should be converted to uppercase");  
});

Deno.test("assertArrayIncludes examples", () => {
  assertArrayIncludes([1, 2, 3], [2, 3], "Array should include all elements");
  assertArrayIncludes(["a", "b", "c"], ["b", "c"], "Array should include all elements");
});

Deno.test("assertAlmostEquals examples", () => {
  assertAlmostEquals(1.000000001e-8, 1.000000002e-8);
});

Deno.test("assertThrows examples", () => {
  assertThrows(() => {
    throw new Error("Test error");
  });
});

Deno.test("assertInstanceOf examples", () => {
  class MyError extends Error {}
  const error = new MyError("This is a custom error");

  assertInstanceOf(error, MyError, "Error should be an instance of MyError");
});

/*

Then @std/assert package provides a set of assertion functions that you can use in your tests.
You can use `assertEquals`, `assertNotEquals`, `assertThrows`, and many other assertion functions to verify the behavior of your code.

There's a lot of "modern convenience functions" in the @std/assert package that you can use to make your tests more readable and maintainable.
Things like `assertArrayIncludes`, `assertStringIncludes`, and many others that help you write more expressive tests.
We have things like assertAlmost equals, which is useful for comparing floating point numbers where precision matters.

We also have exception assertion and type verification functions like `assertThrows`, `assertInstanceOf`, and `assertType` to help you verify that your code behaves as expected in error scenarios.

We think this is pretty comprehensive and should cover existing codebases and pretty much all of your use cases for expectations.

*/

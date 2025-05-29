import { assertEquals } from "@std/assert";
import { add } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test({ name: "negative numbers test" }, () => {
  assertEquals(add(-2, -3), -5);
});

Deno.test({ ignore: true, name: "ignored test" }, () => {
  assertEquals(add(2, -3), -1);
});

Deno.test(async function withSteps(t) {
  console.log("Running before all steps...");

  await t.step("step 1", () => {
    assertEquals(add(1, 1), 2);
  });

  await t.step("step 2", () => {
    assertEquals(add(2, 2), 4);
  });
});

/*

We have a built in test framework, test runner and assertion library that we recommend by default.

Deno.test defines test cases.

In the above you can see how you can use both anonymous functions and named functions to define tests.
That options object at the start has a bunch of other options you can pass in, like `only`, `ignore`, `permissions`.

The only "deno specific" thing in there is the permissions object, which allows you to specify what permissions the test should run with
in order to interact with Deno's runtime security model.

All these tests run on the command line with `deno test`.
Or from Visual Studio Code with the Deno extension installed, they'll run from the editor too.

*/

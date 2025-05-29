import { assertSnapshot } from "jsr:@std/testing/snapshot";

Deno.test("isSnapshotMatch", async (t) => {
  const a = {
    hello: "world!",
    example: 124,
  };
  await assertSnapshot(t, a);
});


/*

We also support snapshot testing out of the box.
Useful for asserting on all of your complicated object models, like this one!

To establish a snapshot you run

deno test --allow-read --allow-write -- --update

This will create a snapshot file in the `__snapshots__` directory that you should check in as your chiseled reference for the test.
Then you can run the test again without the `--update` flag to check if the snapshot matches.

deno test --allow-read


It's probably just easier to run deno test -A.
*/

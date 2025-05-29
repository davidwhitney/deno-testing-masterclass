# Deno Testing Masterclass

Ok first, how many of you write unit tests in your code today?

Show of hands, you mostly use - Jest? Mocha? Jasmine? Vitest?
Yeah me too.

How many of you remember the hell of configuring the correct typescript compilers, emitting the right source maps and other chaos in setting up test runners and environments in the past?

The nice thing about Deno and our "batteries included" approach to development, tooling and framework building is that we've built the deno test functionality into Deno from the start, so you get all of the benefits of running in Deno, including the TypeScript compiler, the runtime, and the test runner, all in one package.
This means you can write your tests in TypeScript, and they will run seamlessly without any additional configuration.

## Adoption

Now, we know you're likely not writing your first JavaScript or TypeScript code on Deno - you've probably been here before using Node.js or some other JavaScript runtime along with the open-source ecosystem of test frameworks.
So we've designed Deno to be compatible more or less out of the box with the syntax and semantics of the most popular test frameworks.

We've also got our own, more opinionated style of authoring tests, which we'll cover in this masterclass.

So if you're coming from Node, or Jest, or Vitest - your tests will likely run with few to minimal changes.

Let's take a look, starting with the basics.

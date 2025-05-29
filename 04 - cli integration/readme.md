# Using the CLI

Of course, we've already mentioned deno test in the previous section, but here we will focus on the watch mode.

## Deno Test Watch Mode

```bash
deno test --watch
```

This command will run the tests and keep watching for changes in the test files. If any changes are detected, it will automatically rerun the tests.
This is particularly useful during development, as it allows you to see the results of your changes immediately without having to manually rerun the tests each time.

## Deno Test Watch Mode with Filter

You can also use the watch mode with a filter to run only specific tests. For example, if you want to run only the tests in a specific file or with a specific name, you can use the `--filter` option.

```bash
deno test --watch --filter "assert"
```

Notice how this command is filtering for all of our assertion tests now.

This supports regular expressions too like this:

```bash
deno test --watch --filter /assert$/
```

Notice how it's just matching the one test now.

## Code Coverage

Deno also supports code coverage out of the box. You can generate a code coverage report by using the `--coverage` option.

```bash
deno test --coverage
deno coverage
```

The first command will run the tests and generate a coverage report, while the second command will display the coverage report in the terminal.
You can also specify a directory to save the coverage report to:

```bash
deno test --coverage=folder_name
deno coverage folder_name

-----------------------------------------------------------------------
File                                              | Branch % | Line % |
-----------------------------------------------------------------------
 01 - basics/main.ts                              |    100.0 |  100.0 |
 02 - test framework syntax compatibility/main.ts |      0.0 |   50.0 |
-----------------------------------------------------------------------
 All files                                        |      0.0 |   66.7 |
-----------------------------------------------------------------------
```

We also support JUnit-style XML output for code coverage reports, which can be useful for integrating with CI/CD pipelines or other tools that expect this format.
If tools that speak JUnit are your speed and you need to push these reports into other tooling.

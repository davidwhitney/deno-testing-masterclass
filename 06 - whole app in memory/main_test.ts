import { assertEquals } from "@std/assert";
import { app } from "./main.ts";

Deno.test({ name: "App", permissions: { net: true } }, async (t) => {
  const server = Deno.serve({ port: 0 }, app.fetch);
  const root = `http://localhost:${server.addr.port}`;

  await t.step("GET /", async () => {
    const response = await fetch(`${root}/`);
    const text = await response.text();

    assertEquals(response.status, 200);
    assertEquals(text, "Hello, World!");
  });

  await t.step("GET /weather", async () => {
    const response = await fetch(`${root}/weather`);
    const weather = await response.json();

    assertEquals(response.status, 200);
    assertEquals(weather, {
      temperature: 22,
      condition: "Sunny",
      humidity: 50,
      windSpeed: 10,
    });
  });

  await t.step("GET /nonexistent", async () => {
    const response = await fetch(`${root}/nonexistent`);
    const text = await response.text();

    assertEquals(response.status, 404);
    assertEquals(text, "404 Not Found");
  });

  await server.shutdown();
});



/*

If you're building bigger applications, you might want to test your app as a whole, rather than just individual functions or modules.

This style of testing is often called "Component Testing", especially when you're testing around the boundaries of a microservice.

This example shows how you can use the web framework Hono in memory, combined with Deno's built-in `serve` API, to test your app as a whole.
We're using test steps here to create our web server, make requests, and check responses.

This approach allows you to test your app's endpoints, responses, and overall behavior without needing to deploy it or run it in a separate process.

You'll need to run this test with the `--allow-net` flag to allow network access, as it creates a server and makes HTTP requests.

*/

import { assertEquals } from "@std/assert";
import { createApp } from "./main.ts";

Deno.test("App", async (t) => {
  const fakeWeatherService = {
    temperature: 0,
    getWeather: () => {
      return Promise.resolve({
        temperature: fakeWeatherService.temperature,
        condition: "Sunny",
        humidity: 50,
        windSpeed: 10,
      });
    },
  };

  const app = createApp({ getWeather: fakeWeatherService.getWeather });

  const server = Deno.serve({ port: 0 }, app.fetch);
  const root = `http://localhost:${server.addr.port}`;

  await t.step("GET /weather - temp is 100", async () => {
    fakeWeatherService.temperature = 100;

    const response = await fetch(`${root}/weather`);
    const weather = await response.json();

    assertEquals(weather.temperature, 100);
  });

  await t.step("GET /weather - temp is 20", async () => {
    fakeWeatherService.temperature = 20;

    const response = await fetch(`${root}/weather`);
    const weather = await response.json();
    
    assertEquals(weather.temperature, 20);
  });

  await server.shutdown();
});



/*

In this final example we're testing the whole app in memory, but we've adjusted our code to do some very
ultra light weight dependency injection - allowing us to mock the weather data.

We're setting up a fake object and passing it into our newly refactored `createApp` function.
In our code, if this fake object is passed in, it will be used instead of the real weather service.

This allows us to test the app's behavior without needing to rely on the actual weather service, which is useful for unit testing and ensuring that our app behaves correctly under different conditions.

*/

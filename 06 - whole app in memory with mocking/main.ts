import { Hono, Context } from '@hono/hono';
import { getWeather, WeatherData } from './weatherService.ts'; 

export type AppOptions = {
    getWeather?: (city: string) => Promise<WeatherData>;
};

export function createApp(options: AppOptions = {}) {
    const app = new Hono();

    app.get('/', (c: Context) => c.text('Hello, World!'));
    app.get('/weather', async (c: Context) => {
        const _getWeather = options.getWeather || getWeather;
        const weather = await _getWeather('New York');
        return c.json(weather);
    });
    
    return app;
}

if (import.meta.main) {
    Deno.serve(createApp().fetch);
}

/*
Here we've introduced some "ghetto Dependency Injection" by allowing the `getWeather` function to be passed in as an option.

This allows us to easily mock the weather service in our tests, without having to change the application code.
This is a very lightweight form of dependency injection, but it can be effective for simple use cases like this.

You could use a more sophisticated dependency injection library if you wanted to, but for many applications, this simple approach is sufficient.

*/
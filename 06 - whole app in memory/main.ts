import { Hono, Context } from '@hono/hono';

export const app = new Hono();

app.get('/', (c: Context) => c.text('Hello, World!'));
app.get('/weather', (c: Context) => {
    const weather = {
        temperature: 22,
        condition: 'Sunny',
        humidity: 50,
        windSpeed: 10,
    };
    return c.json(weather);
});

if (import.meta.main) {
    Deno.serve(app.fetch);
}

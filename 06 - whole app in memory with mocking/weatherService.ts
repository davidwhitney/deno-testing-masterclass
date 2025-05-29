export type WeatherData = {
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
};

export function getWeather(_: string): Promise<WeatherData> {
    return Promise.resolve({
        temperature: 22,
        condition: 'Sunny',
        humidity: 50,
        windSpeed: 10,
    });
}
import type { WeatherResponse } from '../types/weatherTypes'

export const fetchWeatherApi = async (
  latitude: number,
  longitude: number
): Promise<WeatherResponse> => {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching weather: ${response.statusText}`)
    }

    const data: WeatherResponse = await response.json()
    return data
  } catch (error: unknown) {
    console.error(error)
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error fetching weather");
    }
  }
}

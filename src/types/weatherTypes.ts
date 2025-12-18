export interface CurrentWeather {
  temperature: number;
  weathercode: number;
  dailyLow: number;
  dailyHigh: number;
}

export interface DailyWeather {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weathercode: number[];
}

export interface WeatherResponse {
  current_weather: CurrentWeather;
  daily: DailyWeather;
}

export interface DailyForecastItem {
  date: string;
  high: number;
  low: number;
  weatherCode: number;
}

export interface WeatherState {
  current: { [userId: string]: CurrentWeather };
  forecast: { [userId: string]: DailyForecastItem[] };
  weatherLoading: { [userId: string]: boolean };
  weatherError: { [userId: string]: string | null };
}

export interface FetchWeatherParams {
  userId: string;
  latitude: number;
  longitude: number;
}

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { WeatherState, CurrentWeather, DailyForecastItem, FetchWeatherParams } from '../types/weatherTypes'
import { fetchWeatherApi } from '../api/weatherApi'

export const fetchWeather = createAsyncThunk<
  { userId: string; current: CurrentWeather; forecast: DailyForecastItem[] },
  FetchWeatherParams
>(
  'weather/fetchWeather',
  async ({ userId, latitude, longitude }, { rejectWithValue }) => {
    try {
      const data = await fetchWeatherApi(latitude, longitude)

      // User list main
      const current: CurrentWeather = {
        temperature: data.current_weather.temperature,
        weathercode: data.current_weather.weathercode,
        dailyLow: data.daily.temperature_2m_min[0],
        dailyHigh: data.daily.temperature_2m_max[0],
      }

      // Detail page user
      const forecast: DailyForecastItem[] = data.daily.time.map((date, i) => ({
        date,
        weathercode: data.daily.weathercode,
        high: data.daily.temperature_2m_max[i],
        low: data.daily.temperature_2m_min[i],
        weatherCode: data.daily.weathercode[i],
      }))

      return { userId, current, forecast }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      return rejectWithValue(message)
    }
  }
)

const initialState: WeatherState = {
  current: {},
  forecast: {},
  loading: false,
  error: null,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        fetchWeather.fulfilled,
        (state, action: PayloadAction<{ userId: string; current: CurrentWeather; forecast: DailyForecastItem[] }>) => {
          state.loading = false
          state.current[action.payload.userId] = action.payload.current
          state.forecast[action.payload.userId] = action.payload.forecast
        }
      )
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default weatherSlice.reducer

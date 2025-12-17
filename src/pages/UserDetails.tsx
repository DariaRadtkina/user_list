import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchWeather } from "../features/weatherSlice";
import { getWeatherIcon } from '../features/getWeatherIcons';

export const UserDetails = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) =>
    state.users.users.find((u) => u.id === userId)
  );

  const forecast = useAppSelector(
    (state) => state.weather.forecast[userId || ""]
  );
  const loading = useAppSelector((state) => state.weather.loading);
  const error = useAppSelector((state) => state.weather.error);

  useEffect(() => {
    if (user && userId && !forecast) {
      dispatch(
        fetchWeather({
          userId,
          latitude: user.latitude,
          longitude: user.longitude,
        })
      );
    }
  }, [user, userId, forecast, dispatch]);

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/")}
        className="cursor-pointer inline-flex items-center gap-2 mb-8 text-blue-800 font-medium 
               hover:text-blue-600 hover:translate-x-[-4px] transition-all duration-200"
      >
        <span className="text-2xl">←</span> Back to list
      </button>

      <div className="bg-white rounded-2xl shadow-lg p-2 md:p-6 text-center">
        <div className="space-y-1">
          <img
            src={user.picture}
            alt={user.name}
            className="w-40 h-40 rounded-full mx-auto object-cover"
          />
          <h2 className="text-2xl font-bold tracking-wider mt-4 mb-4">{user.name}</h2>
          <div className="space-y-1 text-lg">
            <p>
              <span className="underline font-semibold decoration-blue-500">Gender:</span> {user.gender}
            </p>
            <p>
              <span className="underline font-semibold decoration-blue-500">Location:</span> {user.city}, {user.country}
            </p>
            <p>
              <span className="underline font-semibold decoration-blue-500">Email:</span> {user.email}
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 p-8 bg-white border-t border-gray-200 space-y-1">
          <h3 className="text-xl font-bold text-center mb-8">
            7-Day Weather Forecast
          </h3>

          {loading && (
            <p className="text-center text-gray-600 animate-pulse">
              Loading weather...
            </p>
          )}
          {error && (
            <p className="text-center text-red-600 font-medium">{error}</p>
          )}

          {forecast && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {forecast.map((day) => (
                <div
                  key={day.date}
                  className="cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 text-center shadow hover:shadow-md transition-shadow"
                >
                  <p className="text-4xl mb-3">{getWeatherIcon(day.weatherCode)}</p>
                  <p className="font-bold text-base text-blue-900 mb-2">
                    {new Date(day.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    }).replace(/ /g, ' ')}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">High:</span> {day.high}°C
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Low:</span> {day.low}°C
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

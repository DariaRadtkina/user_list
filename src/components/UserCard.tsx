import { useNavigate } from "react-router-dom";
import type { UserInfo } from "../types/usersTypes";
import type { CurrentWeather } from "../types/weatherTypes";
import { getWeatherIcon } from "../features/getWeatherIcons";
import { Loader } from "./Loader";
import { WeatherError } from "../components/WeatherError";

interface UserCardProps {
  user: UserInfo;
  weather?: CurrentWeather;
  weatherLoading: boolean;
  weatherError: string | null;
}

export const UserCard = ({
  user,
  weather,
  weatherLoading,
  weatherError,
}: UserCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer rounded-xl bg-white shadow-md 
        ring-2 ring-blue-500/30 hover:ring-blue-500 hover:shadow-xl hover:-translate-y-1 
        transition-all duration-300 
        p-4 sm:p-6 text-gray-800 space-y-1"
      onClick={() => navigate(`/user/${user.id}`)}
    >
      <img
        src={user.picture}
        alt={user.name}
        className="w-24 h-24 sm:w-30 sm:h-30 rounded-full object-cover mx-auto "
      />
      <h2 className="text-l sm:text-xl text-center font-bold tracking-wider mt-2 sm:mt-4 mb-2 sm:mb-4">
        {user.name}
      </h2>
      <p className="text-xs text-center sm:text-sm tracking-wide">
        <span className="underline font-semibold decoration-blue-500">
          Location:
        </span>{" "}
        {user.city}, {user.country}
      </p>
      <p className="text-xs text-center sm:text-sm tracking-wide">
        <span className="underline font-semibold decoration-blue-500">
          Email:
        </span>{" "}
        {user.email}
      </p>

      {weatherLoading && (
        <div className="mt-2 sm:mt-4 pt-2 sm:pt-4 text-xs sm:text-sm border-t border-gray-200 space-y-1">
          <Loader />
        </div>
      )}
      {weatherError && !weatherLoading && <WeatherError error={weatherError} />}

      {!weatherLoading && !weatherError && weather && (
        <div className="mt-4 pt-4 text-xs sm:text-sm border-t border-gray-200 space-y-1">
          <p className="text-sm sm:text-base pb-2 sm:pb-3 text-center font-bold tracking-wider">
            Temperature
          </p>
          <div className="text-xs sm:text-sm tracking-wide flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-8">
            <p className="text-3xl sm:text-5xl mb-2 sm:mb-4 flex-shrink-0">
              {getWeatherIcon(weather.weathercode)}
            </p>
            <div className="text-center sm:text-left space-y-1 sm:space-y-3">
              <p className="text-xs sm:text-sm tracking-wide">
                <span className="underline font-semibold decoration-blue-500">
                  Current:
                </span>{" "}
                {weather.temperature}°C
              </p>
              <p className="text-xs sm:text-sm tracking-wide">
                <span className="underline font-semibold decoration-blue-500">
                  Daily Low:
                </span>{" "}
                {weather.dailyLow}°C
              </p>
              <p className="text-xs sm:text-sm tracking-wide">
                <span className="underline font-semibold decoration-blue-500">
                  Daily High:
                </span>{" "}
                {weather.dailyHigh}°C
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

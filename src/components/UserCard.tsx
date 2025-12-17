import { useNavigate } from 'react-router-dom';
import type { UserInfo } from '../types/usersTypes';
import type { CurrentWeather } from '../types/weatherTypes';
import { getWeatherIcon } from '../features/getWeatherIcons';

interface UserCardProps {
  user: UserInfo
  weather?: CurrentWeather
}

export const UserCard = ({ user, weather }: UserCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer rounded-xl bg-white shadow-md 
        ring-2 ring-blue-500/30 hover:ring-blue-500 hover:shadow-xl hover:-translate-y-1 
        transition-all duration-300 
        p-6 text-gray-800 space-y-1"
      onClick={() => navigate(`/user/${user.id}`)}
    >
      <img src={user.picture} alt={user.name} className="w-30 h-30 rounded-full object-cover mx-auto " />
      <h2 className="text-xl text-center font-bold tracking-wider mt-4 mb-4">{user.name}</h2>
      <p className="text-sm tracking-wide"><span className="underline font-semibold decoration-blue-500">Location:</span> {user.city}, {user.country}</p>
      <p className="text-sm tracking-wide"><span className="underline font-semibold decoration-blue-500">Email:</span> {user.email}</p>

      {weather && (
        <div className="mt-4 pt-4 text-sm border-t border-gray-200 space-y-1">
          <p className="text-base pb-3 text-center font-bold tracking-wider">Temperature</p>
          <div className="text-sm tracking-wide flex flex-col sm:flex-row items-center justify-center gap-8">
            <p className="text-5xl mb-4 flex-shrink-0">{getWeatherIcon(weather.weathercode)}</p>
            <div className='text-center sm:text-left space-y-3'>
              <p className="text-sm tracking-wide"><span className="underline font-semibold decoration-blue-500">Current:</span> {weather.temperature}°C</p>
              <p className="text-sm tracking-wide"><span className="underline font-semibold decoration-blue-500">Daily Low:</span> {weather.dailyLow}°C</p>
              <p className="text-sm tracking-wide"><span className="underline font-semibold decoration-blue-500">Daily High:</span> {weather.dailyHigh}°C</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

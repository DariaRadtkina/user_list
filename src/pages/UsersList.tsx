import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/store'
import { fetchUsers } from '../features/usersSlice'
import { fetchWeather } from '../features/weatherSlice'
import { UserCard } from '../components/UserCard'

export const UsersList = () => {
  const dispatch = useAppDispatch()
  const { users, loading, error } = useAppSelector(state => state.users)
  const weather = useAppSelector(state => state.weather.current)

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers())
    }
  }, [users, dispatch]);

  useEffect(() => {
    users.forEach(user => {
      const userId = user.id;
      if (!weather[userId]) {
        dispatch(fetchWeather({
          userId,
          latitude: user.latitude,
          longitude: user.longitude
        }));
      }
    });
  }, [users, dispatch, weather]);



  if (loading) return <div className="p-4">Loading users...</div>
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>

  return (
    <div className="p-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          weather={weather[user.id]}
        />
      ))}
    </div>
  )
}

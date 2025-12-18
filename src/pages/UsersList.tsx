import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchUsers } from "../features/usersSlice";
import { fetchWeather } from "../features/weatherSlice";
import { UserCard } from "../components/UserCard";
import { UserCardSkeleton } from "../components/UserCardSkeleton";
import { UserError } from "../components/UserError";

export const UsersList = () => {
  const dispatch = useAppDispatch();
  const { users, usersLoading, usersError } = useAppSelector(
    (state) => state.users,
  );
  const weather = useAppSelector((state) => state.weather.current);
  const weatherLoading = useAppSelector(
    (state) => state.weather.weatherLoading,
  );
  const weatherError = useAppSelector((state) => state.weather.weatherError);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch]);

  useEffect(() => {
    users.forEach((user) => {
      const userId = user.id;
      if (!weather[userId]) {
        dispatch(
          fetchWeather({
            userId,
            latitude: user.latitude,
            longitude: user.longitude,
          }),
        );
      }
    });
  }, [users, dispatch, weather]);

  if (usersLoading)
    return (
      <div className="p-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-4">
        {[...Array(9)].map((_, index) => (
          <UserCardSkeleton key={index} />
        ))}
      </div>
    );
  if (usersError) return <UserError error={usersError} />;

  return (
    <div className="p-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-4">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          weather={weather[user.id]}
          weatherLoading={weatherLoading[user.id] ?? false}
          weatherError={weatherError[user.id] ?? null}
        />
      ))}
    </div>
  );
};

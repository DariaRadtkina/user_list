import type { UserInfo, UsersApiResponse } from "../types/usersTypes";

export const fetchUsersApi = async (): Promise<UserInfo[]> => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=9");

    if (!response.ok) {
      throw new Error(`Error fetching users: ${response.statusText}`);
    }

    const data: UsersApiResponse = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return data.results.map((user) => ({
      id: user.login.uuid,
      name: `${user.name.first} ${user.name.last}`,
      gender: user.gender,
      email: user.email,
      city: user.location.city,
      country: user.location.country,
      picture: user.picture.large,
      latitude: parseFloat(user.location.coordinates.latitude),
      longitude: parseFloat(user.location.coordinates.longitude),
    }));
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error fetching users");
    }
  }
};

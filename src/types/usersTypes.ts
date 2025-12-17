export interface UserInfo {
  id: string;
  name: string;
  gender: string;
  email: string;
  city: string;
  country: string;
  picture: string;
  latitude: number;
  longitude: number;
};

export interface UsersApiResponse {
  results: {
    login: { uuid: string };
    name: { first: string; last: string };
    gender: string;
    email: string;
    location: {
      city: string;
      country: string;
      coordinates: { latitude: string; longitude: string };
    }
    picture: { large: string };
  }[],
  error?: string,
};

export interface UsersState {
  users: UserInfo[];
  loading: boolean;
  error: string | null
}

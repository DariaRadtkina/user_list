# Users List App

A simple and responsive React application that displays a list of random users with their current weather and 7-day forecast.

## Features

- Fetches 9 random users from [Random User API](https://randomuser.me/documentation)
- Displays user cards with name, photo, location, email and current weather
- Shows detailed user page with personal info and 7-day weather forecast
- Uses Open-Meteo API for free weather data (current + forecast)
- Fully responsive design (mobile, tablet, desktop)
- Loading skeletons for smooth UX
- Error handling with user-friendly messages
- Built with React, TypeScript, Redux Toolkit, React Router and Tailwind CSS

## [Live Demo](https://)

## Tech Stack

- **React** + **TypeScript**
- **Redux Toolkit** - state management
- **React Router** - navigation
- **Tailwind CSS** - styling
- **Random User API** - mock users
- **Open-Meteo API** - weather data

## Setup & Running Locally

1. Clone the repository

```bash
git clone https://github.com/your-username/weather-users-app.git
cd weather-users-app
```

2. Install dependencies

```bash
npm i
```

3. Run the development server

```bash
npm run dev
```

or

```bash
npm run start
```

## API Notes

Users are generated with fixed seed=abc for stable IDs across reloads.
Weather data fetched based on user coordinates.

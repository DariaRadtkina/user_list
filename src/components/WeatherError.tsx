interface WeatherErrorProps {
  error: string;
}

export const WeatherError = ({ error }: WeatherErrorProps) => {
  return (
    <div role="alert" className="max-w-xl mx-auto p-4 sm:p-8">
      <div className="bg-red-500 text-center text-white font-bold rounded-t px-4 py-2">
        Weather Error
      </div>
      <div className="border border-t-0 border-red-400 text-center rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>{error}</p>
      </div>
    </div>
  );
};

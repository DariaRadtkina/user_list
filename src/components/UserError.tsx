interface UserErrorProps {
  error: string;
}

export const UserError = ({ error }: UserErrorProps) => {
  return (
    <div role="alert" className="max-w-5xl mx-auto p-4 sm:p-8">
      <div className="bg-red-500 text-center text-white font-bold rounded-t px-4 py-2">
        Users Error
      </div>
      <div className="border border-t-0 border-red-400 text-center rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>{error}</p>
      </div>
    </div>
  );
};

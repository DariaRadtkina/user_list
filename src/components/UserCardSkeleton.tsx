export const UserCardSkeleton = () => {
  return (
    <div
      className="cursor-pointer rounded-xl bg-white shadow-md 
        ring-2 ring-blue-500/30 hover:ring-blue-500 hover:shadow-xl hover:-translate-y-1 
        transition-all duration-300 
        p-4 sm:p-6 text-gray-800 space-y-1 animate-pulse"
    >
      <div className="w-24 h-24 sm:w-30 sm:h-30 mx-auto rounded-full bg-gray-300" />

      <div className="mt-2 sm:mt-4 mb-2 sm:mb-4 w-4/5 mx-auto bg-gray-300 rounded-lg" />

      <div className="h-2 sm:h-3 w-full bg-gray-300 rounded-lg" />
      <div className="h-2 sm:h-3 w-full bg-gray-300 rounded-lg" />

      <div className="mt-4 pt-4 text-sm border-t border-gray-200 space-y-1">
        <div className="pb-2 sm:pb-3 h-2 sm:h-4 w-48 mx-auto bg-gray-300 rounded-lg" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-8">
          <div className="mb-2 sm:mb-4 w-16 h-16 sm:w-20 sm:h-20 bg-gray-300 rounded-full flex-shrink-0" />
          <div className="space-y-3 w-full max-w-xs text-center sm:text-left">
            <div className="h-2 sm:h-3 w-2/5 mx-auto sm:w-full bg-gray-300 rounded-lg" />
            <div className="h-2 sm:h-3 w-2/5 mx-auto sm:w-full bg-gray-300 rounded-lg" />
            <div className="h-2 sm:h-3 w-2/5 mx-auto sm:w-full bg-gray-300 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

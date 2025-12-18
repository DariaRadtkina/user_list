export const UserDetailsSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-pulse">
      <div className="bg-white rounded-2xl shadow-lg p-2 md:p-6">
        <div className="space-y-1 mt-3 sm:mt-6 pt-3 sm:pt-6 p-4 sm:p-8">
          <img className="w-24 h-24 sm:w-40 sm:h-40 rounded-full mx-auto bg-gray-300" />
          <div className="mt-2 sm:mt-4 mb-2 sm:mb-4 h-4 w-2/5 mx-auto bg-gray-300 rounded-lg"></div>
          <div className="space-y-1">
            <div className="h-2 sm:h-4 w-3/5 sm:w-1/5 mx-auto bg-gray-300 rounded-lg"></div>
            <div className="h-2 sm:h-4 w-3/5 sm:w-1/5 mx-auto bg-gray-300 rounded-lg"></div>
            <div className="h-2 sm:h-4 w-3/5 sm:w-1/5 mx-auto bg-gray-300 rounded-lg"></div>
          </div>
        </div>

        <div className="mt-3 sm:mt-6 pt-3 sm:pt-6 p-4 sm:p-8 bg-white border-t border-gray-200 space-y-1">
          <div className="mb-4 sm:mb-8 h-4 w-2/5 mx-auto bg-gray-300 rounded-lg"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className="cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-2 sm:p-5 shadow space-y-1"
              >
                <div className="mb-1 sm:mb-3 sm:w-16 sm:h-16 w-20 h-20 mx-auto bg-gray-300 rounded-full"></div>
                <div className="mb-1 sm:mb-2 h-2 sm:h-4 w-2/5 mx-auto bg-gray-300 rounded-lg"></div>
                <div className="mb-1 sm:mb-2 h-2 sm:h-4 w-1/5 mx-auto bg-gray-300 rounded-lg"></div>
                <div className="h-2 sm:h-4 w-1/5 mx-auto bg-gray-300 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

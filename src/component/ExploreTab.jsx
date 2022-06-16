const ExploreTab = () => {
  return (
    <>
      <section className="flex justify-evenly my-5">
        <button className="flex px-3 py-1 border-2 border-gray-300 border-opacity-100 text-gray-700 hover:border-indigo-800 hover:text-indigo-800 ">
          <span>Youth</span>
        </button>
        <button className="px-3 py-1 border-2 border-gray-300 border-opacity-100 text-gray-500 hover:border-indigo-800 hover:text-indigo-800 ">
          <span>Trending</span>
        </button>
        <button className="px-3 py-1 border-2 border-gray-300 border-opacity-100 text-gray-500 hover:border-indigo-800 hover:text-indigo-800">
          <span>MostShared</span>
        </button>
        <button className="px-3 py-1 border-2 border-gray-300 border-opacity-100 text-gray-500 hover:border-indigo-800 hover:text-indigo-800 ">
          <span>Tags</span>
        </button>
      </section>
    </>
  );
};
export { ExploreTab };

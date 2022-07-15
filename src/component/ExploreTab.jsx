import { useDispatch, useSelector } from "react-redux";
import { filterAllPost } from "../features/filters/filterSlice";

const ExploreTab = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.post);

  return (
    <>
      <section className="flex justify-evenly my-5">
        <label htmlFor="sortByDate">SortByDate</label>
        <select
          onChange={(e) => dispatch(filterAllPost(e.target.value))}
          name=""
          className="px-3 py-1 border-2 border-gray-300 border-opacity-100 text-gray-500 hover:border-indigo-800 hover:text-indigo-800 "
          id="sortByDate"
        >
          <option value="OLDTONEW">Old to New</option>
          <option value="NEWTOOLD">New to Old</option>
        </select>

        <button
          onClick={() => dispatch(filterAllPost("TRENDING"))}
          className="px-3 py-1 border-2 border-gray-300 border-opacity-100 text-gray-500 hover:border-indigo-800 hover:text-indigo-800 "
        >
          <span>Trending</span>
        </button>
        <button
          onClick={() => dispatch(filterAllPost("RECENT"))}
          className="px-3 py-1 border-2 border-gray-300 border-opacity-100 text-gray-500 hover:border-indigo-800 hover:text-indigo-800"
        >
          <span>Recent</span>
        </button>
      </section>
    </>
  );
};
export { ExploreTab };

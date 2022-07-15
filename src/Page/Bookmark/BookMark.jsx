import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookmark } from "../../features/bookmark/bookmarkSlice";
import { Card } from "../../component/Card";
const BookMark = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);
  const { bookmarks } = useSelector((store) => store.bookmark);
  useEffect(() => {
    dispatch(getAllBookmark({ token }));
  }, []);
  return (
    <>
      {bookmarks?.map((post) => {
        return (
          <>
            <Card post={post} key={post._id} />
          </>
        );
      })}
    </>
  );
};
export { BookMark };

import "./App.css";
import { Header, MyRoutes } from "./Page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPost } from "./features/posts/postSlice";
import { getAllUser } from "./features/user/userSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <MyRoutes />
      <ToastContainer autoClose={2500} />
    </div>
  );
}

export default App;

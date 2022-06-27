import "./App.css";
import { Header, MyRoutes } from "./Page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Header />
      <MyRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;

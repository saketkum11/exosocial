import { Card } from "../../component/Card";
import { Post } from "../../component/Post";

const Home = () => {
  return (
    <>
      <div className="col-start-4 col-end-10">
        <Post />
        <Card />
      </div>
    </>
  );
};
export { Home };

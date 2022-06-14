import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar bg-dark   m-auto">
        <div className="container-fluid w-75">
          <Link to="/home" className="navbar-brand fs-3 mb-0 h1 text-white">
            ExoSocial
          </Link>
        </div>
      </nav>
    </>
  );
};
export { Header };

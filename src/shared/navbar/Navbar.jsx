import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import userPlaceholder from "../../assets/images/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gray-200 my-4 rounded-lg">
      <div className="lg:navbar-start"></div>
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex items-center">
        <img
          src={user ? user.photoURL : userPlaceholder}
          className="w-12 mr-4 rounded-full ring-4 ring-sky-500"
        />
        <div>
          {user ? (
            <button className="btn bg-white" onClick={logOut}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn bg-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

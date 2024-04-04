import moment from "moment";
import logo from "../../assets/images/logo.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} />
      <p className="text-xl my-2">Journalism Without Fear or Favor</p>
      <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      <div className="text-left flex items-center my-6">
        <button className="btn bg-red-500 text-white inline btn-sm px-8">
          Latest
        </button>
        <Marquee
          pauseOnHover="true"
          speed={100}
          gradient="true"
          gradientColor="white"
        >
          <div>
            <Link to="/" className="hover:link mx-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
            <Link to="/" className="hover:link mx-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
            <Link to="/" className="hover:link mx-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;

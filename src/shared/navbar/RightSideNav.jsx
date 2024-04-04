import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../assets/images/qZone1.png";
import qZone2 from "../../assets/images/qZone2.png";
import qZone3 from "../../assets/images/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="font-semibold text-2xl">Login With</h2>
        <div className="grid w-fit gap-1 mt-2">
          <button className="btn flex items-center gap-2 text-sky-500 hover:text-white hover:bg-sky-500 bg-white rounded-lg border-2 border-sky-500 hover:border-0 btn-sm">
            <FaGoogle /> Login with Google
          </button>
          <button className="btn flex items-center gap-2 text-gray-700 hover:text-white hover:bg-gray-700 bg-white rounded-lg border-2 border-gray-700 hover:border-0 btn-sm">
            <FaGithub /> Login with Github
          </button>
        </div>
      </div>
      <div className="my-4 lg:my-6">
        <h2 className="font-semibold text-2xl">Find us on</h2>
        <div className="mt-2">
          <a className="btn flex items-center justify-start gap-2 text-sky-500 hover:text-white hover:bg-sky-500 bg-white rounded-none border-sky-500 hover:border-0 btn-sm rounded-t-lg">
            <FaFacebook /> Facebook
          </a>
          <a className="btn flex items-center justify-start gap-2 text-sky-500 hover:text-white hover:bg-sky-500 bg-white rounded-none   border-sky-500 hover:border-0 btn-sm border-y-0">
            <FaTwitter /> Twitter
          </a>
          <a className="btn flex items-center justify-start gap-2 text-sky-500 hover:text-white hover:bg-sky-500 bg-white rounded-none border-sky-500 hover:border-0 btn-sm rounded-b-lg">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-2xl mb-2">Q-Zone</h2>
        <div>
          <img
            src={qZone1}
            className="hover:drop-shadow-lg hover:saturate-150"
          />
          <img
            src={qZone2}
            className="hover:drop-shadow-lg hover:saturate-150"
          />
          <img
            src={qZone3}
            className="hover:drop-shadow-lg hover:saturate-150"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;

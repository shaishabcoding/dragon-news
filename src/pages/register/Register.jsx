import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import picture from "../../assets/icons/picture.svg";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const [isShowPass, setIsShowPass] = useState(false);
  const [image, setImage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    );
    createUser(formData, () => {
      navigate("/");
    });
  };
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Please Register
        </h2>
        <form className="grid w-fit mx-auto gap-4" onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Enter your name"
              name="name"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <img src={image ? image : picture} className="w-[1em]" />
            <input
              type="url"
              className="grow"
              placeholder="Enter your image url"
              name="image"
              onChange={(e) => {
                setImage(e.target.value);
              }}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="Enter your email"
              name="email"
              required
            />
          </label>
          <div className="join">
            <label className="input input-bordered flex items-center gap-2 join-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={isShowPass ? "text" : "password"}
                className="grow"
                name="password"
                placeholder="Enter your password"
                required
                minLength="6"
                maxLength="20"
              />
            </label>
            <button
              className="btn join-item text-2xl px-2"
              onClick={(e) => {
                e.preventDefault();
                setIsShowPass(!isShowPass);
              }}
            >
              {isShowPass ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>
          <button type="submit" className="btn btn-primary ">
            Register
          </button>
        </form>
        <p className="w-fit mx-auto">
          Already have an account?{" "}
          <Link className="btn btn-link p-0" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

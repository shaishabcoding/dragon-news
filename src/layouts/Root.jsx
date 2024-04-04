import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-poppins lg:mx-20 my-10 mx-5 ">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;

import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-poppins lg:mx-20 lg:my-10">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;

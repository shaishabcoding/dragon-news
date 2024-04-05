import Header from "../../shared/header/Header";
import Navbar from "../../shared/navbar/Navbar";
import LeftSideNav from "../../shared/navbar/LeftSideNav";
import RightSideNav from "../../shared/navbar/RightSideNav";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const { name } = useContext(AuthContext);
  console.log(name);
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="lg:col-span-2 bg-green-300">
          <h2>News coming soon</h2>
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;

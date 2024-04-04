import Header from "../../shared/header/Header";
import Navbar from "../../shared/navbar/Navbar";
import LeftSideNav from "../../shared/navbar/LeftSideNav";
import RightSideNav from "../../shared/navbar/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h2 className="font-poppins">This is home</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="bg-gray-300">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="lg:col-span-2 bg-green-300">
          <h2>News coming soon</h2>
        </div>
        <div className="bg-gray-300">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;

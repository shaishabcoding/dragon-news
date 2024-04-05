import Header from "../../shared/header/Header";
import Navbar from "../../shared/navbar/Navbar";
import RightSideNav from "../../shared/navbar/RightSideNav";
import { useLoaderData } from "react-router-dom";
const News = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 grid gap-4">ksdj</div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;

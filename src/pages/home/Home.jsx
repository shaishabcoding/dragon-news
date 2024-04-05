import Header from "../../shared/header/Header";
import Navbar from "../../shared/navbar/Navbar";
import LeftSideNav from "../../shared/navbar/LeftSideNav";
import RightSideNav from "../../shared/navbar/RightSideNav";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./components/NewsCard";
const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="lg:col-span-2 grid gap-4">
          {news.map((aNews) => (
            <NewsCard key={aNews._id} news={aNews} />
          ))}
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;

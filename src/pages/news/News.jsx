import Header from "../../shared/header/Header";
import Navbar from "../../shared/navbar/Navbar";
import RightSideNav from "../../shared/navbar/RightSideNav";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
const News = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const news = useLoaderData();
  const aNews = news.find((n) => n._id === id);

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 grid h-fit gap-4 border border-gray-200 p-4 rounded-lg">
          <img src={aNews.image_url} className="w-full" />
          <h2 className="font-semibold text-2xl">{aNews.title}</h2>
          <p>{aNews.details}</p>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-error w-fit text-white"
          >
            <IoMdArrowRoundBack />
            Back
          </button>
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;

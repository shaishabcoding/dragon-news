import PropTypes from "prop-types";

const NewsCard = ({ news }) => {
  const { author, title, image_url, details, rating, total_view } = news;
  return (
    <div className="grid gap-4">
      <div className="w-full">
        <div className="flex items-center gap-2 bg-gray-50 rounded-t-lg p-4 border border-gray-300">
          <img src={author.img} className="w-10 rounded-full" />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="border-x border-gray-300 p-4 grid gap-4">
          <h2 className="font-semibold text-lg">{title}</h2>
          <img src={image_url} />
          <p>{details}</p>
        </div>
        <div className="border rounded-b-lg border-gray-300 p-4 bg-gray-50 flex justify-between items-center">
          <p>Rating: {rating.number}</p>
          <p>View: {total_view}</p>
        </div>
      </div>
    </div>
  );
};
NewsCard.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsCard;

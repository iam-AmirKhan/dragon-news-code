import { AiFillEye } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    details,
    author,
    total_view,
    rating,
    tags,
    others,
    production,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-xl border">
      <figure>
        <img src={thumbnail_url} alt="news" className="w-full h-64 object-cover" />
      </figure>

      <div className="card-body">

        {/* Title */}
        <h2 className="card-title text-xl font-bold">{title}</h2>

        {/* Author + Date */}
        <div className="flex items-center gap-3 mt-1">
          <img
            src={author.img}
            alt="author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        {/* Rating + Views */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="font-medium">{rating.number}</span>
            <span className="badge badge-warning badge-sm ml-2">
              {rating.badge}
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <AiFillEye />
            <span>{total_view}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="badge badge-outline badge-sm">
              #{tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2">
          {details.slice(0, 150)}...
        </p>

        {/* Footer Badges */}
        <div className="flex gap-2 mt-3">
          {others.is_today_pick && (
            <span className="badge badge-info badge-sm">Today’s Pick</span>
          )}
          {others.is_trending && (
            <span className="badge badge-error badge-sm">Trending</span>
          )}
          {production && (
            <span className="badge badge-success badge-sm">Production</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

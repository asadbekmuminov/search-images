import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import {
  AiFillLike,
  AiOutlineArrowRight,
  AiOutlineDownload,
} from "react-icons/ai";
function ImagePage() {
  const { id } = useParams();
  const {
    data: image,
    isPending,
    error,
  } = useFetch(
    `https://api.unsplash.com/photos/${id}?client_id=9bN7IKb-wNZsS4eaUWwTdnE9Ifn0doebQbBDF5-aDgQ`
  );
  console.log(image);
  return (
    <>
      {image && (
        <div className="card flex flex-col sm:flex-row  card-side bg-base-100 shadow-xl   mb-10">
          <figure className="w-full  rounded-r-[10px] sm:rounded-r-none sm:w-[30%]  ">
            <img
              className="h-full"
              src={image.urls.full}
              alt={image.alt_description}
            />
          </figure>
          <div className="card-body ">
            <div className="mb-7">
              <h2 className="text-2xl">
                <span className="font-bold">Description:</span>
                {image.alt_description}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold">Status:</span>
                {image.topic_submissions.status}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold">Author:</span>
                {image.user.name}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold">Location:</span>
                {image.user.location}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold">Author bio:</span>
                {image.user.bio}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold">Author username:</span>
                {image.user.username}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold">Author instagram username:</span>
                {image.user.instagram_username}
              </h2>
            </div>
            <div className="mb-auto">
              <span className="flex items-center gap-4 font-bold text-xl">
                <AiFillLike />
                {image.likes}
              </span>
              <Link
                className="flex items-center gap-4 text-xl font-bold"
                to={image.user.portfolio_url}
              >
                <AiOutlineArrowRight /> Portfolio
              </Link>
              <Link
                className="flex items-center gap-4 text-xl font-bold"
                to={image.urls.full}
              >
                <AiOutlineDownload /> Download
              </Link>
              <Link
                className="flex items-center gap-4 text-xl font-bold"
                to={image.urls.full}
              >
                <AiOutlineDownload /> User Instagram
              </Link>
            </div>
            <Link to="/" className="btn btn-outline btn-success ml-auto w-20 ">
              Home
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default ImagePage;

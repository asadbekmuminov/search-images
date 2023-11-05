import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function LikedPhotos() {
  const { likedPhotos } = useSelector((store) => store.unsplash);
  const likedPhotosFromLocalStorage = JSON.parse(
    localStorage.getItem("likedPhoto")
  );

  return (
    <>
      {likedPhotosFromLocalStorage ? (
        <ul className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mb-10">
          {likedPhotosFromLocalStorage.map((image) => (
            <li className="relative" key={image.id}>
              <Link to={`/image/${image.id}`}>
                <img
                  className="h-[350px] w-full max-w-[3000px] object-cover"
                  src={image.urls.full}
                  alt={image.alt_description}
                />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="text-center text-4xl mt-9 font-black">
          No your liked photos!
        </h1>
      )}
    </>
  );
}

export default LikedPhotos;

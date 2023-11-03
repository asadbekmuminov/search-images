// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useFetch } from "../hooks/useFetch";
// import Loading from "./Loading";

// function ImageList({ data }) {
//   const [searchValue, setSearchValue] = useState(data);
//   const checkLocalStorage = function () {
//     return localStorage.getItem("searchData");
//   };
//   const {
//     data: imageData,
//     isPending,
//     error,
//   } = useFetch(
//     ` https://api.unsplash.com/search/photos?client_id=9bN7IKb-wNZsS4eaUWwTdnE9Ifn0doebQbBDF5-aDgQ&page=1&query=${
//       checkLocalStorage() || "football"
//     }`
//   );
//   if (isPending) {
//     <Loading />;
//   }
//   useEffect(() => {
//     setSearchValue(data);
//   }, [data]);

//   return (
//     <div className="my-10 text-center">
//       {error && <div>{error}</div>}
//       {imageData && (
//         <ul className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mb-10">
//           {imageData.results.map((image) => (
//             <li key={image.id}>
//               <Link to={`/image/${image.id}`}>
//                 <img
//                   className="h-[350px] w-full max-w-[3000px] object-cover"
//                   src={image.urls.full}
//                   alt={image.alt_description}
//                 />
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//       <div className="join">
//         <button className="join-item btn">«</button>
//         <button className="join-item btn">Page 22</button>
//         <button className="join-item btn">»</button>
//       </div>
//     </div>
//   );
// }

// export default ImageList;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";

function ImageList({ data }) {
  const [searchValue, setSearchValue] = useState(data);
  const checkLocalStorage = function () {
    return localStorage.getItem("searchData");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: imageData,
    isPending,
    error,
  } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=9bN7IKb-wNZsS4eaUWwTdnE9Ifn0doebQbBDF5-aDgQ&page=${currentPage}&query=${
      checkLocalStorage() || "football"
    }`
  );

  useEffect(() => {
    setSearchValue(data);
  }, [data]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="my-10 text-center">
      {error && <div>{error}</div>}
      {isPending ? (
        <Loading />
      ) : (
        <>
          {imageData && (
            <ul className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mb-10">
              {imageData.results.map((image) => (
                <li key={image.id}>
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
          )}
          <div className="join">
            <button
              className="join-item btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              «
            </button>
            <button className="join-item btn" disabled>
              Page {currentPage}
            </button>
            <button
              className="join-item btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={imageData && currentPage === imageData.total_pages}
            >
              »
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ImageList;

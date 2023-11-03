import React, { useState } from "react";
import ImageList from "../components/ImageList";

function Home() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <h1 className="font-bold text-3xl mb-7">Search image:</h1>
      <form
        action=""
        className="flex items-center gap-4 mb-8"
        onSubmit={(e) => {
          e.preventDefault();
          const searchValue = e.target.elements.search.value;
          setSearchValue(searchValue);
          localStorage.setItem("searchData", searchValue);
          e.target.reset();
        }}
      >
        <input
          type="text"
          name="search"
          placeholder="search"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <button type="submit" className="btn btn-outline btn-success">
          Search
        </button>
      </form>
      <ImageList data={searchValue} />
    </div>
  );
}

export default Home;

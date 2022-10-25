import React, { useEffect, useState } from "react";
import axios from "axios";

// https://picsum.photos/v2/list?page=2&limit=100

const Photos2 = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  let [page, setPage] = useState(1);

  const getRandomPhotos = (page = 1) => {
    console.log("page", page);
    return axios
      .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
      .then(function (response) {
        // handle success

        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getRandomPhotos(page).then((images) => {
      console.log(images);
      const newImages = [...randomPhotos, ...images];
      console.log("new", newImages);
      setRandomPhotos(newImages);
    });
  }, [page]);

  const handleLoadMoreImages = () => {
    console.log("load more");
    setPage((preState) => preState + 1);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos?.map((img, index) => (
          <div
            key={img.id}
            className="p-3  bg-white rounded-lg shadow-md h-[200px]"
          >
            <img
              src={img.download_url}
              alt=""
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          className="px-8 py-4 bg-purple-500 text-white"
          onClick={handleLoadMoreImages}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos2;

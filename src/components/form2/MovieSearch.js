// https://api.themoviedb.org/3/movie/550?api_key=95f2419536f533cdaa1dadf83c606027
// https://api.themoviedb.org/3/search/movie?api_key=95f2419536f533cdaa1dadf83c606027&query=''
// Image API: https://image.tmdb.org/t/p/original

import axios from "axios";
import React, { useState, useEffect } from "react";
import LoadingSkeleton from "../loading/LoadingSkeleton";
import "./style.css";
import useDebounce from "./useDebouce";

const initMovie = [
  {
    adult: false,
    backdrop_path: "/1dQOKOn4VhGPckO9S4yzOlKc12N.jpg",
    genre_ids: [53],
    id: 114785,
    original_language: "fr",
    original_title: "Le Tigre aime la chair fraîche",
    overview:
      "A Turkish ambassador arrives in Paris to sign an important trade agreement, allowing Turkey to buy a sophisticated new war plane from France. Immediately he is the target of an assassin, and a special agent is assigned to protect him.",
    popularity: 1.4,
    poster_path: "/8rXOIQmdXMMXcDtvrs5O74BUICP.jpg",
    release_date: "1964-11-18",
    title: "Code Name: Tiger",
    video: false,
    vote_average: 4.6,
    vote_count: 4,
  },
];

const MovieSearch = () => {
  const [movies, setMovies] = useState(initMovie);
  const [param, setParam] = useState("batman");
  const [isLoading, setLoading] = useState(false);
  const queryDebounce = useDebounce(param, 1000);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryDebounce]);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=95f2419536f533cdaa1dadf83c606027&query=${param}`
    );
    if (response?.data?.results) {
      setMovies(response.data.results);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setParam(e.target.value);
  };

  return (
    <div className="p-10">
      <div className="p-5 w-full max-w-[500px] mb-20 mx-auto">
        <input
          type="text"
          className="w-full border border-purple-500 rounded-lg p-3"
          placeholder="Search movie ..."
          onChange={handleInputChange}
          value={param}
        />
      </div>
      {isLoading && (
        <div className="grid grid-cols-3 gap-10">
          <MovieLoading />
          <MovieLoading />
          <MovieLoading />
        </div>
      )}
      <div className="grid grid-cols-3 gap-10">
        {/* <MovieItem key="1" movie={movies[0]} />
        <MovieItem key="2" movie={movies[0]} />
        <MovieItem key="3" movie={movies[0]} /> */}

        {!isLoading &&
          movies.length > 0 &&
          movies.map((item) => <MovieItem key={item.id} movie={item} />)}
      </div>
    </div>
  );
};

export default MovieSearch;

/**
 *
adult: false
backdrop_path: "/1dQOKOn4VhGPckO9S4yzOlKc12N.jpg"
genre_ids: [53]
id: 114785
original_language: "fr"
original_title: "Le Tigre aime la chair fraîche"
overview: "A Turkish ambassador arrives in Paris to sign an important trade agreement, allowing Turkey to buy a sophisticated new war plane from France. Immediately he is the target of an assassin, and a special agent is assigned to protect him."
popularity: 1.4
poster_path: "/8rXOIQmdXMMXcDtvrs5O74BUICP.jpg"
release_date: "1964-11-18"
title: "Code Name: Tiger"
video: false
vote_average: 4.6
vote_count: 4
Image API: https://image.tmdb.org/t/p/original
 */

const MovieItem = ({ movie }) => {
  return (
    <div className="bg-white p-3 shadow-sm rounded-2xl flex flex-col">
      <div className="h-[297px] mb-10">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="content px-5 flex-1 flex flex-col">
        <h3 className="text-md text-black font-semibold mb-4">{movie.title}</h3>
        <p className="text-sm text-[#999] content mb-6">{movie.overview}</p>
        <div className="flex items-center gap-x-2 mt-auto">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
          </svg>

          <span className="font-semibold text-[#333]">
            {movie.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

const MovieLoading = () => {
  return (
    <div className="bg-white p-3 shadow-sm rounded-2xl flex flex-col">
      <div className="h-[297px] mb-10">
        <LoadingSkeleton height="100%" radius="16px" />
      </div>
      <div className="content px-5 flex-1 flex flex-col">
        <h3 className="text-md text-black font-semibold mb-4">
          <LoadingSkeleton height="20px" />
        </h3>
        <p className="text-sm text-[#999] content mb-6">
          <LoadingSkeleton height="10px" />
          <div className="h-2"></div>
          <LoadingSkeleton height="10px" />
          <div className="h-2"></div>
          <LoadingSkeleton height="10px" />
        </p>
        <div className="flex items-center gap-x-2 mt-auto">
          <LoadingSkeleton height="10px" width="10px" />

          <span className="font-semibold text-[#333]">
            <LoadingSkeleton height="10px" width="20px" />
          </span>
        </div>
      </div>
    </div>
  );
};

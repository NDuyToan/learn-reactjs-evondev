import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { debounce } from "lodash";
import useHackerNewsAPI from "../../hooks/useHackerNewsAPI";
// https://hn.algolia.com/api/v1/search?query=react

const HackerNewWithHook = () => {
  const { query, setQuery, loading, hits } = useHackerNewsAPI();

  return (
    <div>
      <h2>Hacker new</h2>
      <input
        type="text"
        defaultValue={query}
        onChange={debounce((e) => setQuery(e.target.value), 1000)}
        className="border border-green-500 p-5 m-3"
      />
      {loading && <p>Loading ...</p>}

      <ul>
        {!loading &&
          hits?.map((hit) => <li key={hit.objectID}>{hit.title}</li>)}
      </ul>
    </div>
  );
};

export default HackerNewWithHook;

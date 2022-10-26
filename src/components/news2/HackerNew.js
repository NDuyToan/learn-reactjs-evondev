import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { debounce } from "lodash";
// https://hn.algolia.com/api/v1/search?query=react

const HackerNew = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(false);

  const handleFetchData = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      console.log("data", data);
      setHits(data?.data?.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

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

export default HackerNew;

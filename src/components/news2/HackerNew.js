import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { debounce } from "lodash";
// https://hn.algolia.com/api/v1/search?query=react

const HackerNew = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const handleFetchData = useRef(null);
  const isMounted = useRef(true);

  useEffect(() => {
    //
    console.log("render", isMounted.current);
    return () => {
      // unmounted

      console.log("unmounted");
      isMounted.current = false;
    };
    // chỉ chạy 1 lần thôi, khi unmounted mới chạy,  nếu k để thì mỗi lần render lại nó sẽ chạy.
  }, []);

  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const data = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      console.log("isMounted", isMounted.current);
      setTimeout(() => {
        if (isMounted.current) {
          console.log("set hits");
          setHits(data?.data?.hits || []);
          setLoading(false);
        }
      }, 3000);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData.current();
    return () => {
      console.log("un mounted 2");
    };
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

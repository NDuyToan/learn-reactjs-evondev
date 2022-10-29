import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function useHackerNewsAPI() {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const handleFetchData = useRef(null);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      // unmounted

      isMounted.current = false;
    };
  }, []);

  handleFetchData.current = async () => {
    setLoading(true);
    console.log("query", query);
    try {
      const data = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      console.log("isMounted", isMounted.current);

      if (isMounted.current) {
        setHits(data?.data?.hits || []);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData.current();
    return () => {};
  }, [query]);

  return {
    query,
    setQuery,
    loading,
    hits,
  };
}

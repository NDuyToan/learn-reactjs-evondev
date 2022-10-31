import React, { useState, useEffect } from "react";
//https://hn.algolia.com/api/v1/search?query=${query}

function withLoading(Component, url) {
  return (props) => {
    const [news, setNews] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const res = await fetch(url);
        const data = await res.json();
        console.log("data", data?.hits);
        setNews(data?.hits);
      }
      fetchData();
    }, []);
    if (!news || news.length === 0) return <div>Loading ...</div>;
    return <Component news={news} {...props}></Component>;
  };
}

export default withLoading;

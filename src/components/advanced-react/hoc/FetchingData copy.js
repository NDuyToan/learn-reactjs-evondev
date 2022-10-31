import React from "react";
// import withError from "./withError";
import withLoading from "./withLoading";
// Higher Order Component
// connect, loading
const FetchingData = ({ news }) => {
  console.log("FetchingData ~ data", news);
  return (
    <div>
      {news?.map((item) => (
        <div key={item.objectID}>{item.title}</div>
      ))}
    </div>
  );
};

export default withLoading(
  FetchingData,
  "https://hn.algolia.com/api/v1/search?query=css"
);

// export default withError(
//   withLoading(FetchingData, "https://hn.algolia.com/api/v1/search?query=css")
// );

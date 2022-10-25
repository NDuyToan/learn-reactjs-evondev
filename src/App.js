import React from "react";

import Card from "./components/card2/Card";
import Card2 from "./components/card2/Card2";
import CardList from "./components/card2/CardList";
import { GlobalStyles } from "./GlobalStyles";

const App = () => {
  return (
    <div style={{ padding: "10px", backgroundColor: "#eee", height: "1000px" }}>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card2 />
        <Card2 />
        <Card2 />
      </CardList>
    </div>
  );
};

export default App;

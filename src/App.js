import React from "react";

import Card from "./components/card2/Card";
import CardList from "./components/card2/CardList";
import { GlobalStyles } from "./GlobalStyles";

const App = () => {
  return (
    <div style={{ padding: "10px", backgroundColor: "#eee", height: "1000px" }}>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card secondary />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </div>
  );
};

export default App;

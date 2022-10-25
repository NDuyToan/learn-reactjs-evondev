import React from "react";
import styled from "styled-components";

import Card from "./components/card2/Card";
import CardList from "./components/card2/CardList";

const App = () => {
  return (
    <div style={{ padding: "10px", backgroundColor: "#eee", height: "1000px" }}>
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

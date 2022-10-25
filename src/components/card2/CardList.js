import React from "react";
import styled from "styled-components";

const StyleCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 100px;
  padding: 30px;

  .user-name {
    color: blue;
  }
`;

const CardList = (props) => {
  return (
    <>
      <StyleCardList>{props.children}</StyleCardList>;
      <h2 className="user-name"> sao lang thang</h2>
    </>
  );
};

export default CardList;

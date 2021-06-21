import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 40vw;
    object-fit: contain;
  }

  div {
    flex: 1;
  }
`;

const SingleGame = ({
  location: { name, id, image, description, category, price },
}) => {
  return (
    <Wrapper>
      <img src={image} alt={name} />

      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <span>{category}</span>
        <h2>{price} $</h2>
      </div>
    </Wrapper>
  );
};

export default SingleGame;

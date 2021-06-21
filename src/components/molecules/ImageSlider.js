import React from "react";
import Button from "@material-ui/core/Button";
import { paths } from "../../paths";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  .btn {
    text-decoration: none;
  }
`;

const ImageSlider = ({ image }) => {
  return (
    <>
      <img src={image} />
      <ButtonWrapper>
        <Link to={paths.PRODUCTS} className="btn">
          <Button
            className="btn"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<VideogameAssetIcon />}
          >
            Browse games
          </Button>
        </Link>
      </ButtonWrapper>
    </>
  );
};

export default ImageSlider;

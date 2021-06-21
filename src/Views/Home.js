import React from "react";
import styled from "styled-components";
import { Carousel } from "3d-react-carousal";
import Biomutant from "../assets/images/biomutant.jpg";
import CyberPunk from "../assets/images/cyberpunk.jpg";
import Halo from "../assets/images/halo.jpg";
import DyingLight2 from "../assets/images/dying-light.jpg";
import ImageSlider from "../components/molecules/ImageSlider";

const HomeWrapper = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 3rem;
  justify-content: space-between;
  .react-3d-carousel {
    margin-top: 3rem;
    margin-right: 2rem;
  }

  section {
    margin-top: 2rem;
    justify-self: flex-end;
  }
  .btn {
    margin-top: 1rem;
  }
  Link {
    text-decoration: none;
  }
`;

const slides = [
  <ImageSlider image={Biomutant} />,
  <ImageSlider image={CyberPunk} />,
  <ImageSlider image={Halo} />,
  <ImageSlider image={DyingLight2} />,
];
const Home = () => {
  return (
    <HomeWrapper>
      <div>
        <h1>New and trending</h1>
        <h3>Based on player counts and release date</h3>
      </div>
      <Carousel slides={slides} autoplay={true} interval={10000} />
    </HomeWrapper>
  );
};

export default Home;

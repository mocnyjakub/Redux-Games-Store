import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { paths } from "../paths";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { addProductToCart } from "../Redux/Acions";

const useStyles = makeStyles({
  Typography: {
    width: `100%`,
  },
  btn: {
    textDecoration: "none",
  },
});

const HomeWrapper = styled.main`
  margin-top: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  display: grid;
  flex-direction: column;
  min-height: 100vh;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

const GameCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #202020;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
`;
const GameImg = styled.div`
  flex: 1;
  width: 100%;
  background-image: url(${({ src }) => `${src}`});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const TextWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  p {
    margin: 0.5rem 0;
  }
  span {
    color: #bbb;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  h3 {
    margin-right: 1rem;
  }
`;
const Products = ({ products, addProductToCart }) => {
  const classes = useStyles();
  return (
    <>
      <HomeWrapper>
        {products.map((props) => {
          const { name, id, image, description, category, price } = props;
          return (
            <GameCard key={id}>
              <GameImg src={image} />
              <TextWrapper>
                <h2>{name}</h2>
                <Typography className={classes.Typography} noWrap>
                  {description}
                </Typography>
                <PriceContainer>
                  <h3>{price} $</h3>
                  <Button
                    onClick={() => addProductToCart(props)}
                    color="primary"
                    variant="contained"
                    className={classes.btn}
                  >
                    Buy
                  </Button>
                </PriceContainer>

                <Link
                  className={classes.btn}
                  to={{
                    pathname: `/games/${name.replace(/\s/g, "-")}`,
                    state: name,
                    id,
                    image,
                    description,
                    category,
                    price,
                  }}
                >
                  <Button
                    color="secondary"
                    className={classes.btn}
                    endIcon={<ExpandMoreIcon />}
                  >
                    Show more info
                  </Button>
                </Link>
              </TextWrapper>
            </GameCard>
          );
        })}
      </HomeWrapper>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});
const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => dispatch(addProductToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

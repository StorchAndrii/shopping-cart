import React, { useEffect } from "react";
import "./App.css";
import Title from "./components/Title";
import Product from "./components/Product";
import Subtitle from "./components/Subtitle";
import Image from "./components/Image";
import Flex from "./components/Flex";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";

const App = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const products = useSelector((state: RootState) => state.products.products);
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  console.log(total);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_PRODUCTS" });
  }, [dispatch]);

  return (
    <>
      <Flex justify={"space-around"}>
        <Flex direction={"column"} width={"50%"}>
          <Title>Hello</Title>
          <Subtitle>add items to cart</Subtitle>
          {products.map((item, i) => (
            <Product key={i} product={item} />
          ))}
        </Flex>
        <Flex
          width={"50%"}
          justify={"center"}
          margin={"24px 0 0 0"}
          direction={"column"}
          align={"center"}
        >
          <Image img={"/images/cart.svg"} width={"60px"} height={"40px"} />
          <Subtitle>Total: {total}$</Subtitle>
          {cartItems.map((item) => (
            <Product key={item.id} product={item} cart={true} />
          ))}{" "}
        </Flex>
      </Flex>
    </>
  );
};

export default App;

import React, { FC, useEffect } from "react";
import Flex from "../Flex";

import Image from "../Image";
import Dotted from "../Dotted";
import Subtitle from "../Subtitle";
import { useAppDispatch } from "../../store/hooks";
import { addToCart, removeFromCart } from "../../store/cart/cart.reducer";
import { IProduct } from "../../interface/product.interface";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface IProps {
  product: IProduct;
  cart?: boolean;
}

const Product: FC<IProps> = ({ product, cart = false }) => {
  const dispatch = useAppDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(product.id));
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [addToCartHandler, removeFromCartHandler]);
  return (
    <Flex margin={"0 auto"} align={"flex-end;"} width={"80%"}>
      <Flex direction={"column"} margin={"16px 0 0 "}>
        <Image img={product.image} />
        <Subtitle>{product.name}</Subtitle>
      </Flex>
      <Dotted />
      <Subtitle width={"80px"}>
        {cart ? `quantity: ${product.quantity} ` : ""}
      </Subtitle>
      <Dotted />
      <Subtitle width={"200px"}>
        {cart ? "total-price:  " : ""}
        {product.price}$
      </Subtitle>
      {!cart && (
        <Subtitle
          fontSize={"42px"}
          margin={"0 16px 0 16px "}
          cursor={"pointer"}
          onClick={addToCartHandler}
        >
          +
        </Subtitle>
      )}
      {/*<Subtitle>/</Subtitle>*/}
      {cart && (
        <Subtitle
          fontSize={"42px"}
          margin={"0 16px 0 16px "}
          cursor={"pointer"}
          onClick={removeFromCartHandler}
        >
          -
        </Subtitle>
      )}
    </Flex>
  );
};

export default Product;

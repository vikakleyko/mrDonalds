import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../functions/context";
import bannerImg from "../../images/banner.png";
import shoppingCart from "../../images/cart.png";
import { device } from "../Style/ResponsiveStyle";

const BannerItem = styled.div`
  height: 200px;
  width: 100%;
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: center;
`;

const BurgerMenu = styled.div`
  position: absolute;
  display: none;
  background-image: url(${shoppingCart});
  background-size: cover;
  background-position: center;
  height: 35px;
  width: 35px;
  left: 30px;
  top: 110px;

  @media ${device.mobile} {
    display: block;
  }
`;

export const Banner = () => {
  const {
    openOrderList: { openOrderList, changeState }
  } = useContext(Context);
  return (
    <>
      <BannerItem>
        <BurgerMenu id="cart" onClick={(e) => changeState(e)}/>
      </BannerItem>
    </>
  );
};

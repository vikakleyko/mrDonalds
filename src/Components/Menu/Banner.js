import React from "react";
import styled from "styled-components";
import bannerImg from "../../images/banner.png";

const BannerItem = styled.div`
  height: 200px;
  width: 100%;
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: center;
`;

export const Banner = () => <BannerItem />;

import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../functions/context";
import { toLocaleStr } from "../functions/secondaryFunctions";
import { device } from "../Style/ResponsiveStyle";

const List = styled.ul`
  display: flex;
  justyfy-content: space-around;
  flex-wrap: wrap;
`;

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
  margin: 30px 30px 0 0;
  padding: 15px;
  color: white;
  font-size: 30px;
  z-index: 1;
  transition: 0.3s;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 50%;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px rgba(0, 0, 0, 1);
    &:after {
      opacity: 0;
    }
  }
  @media ${device.mobile} {
    margin: 15px auto;
  }
`;

export const ListItem = ({ itemList }) => {
  const {
    openItem: { setOpenItem },
  } = useContext(Context);

  return (
    <List>
      {itemList.map((item) => (
        <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
          <p>{item.name}</p>
          <p>{toLocaleStr(item.price)}</p>
        </Item>
      ))}
    </List>
  );
};

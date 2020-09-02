import React from "react";
import styled from "styled-components";
import trashImage from "../../images/trash.svg";
import { totalPriceItems } from "../functions/secondaryFunctions";
import { toLocaleStr } from "../functions/secondaryFunctions";

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0 0 0;
  flex-wrap: wrap;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const TrashButton = styled.button`
  height: 24px;
  width: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const Toppings = styled.div`
  font-size: 14px;
  color: #9a9a9a;
  width: 100%;
`;

export const OrderListItem = ({ order, deleteItem }) => {
  const toppings = order.topping
    .filter((item) => item.checked)
    .map((item) => item.name)
    .join(", ");

  return (
    <>
      <OrderItemStyled>
        <ItemName>{order.name} {order.choice}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{toLocaleStr(totalPriceItems(order))}</ItemPrice>
        <TrashButton onClick={() => deleteItem(order)}/>
        {toppings && <Toppings>{toppings}</Toppings>}
      </OrderItemStyled>
    </>
  );
};

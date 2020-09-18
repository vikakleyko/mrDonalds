import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../functions/context";
import { AddButton } from "../Style/AddButton";
import { OrderListItem } from "./OrderListItem";
import { totalPriceItems } from "../functions/secondaryFunctions";
import { toLocaleStr } from "../functions/secondaryFunctions";
import { Title, Total, TotalPrice } from "../Style/OrderStyle";
import { device } from "../Style/ResponsiveStyle";

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  width: 380px;
  top: 80px;
  min-width: 380px;
  height: calc(100% - 80px);
  background: #fff;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;

  @media ${device.mobile} {
    display: none;
  }
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const EmptyList = styled.p`
  text-align: center;
`;

export const Order = () => {
  const {
    orders: { orders, setOrders },
    auth: { authentication, logIn },
    orderConfirm: { setOrderOpenConfirm },
    openOrderList: { openOrderList, changeState }
  } = useContext(Context);

  const total = orders.reduce((acc, order) => acc + totalPriceItems(order), 0);

  const totalCounter = orders.reduce((acc, order) => acc + order.count, 0);

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <OrderStyled id="order-list">
      <Title>YOUR ORDER</Title>
      <OrderContent>
        {orders.length ? (
          <OrderList>
            {orders.map((order, index) => (
              <OrderListItem
                deleteItem={deleteItem}
                key={index}
                order={order}
                index={index}
              />
            ))}
          </OrderList>
        ) : (
          <EmptyList>No orders</EmptyList>
        )}
      </OrderContent>
      {orders.length ? (
        <Total>
          <span>Pay:</span>
          <span>{totalCounter}</span>
          <TotalPrice>{toLocaleStr(total)}</TotalPrice>
        </Total>
      ) : null}
      {orders.length ? (
        <AddButton
          onClick={() => (authentication ? setOrderOpenConfirm(true) : logIn())}
        >
          Checkout order
        </AddButton>
      ) : null}
    </OrderStyled>
  );
};

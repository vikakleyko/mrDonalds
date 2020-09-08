import React from "react";
import styled from "styled-components";
import { AddButton } from "../Style/AddButton";
import { OrderListItem } from "./OrderListItem";
import { totalPriceItems } from "../functions/secondaryFunctions";
import { toLocaleStr } from "../functions/secondaryFunctions";
import { projection } from "../functions/secondaryFunctions";

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
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

const EmptyList = styled.p`
  text-align: center;
`;

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
            arr => arr.length ? arr : 'no topping'],
  choice: ['choice', item => item ? item : 'no choices'],
}

export const Order = ({ orders, setOrders, setOpenItem,  authentication, logIn, firebaseDatabase }) => {
  const dataBase = firebaseDatabase();
  const sendOrder = () => {
      const newOrder = orders.map(projection(rulesData));
      dataBase.ref('orders').push().set({
        nameClient: authentication.displayName,
        email: authentication.email,
        order: newOrder,
      })
      setOrders([]);
  }

  const total = orders.reduce((acc, order) => acc + totalPriceItems(order), 0);

  const totalCounter = orders.reduce((acc, order) => acc + order.count, 0);

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <OrderStyled>
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
                setOpenItem={setOpenItem}
              />
            ))}
          </OrderList>
        ) : (
          <EmptyList>No orders</EmptyList>
        )}
      </OrderContent>
      <Total>
        <span>Pay:</span>
        <span>{totalCounter}</span>
        <TotalPrice>{toLocaleStr(total)}</TotalPrice>
      </Total>
      <AddButton onClick={() => (authentication) ? sendOrder() : logIn()}>Checkout order</AddButton>
    </OrderStyled>
  );
};

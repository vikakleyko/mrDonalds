import React from "react";
import styled from "styled-components";
import { AddButton } from "../Style/AddButton";
import { OrderListItem } from "./OrderListItem";
import { totalPriceItems } from "../functions/secondaryFunctions";
import { toLocaleStr } from "../functions/secondaryFunctions";

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  laft: 0;
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

export const Order = ({ orders }) => {

  const total = orders.reduce((acc, order) => acc + totalPriceItems(order), 0)

  return (
    <OrderStyled>
      <Title>YOUR ORDER</Title>
      <OrderContent>
        {orders.length ? (
          <OrderList>
            {orders.map( order => <OrderListItem key={order.id} order={order}/>)}
          </OrderList>
        ) : (
          <EmptyList>No orders</EmptyList>
        )}
      </OrderContent>
      <Total>
        <span>Pay:</span>
        <span>5</span>
        <TotalPrice>{toLocaleStr(total)}</TotalPrice>
      </Total>
      <AddButton>Checkout order</AddButton>
    </OrderStyled>
  );
};

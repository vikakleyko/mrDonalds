import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../functions/context";
import { AddButton } from "../Style/AddButton";
import { Overlay, Title, Total, TotalPrice } from "../Style/OrderStyle";
import { projection } from "../functions/secondaryFunctions";
import { totalPriceItems } from "../functions/secondaryFunctions";
import { toLocaleStr } from "../functions/secondaryFunctions";

const Modal = styled.div`
  background-color: white;
  width: 600px;
  padding: 30px;
`;

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const rulesData = {
  name: ["name"],
  price: ["price"],
  count: ["count"],
  topping: [
    "topping",
    (arr) => arr.filter((obj) => obj.checked).map((obj) => obj.name),
    (arr) => (arr.length ? arr : "no topping"),
  ],
  choice: ["choice", (item) => (item ? item : "no choices")],
};

const sendOrder = (database, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));
  database.ref("orders").push().set({
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder,
  });
};

export const OrderConfirm = ({ database }) => {
  const {
    orders: { orders, setOrders },
  } = useContext(Context);
  const {
    auth: { authentication },
  } = useContext(Context);
  const {
    orderConfirm: { setOrderOpenConfirm },
  } = useContext(Context);

  const total = orders.reduce((acc, order) => acc + totalPriceItems(order), 0);

  const closeModal = (e) => {
    if (e.target.id === "overlay-confirm") {
      setOrderOpenConfirm(false);
    }
  };

  return (
    <Overlay id="overlay-confirm" onClick={closeModal}>
      <Modal>
        <Title>{authentication.displayName}</Title>
        <Text>Please confim your order</Text>
        <Total>
          <span>To pay</span>
          <TotalPrice>{toLocaleStr(total)}</TotalPrice>
        </Total>
        <AddButton
          onClick={() => {
            sendOrder(database, orders, authentication);
            setOrders([]);
            setOrderOpenConfirm(false);
            document.getElementById("message").style.display = "block";
            setTimeout(() => {
              document.getElementById("message").style.display = "none";
            }, 2000);
          }}
        >
          Confirm
        </AddButton>
      </Modal>
    </Overlay>
  );
};

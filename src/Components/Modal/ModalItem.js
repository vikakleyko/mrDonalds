import React, { useContext } from "react";
import styled from "styled-components";
import { Context, ContextItem } from "../functions/context";
import { AddButton } from "../Style/AddButton";
import { CountItem } from "../Modal/CountItem";
import { useCount } from "../Hooks/useCount";
import { totalPriceItems } from "../functions/secondaryFunctions";
import { toLocaleStr } from "../functions/secondaryFunctions";
import { Toppings } from "./Toppings";
import { Choices } from "./Choices";
import { useToppings } from "../Hooks/useTopping";
import { useChoices } from "../Hooks/useChoices";
import { Overlay } from "../Style/OrderStyle";

const Modal = styled.div`
  background-color: white;
  width: 600px;
  height: 600px;
  position: relative;
`;

const Banner = styled.div`
  height: 200px;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const Content = styled.section`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 200px);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Pacifico", cursive;
  font-size: 24px;
  font-weight: 700;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalItem = () => {
  const {
    openItem: { openItem, setOpenItem },
  } = useContext(Context);
  const {
    orders: { orders, setOrders },
  } = useContext(Context);

  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;

  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <ContextItem.Provider
      value={{
        counter,
        toppings,
        choices
      }}
    >
      <Overlay id="overlay" onClick={closeModal}>
        <Modal>
          <Banner img={openItem.img} />
          <Content>
            <HeaderContent>
              <div>{openItem.name}</div>
              <div>{toLocaleStr(openItem.price)}</div>
            </HeaderContent>
            <CountItem />
            {openItem.toppings && <Toppings />}
            {openItem.choices && <Choices openItem={openItem} />}
            <TotalPriceItem>
              <span>Price:</span>
              <span>{toLocaleStr(totalPriceItems(order))}</span>
            </TotalPriceItem>
            <AddButton
              disabled={order.choices && !order.choice}
              onClick={isEdit ? editOrder : addToOrder}
            >
              {isEdit ? "Edit" : "Add"}
            </AddButton>
          </Content>
        </Modal>
      </Overlay>
    </ContextItem.Provider>
  );
};

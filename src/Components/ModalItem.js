import React from "react";
import styled from "styled-components";
import { AddButton } from "./AddButton";

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

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
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Pacifico;
`;

const HeaderItem = styled.span`
  font-size: 30px;
  padding: 0 37px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {
  function closeModal(e) {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Header>
          <HeaderItem>{openItem.name}</HeaderItem>
          <HeaderItem>{openItem.price}</HeaderItem>
        </Header>
        <AddButton />
      </Modal>
    </Overlay>
  );
};

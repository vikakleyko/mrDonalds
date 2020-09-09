import React from "react";
import styled, { keyframes } from "styled-components";
import { ListItem } from "./ListItem";
import { Banner } from "./Banner";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const spin = keyframes`
  0% {
    transform: translate(-50%,-50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%,-50%) rotate(360deg);
  }
`;

const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100% !important;
  height: 100% !important;
`;

const LoaderContainer = styled.div`
  position: relative;
  padding-top: 50%;
  background: #f0f0f0;
  &::before {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    border: 5px solid red;
    border-color: transparent grey transparent grey;
    border-radius: 50%;
    animation: ${spin} 2s linear infinite;
  }
`;

export const Menu = ({ setOpenItem, dbMenu }) => {

  return (
    <MenuStyled>
      <Banner />
      {dbMenu ? (
        <>
          <SectionMenu>
            <h2>Burgers</h2>
            <ListItem setOpenItem={setOpenItem} itemList={dbMenu.burger} />
          </SectionMenu>
          <SectionMenu>
            <h2>Snacks & Drinks</h2>
            <ListItem setOpenItem={setOpenItem} itemList={dbMenu.other} />
          </SectionMenu>
        </>
      ) : (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
    </MenuStyled>
  );
};

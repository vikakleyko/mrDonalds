import React from "react";
import styled from "styled-components";
import logoImg from "../../images/logo.svg";
import signinImg from "../../images/sign.svg";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

// button style
const Button = styled.button`
  width: 90px;
  padding: 6px 20px;
  cursor: pointer;
  font-size: 16px;
  border: none;
  border-radius: 3px;
  outline: none;
  opacity: 0.8;
  background-color: #fa8f02;
  color: white;
  transition: 0.2s;
  &:hover {
    opacity: 1;
  }
`;

const Login = styled.button`
  background-color: transparent;
  color: white;
  font-size: 16px;
  border: none;
  outline: none;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.7;
  }
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>MrDonald's</H1>
    </Logo>
    <Login>
      <img src={signinImg} alt="sign in"/>
      <p>Sign in</p>
    </Login>
  </NavBarStyled>
);

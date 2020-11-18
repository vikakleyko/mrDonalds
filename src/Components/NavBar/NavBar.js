import React, { useContext } from "react";
import styled from "styled-components";
import logoImg from "../../images/logo.svg";
import signinImg from "../../images/sign.svg";
import { Context } from "../functions/context";
import { device } from "../Style/ResponsiveStyle";
import { useEmployee } from "../Hooks/useEmployee";

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

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const Logout = styled.span`
  font-size: 20px;
  font-weight: 700px;
  cursor: pointer;
  margin-right: 30px;
  @media ${device.mobile} {
    margin-right: 10px;
  }
`;

const Figure = styled.figure`
  margin: 0 30px;
  @media ${device.mobile} {
    margin: 0 10px;
  }
`;

const Figcaption = styled.figcaption`
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const NavBar = () => {
  const {
    auth: { authentication, logIn, logOut },
    employee: {employee}
  } = useContext(Context);

  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="logo" />
        <H1>MrDonald's</H1>
      </Logo>
      {employee && (
        <figcaption>Employee of the month: {employee.name.first} </figcaption>
      )}
      
      <a
        href="https://mrdonalds-894a8.web.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        *learn more on website
      </a>

      {authentication ? (
        <User>
          <Figure>
            <img
              style={{ width: "35px" }}
              src={signinImg}
              alt={authentication.displayName}
            />
            <Figcaption>{authentication.displayName}</Figcaption>
          </Figure>
          <Logout title="Logout" onClick={logOut}>
            X
          </Logout>
        </User>
      ) : (
        <Login onClick={logIn}>
          <Figure>
            <img src={signinImg} alt="sign in" />
            <figcaption>Sign in</figcaption>
          </Figure>
        </Login>
      )}
    </NavBarStyled>
  );
};

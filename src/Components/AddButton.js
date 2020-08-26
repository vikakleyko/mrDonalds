import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  background-color: #299b01;
  color: white;
  padding: 20px 80px;
  border: none;
  font-size: 21px;
  outline: none;
  left: 50%;
  transform: translateX(-50%);
  bottom: 43px;
`;

export const AddButton = () => <Button>Add</Button>;

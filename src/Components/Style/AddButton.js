import styled from "styled-components";

export const AddButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 65px;
  font-size: inherit;
  font-family: inherit;
  background-color: #299b01;
  color: white;
  border-color: transparent;
  outline: none;
  cursor: pointer;
  transition-property: color, background-color, border-color;
  transition-duration: 0.3s;
  &:hover {
    background-color: #fff;
    color: #299b01;
    border-color: #299b01;
  }
  &:disabled {
    background-color: #ccc;
    color: #bbb;
    border-color: #aaa;
  }
`;
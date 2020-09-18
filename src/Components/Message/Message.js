import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: white;
    color: black;
    border: 1px solid black;
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 1000;
    padding: 20px 30px;
    border-radius: 8px;
    display: none;
`;

export const Message = () => {
    return (
    <Wrapper id="message">
        Thanks for your order!
    </Wrapper>
    )
}

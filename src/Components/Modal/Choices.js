import React from "react";
import styled from "styled-components";

const ChoiceWrap = styled.div`
  column-count: 2;
  max-width: 500px;
  margin: 0 auto;
  column-gap: 15px;
`;

const ChoiceRadio = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;

const ChoiceLabel = styled.label`
  cursor: pointer;
  display: block;
`;

export function Choices({ changeChoice, choice, openItem }) {
  return (
    <ChoiceWrap>
      {openItem.choices.map((item, i) => (
          <ChoiceLabel key={i}>
            <ChoiceRadio type="radio"
            name="choices"
            checked={choice === item}
            value={item}
            onChange={changeChoice} />{item}
          </ChoiceLabel>
        ))}
    </ChoiceWrap>
  );
}

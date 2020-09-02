import React from "react";
import { Wrapper, Label, Check } from "../Style/ChoicesStyle";

export function Choices({ changeChoice, choice, openItem }) {
  return (
    <Wrapper>
      {openItem.choices.map((item, i) => (
          <Label key={i}>
            <Check type="radio"
            name="choices"
            checked={choice === item}
            value={item}
            onChange={changeChoice} />{item}
          </Label>
        ))}
    </Wrapper>
  );
}

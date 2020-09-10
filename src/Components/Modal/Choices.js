import React, { useContext } from "react";
import { ContextItem } from "../functions/context";
import { Wrapper, Label, Check } from "../Style/ChoicesStyle";

export function Choices({ openItem }) {
  const { choices: { changeChoice, choice } } = useContext(ContextItem);

  return (
    <Wrapper>
      {openItem.choices.map((item, i) => (
        <Label key={i}>
          <Check
            type="radio"
            name="choices"
            checked={choice === item}
            value={item}
            onChange={changeChoice}
          />
          {item}
        </Label>
      ))}
    </Wrapper>
  );
}

import React from "react";
import { Wrapper, Label, Check } from "../Style/ChoicesStyle";

export function Toppings({ toppings, checkToppings }) {
  return (
    <>
      <h3>Add ons</h3>
      <Wrapper>
        {toppings.map((item, i) => (
          <Label key={i}>
            <Check type="checkbox"
            checked={item.cheked}
            onChange={() => checkToppings(i)} />{item.name}
          </Label>
        ))}
      </Wrapper>
    </>
  );
}

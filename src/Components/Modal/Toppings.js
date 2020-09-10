import React, { useContext } from "react";
import { ContextItem } from "../functions/context";
import { Wrapper, Label, Check } from "../Style/ChoicesStyle";

export function Toppings() {
  const { toppings: { toppings, checkToppings } } = useContext(ContextItem);
  return (
    <>
      <h3>Add ons</h3>
      <Wrapper>
        {toppings.map((item, i) => (
          <Label key={i}>
            <Check type="checkbox"
            checked={item.checked}
            onChange={() => checkToppings(i)} />{item.name}
          </Label>
        ))}
      </Wrapper>
    </>
  );
}

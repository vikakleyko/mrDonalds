import { useState } from "react";

export function useOpenOrderList() {
  const [openOrderList, setOpenOrderList] = useState(false);

  const changeState = (e) => {
    const orderList = document.getElementById("order-list");
    const menu = document.getElementById("menu");
    if (!openOrderList) {
      setOpenOrderList(true);
      orderList.style.display = "flex";
      menu.style.display = "none";
    } else {
      setOpenOrderList(false);
      orderList.style.display = "none";
      menu.style.display = "block";
    }
  };

  return { openOrderList, changeState };
}

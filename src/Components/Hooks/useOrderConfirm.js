import { useState } from "react";

export function useOrderConfirm() {
    const [orderOpenConfirm, setOrderOpenConfirm] = useState(false);
    return { orderOpenConfirm, setOrderOpenConfirm };
}
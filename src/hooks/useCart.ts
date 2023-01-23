import { useContext } from "react";
import { CartContext } from "../contexts/CardContext";

export function useCart() {
    const context = useContext(CartContext);
    return context;
  }
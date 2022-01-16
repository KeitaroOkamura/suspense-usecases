import { useContext } from "react";
import { ModalContext, ModalContextValueType } from ".";

export const useModalContext = (): ModalContextValueType => {
  return useContext(ModalContext);
};

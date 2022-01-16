import { FunctionComponent, ReactNode, createContext } from "react";
import { FullscreenModal } from "~/components/FullscreenModal";
import { useModalProvider } from "./modal-provider.hook";

type ModalProviderProps = {
  children: ReactNode;
};

export type ModalContextValueType = {
  open: () => void;
  close: () => void;
};

export const ModalContext = createContext<ModalContextValueType>({
  open: () => undefined,
  close: () => undefined,
});

export const ModalProvider: FunctionComponent<ModalProviderProps> = (props) => {
  const { children } = props;
  const { showModal: isOpen, open, close } = useModalProvider();

  return (
    <ModalContext.Provider value={{ open, close }} {...props}>
      {children}
      {isOpen && <FullscreenModal isOpen={isOpen} close={close} />}
    </ModalContext.Provider>
  );
};

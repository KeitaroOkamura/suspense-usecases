import { useState, useCallback } from "react";

export const useModalProvider = () => {
  const [showModal, setShowModal] = useState(false);

  const open = useCallback(() => setShowModal(true), [setShowModal]);

  const close = useCallback(() => setShowModal(false), [setShowModal]);

  return {
    showModal,
    open,
    close,
  };
};

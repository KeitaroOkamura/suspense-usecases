import type { NextPage } from "next";
import { Fragment, VoidFunctionComponent } from "react";
import { useModal } from "~/components/FullscreenModal/hooks";
import { FullscreenModal } from "~/components/FullscreenModal";
import clsx from "clsx";

type ContentProps = {
  onClick: () => void;
};
const Content: VoidFunctionComponent<ContentProps> = ({ onClick }) => {
  return (
    <div className="flex items-center justify-center py-4">
      <button
        className={clsx(
          "modal-open bg-sky-600 hover:bg-sky-700",
          "text-white",
          "py-2 px-4 rounded-full"
        )}
        onClick={onClick}
      >
        Open Full Screen Modal
      </button>
    </div>
  );
};

const UseCase1: NextPage = () => {
  const { showModal, open, close } = useModal();

  return (
    <Fragment>
      <Content onClick={open} />
      <FullscreenModal show={showModal} close={close} />
    </Fragment>
  );
};

export default UseCase1;

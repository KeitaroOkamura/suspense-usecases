import type { NextPage } from "next";
import { Fragment, VoidFunctionComponent } from "react";
import { useModal } from "~/components/FullscreenModal/hooks";
import { FullscreenModal } from "~/components/FullscreenModal";
import { Freeze } from "~/components/Freeze";
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
      <Freeze freeze={showModal} fallback={<p>Loading...</p>}>
        <Content onClick={open} />
      </Freeze>
      <Freeze freeze={!showModal}>
        <FullscreenModal close={close} />
      </Freeze>
    </Fragment>
  );
};

export default UseCase1;

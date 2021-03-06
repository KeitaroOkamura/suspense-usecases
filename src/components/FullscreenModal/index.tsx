import type { VoidFunctionComponent, DispatchWithoutAction } from "react";
import { ExampleOfInput, ExampleOfScrollPosition } from "~/components/Example";
import clsx from "clsx";

type FullscreenModalProps = {
  close: DispatchWithoutAction;
};

export const FullscreenModal: VoidFunctionComponent<FullscreenModalProps> = ({
  close,
}) => {
  return (
    <div
      className={clsx(
        "fixed w-full h-full top-0 left-0",
        "flex items-center justify-center"
      )}
    >
      <div className={clsx("absolute w-full h-full", "bg-white")}>
        <div className="fixed w-full h-full z-50 overflow-y-auto">
          <button
            className={clsx(
              "absolute top-0 right-0",
              "cursor-pointer",
              "flex flex-col items-center",
              "mt-4 mr-4 text-black text-sm z-50"
            )}
            onClick={close}
          >
            <svg
              className="fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </button>

          <div className="container mx-auto h-auto text-left p-4">
            <div className="flex justify-between items-center pb-2">
              <p className="text-2xl font-bold">Full Screen Modal</p>
            </div>
            <ExampleOfInput />
            <ExampleOfScrollPosition />
          </div>
        </div>
      </div>
    </div>
  );
};

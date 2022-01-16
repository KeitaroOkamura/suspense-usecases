import {
  ReactNode,
  VoidFunctionComponent,
  ReactEventHandler,
  useCallback,
} from "react";
import clsx from "clsx";

type TabItemProps = {
  tabIndex: number;
  selected: boolean;
  onClick: (index: number) => void;
  children: ReactNode;
};

export const TabItem: VoidFunctionComponent<TabItemProps> = ({
  tabIndex,
  selected,
  onClick,
  children,
  ...attributes
}) => {
  const handleClick = useCallback<ReactEventHandler<HTMLButtonElement>>(
    () => onClick(tabIndex),
    [onClick, tabIndex]
  );

  return (
    <button
      {...attributes}
      className={clsx(
        "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none",
        selected && "text-blue-500 border-b-2 font-medium border-blue-500"
      )}
      onClick={handleClick}
      tabIndex={tabIndex}
      role="tab"
    >
      {children}
    </button>
  );
};

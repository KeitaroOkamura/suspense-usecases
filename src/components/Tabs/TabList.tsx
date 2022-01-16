import type { ReactNode, VoidFunctionComponent } from "react";
import clsx from "clsx";

type TabListProps = {
  children: ReactNode;
};

export const TabList: VoidFunctionComponent<TabListProps> = ({
  children,
  ...attributes
}) => {
  return (
    <div
      {...attributes}
      className={clsx("bg-white flex flex-col sm:flex-row")}
      role="tablist"
    >
      {children}
    </div>
  );
};

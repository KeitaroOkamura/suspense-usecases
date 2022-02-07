import type { ReactNode, VoidFunctionComponent } from "react";
import clsx from "clsx";

type TabPanelProps = {
  children: ReactNode;
};

export const TabPanel: VoidFunctionComponent<TabPanelProps> = ({
  children,
  ...attributes
}) => {
  return (
    <div
      {...attributes}
      className={clsx("px-4 py-2 flex-auto")}
      role="tabpanel"
    >
      {children}
    </div>
  );
};

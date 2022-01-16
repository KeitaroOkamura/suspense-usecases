import type { ReactNode, VoidFunctionComponent } from "react";
import clsx from "clsx";

type TabPanelProps = {
  show: boolean;
  children: ReactNode;
};

export const TabPanel: VoidFunctionComponent<TabPanelProps> = ({
  show,
  children,
  ...attributes
}) => {
  if (!show) {
    return null;
  }
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

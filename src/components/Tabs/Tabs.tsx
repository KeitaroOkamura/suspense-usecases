import type { ReactNode, VoidFunctionComponent } from "react";

type TabsProps = {
  children: ReactNode;
};

export const Tabs: VoidFunctionComponent<TabsProps> = ({
  children,
  ...attributes
}) => {
  return (
    <div {...attributes} className="flex">
      <div className="w-full">{children}</div>
    </div>
  );
};

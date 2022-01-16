import type { VoidFunctionComponent, ReactNode } from "react";
import clsx from "clsx";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: VoidFunctionComponent<LayoutProps> = ({ children }) => {
  return <div className={clsx("bg-slate-50", "h-screen")}>{children}</div>;
};

import type { VoidFunctionComponent, ReactNode } from "react";
import { Layout } from "~/components/Layout";

type AppPageProps = {
  children: ReactNode;
};

export const AppPage: VoidFunctionComponent<AppPageProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

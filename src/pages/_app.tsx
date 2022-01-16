import type { FunctionComponent } from "react";
import type { AppProps } from "next/app";
import { AppPage } from "~/components/AppPage";
import "~/styles/globals.css";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppPage>
      <Component {...pageProps} />
    </AppPage>
  );
};

export default App;

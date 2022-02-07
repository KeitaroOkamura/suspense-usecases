import { Fragment, VoidFunctionComponent } from "react";
import clsx from "clsx";

export const ExampleOfInput: VoidFunctionComponent = () => {
  return (
    <Fragment>
      <p>Input</p>
      <input className="caret-blue-500 focus:caret-indigo-500" type="text" />
    </Fragment>
  );
};

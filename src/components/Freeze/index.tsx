import React, {
  useRef,
  Suspense,
  ReactNode,
  VoidFunctionComponent,
} from "react";

type PromiseCache = {
  promise?: Promise<void>;
  resolve?: (value: void | PromiseLike<void>) => void;
};

type LoadableProps = {
  freeze: boolean;
  children: ReactNode;
};

const Loadable: VoidFunctionComponent<LoadableProps> = ({
  freeze,
  children,
}) => {
  const promiseCache = useRef<PromiseCache>({}).current;

  if (freeze) {
    if (!promiseCache.promise) {
      promiseCache.promise = new Promise((resolve) => {
        promiseCache.resolve = resolve;
      });
    }
    // freezeがtrueである間は、空のPromiseをthrowし続ける
    throw promiseCache.promise;
  }

  if (promiseCache.promise) {
    // freezeがfalseの場合はPromiseを解決する
    promiseCache.resolve!();
    promiseCache.promise = undefined;
  }

  return <>{children}</>;
};

type FreezeProps = {
  freeze: boolean;
  children: React.ReactNode;
};

export const Freeze: VoidFunctionComponent<FreezeProps> = ({
  freeze,
  children,
}) => {
  return (
    <Suspense fallback={null}>
      <Loadable freeze={freeze}>{children}</Loadable>
    </Suspense>
  );
};

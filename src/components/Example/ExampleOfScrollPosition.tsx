import type { VoidFunctionComponent } from "react";
import clsx from "clsx";

export const ExampleOfScrollPosition: VoidFunctionComponent = () => {
  return (
    <div className={clsx("overscroll-contain overflow-y-auto h-40")}>
      <div
        className={clsx(
          "p-8",
          "overscroll-contain",
          "bg-slate-200 break-all",
          "text-sm sm:text-base leading-6 sm:leading-7"
        )}
      >
        <p>
          {`
            Well, let me tell you something, funny boy. Y'know that little
            stamp, the one that says "New York Public Library"? Well that
            may not mean anything to you, but that means a lot to me. One
            whole hell of a lot.
          `}
        </p>
        <p>
          {`

            Sure, go ahead, laugh if you want to. I've seen your type
            before: Flashy, making the scene, flaunting convention. Yeah,
            I know what you're thinking. What's this guy making such a big
            stink about old library books? Well, let me give you a hint,
            junior.
          `}
        </p>
        <p>
          {`

            Maybe we can live without libraries, people like you and me.
            Maybe. Sure, we're too old to change the world, but what about
            that kid, sitting down, opening a book, right now, in a branch
            at the local library and finding drawings of pee-pees and
            wee-wees on the Cat in the Hat and the Five Chinese Brothers?
            Doesn't HE deserve better?
          `}
        </p>
      </div>
    </div>
  );
};

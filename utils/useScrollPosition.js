import { useEffect, useState } from "react";

const useScrollPosition = () => {
  if (typeof globalThis?.window === "undefined") return 500;

  // Store the state
  const [scrollPos, setScrollPos] = useState(globalThis?.window?.pageYOffset);

  // On Scroll
  const onScroll = () => {
    setScrollPos(globalThis?.window?.pageYOffset);
  };

  // Add and remove the globalThis?.window? listener
  useEffect(() => {
    globalThis?.window?.addEventListener("scroll", onScroll);
    return () => {
      globalThis?.window?.removeEventListener("scroll", onScroll);
    };
  });

  return scrollPos;
};

export default useScrollPosition;

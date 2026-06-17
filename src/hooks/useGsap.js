import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsap(callback, deps = []) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      callback(ref.current);
    }, ref);

    return () => ctx.revert();
  }, deps);

  return ref;
}

export { gsap, ScrollTrigger };

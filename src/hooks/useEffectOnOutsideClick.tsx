import { useRef } from "react";

// ! unused feature
// TODO: Handle passed ref
export const useEffectOnOutsideClick = <T extends HTMLDivElement>() => {
  const elementRef = useRef<T | null>(null);

  return {
    elementRef,
  };
};

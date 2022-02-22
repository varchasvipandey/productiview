import { useRef, useEffect } from 'react';

export const useEffectOnOutsideClick = <T extends HTMLDivElement>() => {
  const elementRef = useRef<T | null>(null);

  return {
    elementRef
  };
};

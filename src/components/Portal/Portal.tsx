import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { sliceId } from "utils";

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

const Portal: React.FC = ({ children }) => {
  const [wrapperElem, setWrapperElem] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const wrapperId = sliceId();
    let elemCreated = false;

    let wrapperElem = document.getElementById(wrapperId);

    if (!wrapperElem) {
      wrapperElem = createWrapperAndAppendToBody(wrapperId);
      elemCreated = true;
    }

    setWrapperElem(wrapperElem);

    return () => {
      if (elemCreated && wrapperElem?.parentNode) {
        wrapperElem.parentNode.removeChild(wrapperElem);
      }
    };
  }, []);

  if (!wrapperElem) return null;

  return createPortal(children, wrapperElem);
};

export default Portal;

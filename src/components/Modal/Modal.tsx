import { useEffect, useRef, FC } from "react";
import { Container } from "./modal.style";

import { getIcon } from "icons";

import Portal from "../Portal/Portal";

const CloseIcon = getIcon("close");

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  hideHeader?: boolean;
  title?: string;
}

const Modal: FC<ModalProps> = ({
  children = <></>,
  onClose = () => {},
  isOpen = false,
  hideHeader = false,
  title = null,
}) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  // Escape key handler
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? onClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      <Container ref={nodeRef}>
        <div className="modal">
          <div className="modal__backdrop">
            <div className="modal__content">
              <div className="modal__content__header">
                <p className="modal__content__header__text">{title}</p>
                <button
                  onClick={onClose}
                  className="modal__content__header__action"
                  aria-label="Close pop-up"
                  title="Close pop-up"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="modal__content__body">{children}</div>
            </div>
          </div>
        </div>
      </Container>
    </Portal>
  );
};

export default Modal;

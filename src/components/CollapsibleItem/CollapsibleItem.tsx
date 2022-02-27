import { FC, useState, ReactNode, useRef, useEffect } from "react";
import { Container } from "./collapsibleItem.style";
import { getIcon } from "icons";

interface CollapsibleItemProps {
  defaultSetOpen?: boolean;
  title: string;
  description?: string;
  Icon?: ReactNode;
  disabled?: boolean;
}

const ArrowDownIcon = getIcon("arrowDown");

const CollapsibleItem: FC<CollapsibleItemProps> = (props) => {
  const expandedDiv = useRef<HTMLDivElement | null>(null);
  const { children, title, description, Icon, disabled = false } = props;
  const [open, setOpen] = useState(false);

  const handleOpenToggle = () => !disabled && setOpen((prev) => !prev);

  const handleOutSideClick = (e: MouseEvent) => {
    const elem = expandedDiv.current;
    if (!elem || !e) return;
    // @ts-ignore - assigned event to node type
    if (!elem.contains(e.target)) setOpen(false);
  };

  useEffect(() => {
    if (open) document.addEventListener("click", handleOutSideClick);
    else document.removeEventListener("click", handleOutSideClick);
    return () => document.removeEventListener("click", handleOutSideClick);
  }, [open]);

  return (
    <Container className="glass" open={open} disabled={disabled}>
      <div className="header" onClick={handleOpenToggle}>
        <div className="header__info">
          {Icon && <div className="header__info__icon">{Icon}</div>}
          <div className="header__info__text">
            <p className="header__info__text__heading sectionHeading">
              {title}
            </p>
            {!!description && (
              <p className="header__info__text__description">{description}</p>
            )}
          </div>
        </div>
        <div className="header__action">
          <ArrowDownIcon />
        </div>
      </div>

      {open && (
        <div className="body" ref={expandedDiv}>
          {children}
        </div>
      )}
    </Container>
  );
};

export default CollapsibleItem;

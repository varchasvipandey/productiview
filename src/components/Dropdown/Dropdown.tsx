import { useState, useRef, useEffect } from "react";

import { getIcon } from "icons";

import { Container, Option } from "./dropdown.style";
import { DropdownProps } from "./dropdown.type";

const Arrowdown = getIcon("arrowDown");

const Dropdown = ({
  options,
  selected,
  onChange,
  title = "",
  ariaLabel = "",
}: DropdownProps) => {
  const dropdownMenu = useRef<HTMLDivElement | null>(null);

  const [showOptions, setShowOptions] = useState(false);

  const handleToggleShowOptions = () => setShowOptions((prev) => !prev);

  const handleOutSideClick = (e: MouseEvent) => {
    const elem = dropdownMenu.current;
    if (!elem || !e) return;
    // @ts-ignore - assigned event to node type
    if (!elem.contains(e.target)) setShowOptions(false);
  };

  useEffect(() => {
    if (showOptions) document.addEventListener("click", handleOutSideClick);
    else document.removeEventListener("click", handleOutSideClick);
    return () => document.removeEventListener("click", handleOutSideClick);
  }, [showOptions]);

  return (
    <Container
      onClick={handleToggleShowOptions}
      title={title}
      aria-label={ariaLabel}
      ref={dropdownMenu}
    >
      <div className="value-container glass-inverted">
        <div className="value-container__value">
          {options.find((option) => option.value === selected)?.label}
        </div>
        <div className="value-container__icon">
          <Arrowdown style={{ opacity: showOptions ? 0.6 : 0.2 }} />
        </div>
      </div>
      {showOptions && (
        <div className="options glass-inverted">
          {options.map((option) => (
            <Option
              key={option.id}
              onClick={onChange.bind(null, option.value)}
              title={option.value}
              aria-label={option.value}
            >
              {option.label}
            </Option>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Dropdown;

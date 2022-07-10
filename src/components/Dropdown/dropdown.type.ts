import { CSSProperties } from "styled-components";

export interface DropdownOptionStyledCompProps {
  isSelected?: boolean;
  style?: CSSProperties;
}

export interface DropdownOptionProps {
  label: JSX.Element | string;
  value: string;
  id: string | number; // unique identifier for mapping
}

export interface DropdownStyledCompProps {
  style?: CSSProperties;
}

export interface DropdownProps extends DropdownStyledCompProps {
  options: DropdownOptionProps[];
  selected: string;
  optionItemStyle?: CSSProperties;
  onChange: (selected: string) => void;
  title?: string;
  ariaLabel?: string;
}

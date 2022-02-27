import { InputHTMLAttributes } from "react";
import { CSSObject } from "styled-components";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  containerSx?: CSSObject;
  label: string;
}

export interface CheckboxContainerProps {
  containerSx?: CSSObject;
  checked?: boolean;
}

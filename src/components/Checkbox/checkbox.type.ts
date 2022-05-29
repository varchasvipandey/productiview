import React, { InputHTMLAttributes } from "react";
import { CSSObject } from "styled-components";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  containerSx?: CSSObject;
  label?: string | React.ReactNode;
}

export interface CheckboxContainerProps {
  containerSx?: CSSObject;
  checked?: boolean;
}

import { CSSObject } from "styled-components";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  style?: CSSObject;
}

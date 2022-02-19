import { CSSProperties } from 'react';

export interface Theme {
  breakpoints: {
    xl: string;
    lg: string;
    md: string;
    sm: string;
    xs: string;
    xxs: string;
  };
}

export interface StyledComponentProps {
  theme: Theme;
  style?: CSSProperties;
}

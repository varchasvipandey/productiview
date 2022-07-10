import styled, { css } from "styled-components";

import { ButtonProps } from "./button.type";

export const Button = styled.button<ButtonProps>(({ variant, style }) => [
  css`
    border: 1px solid;
    padding: 0.8rem 1.6rem;
    border-radius: 0.2rem;
    font-size: 1.6rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
    &:active {
      opacity: 0.5;
    }

    ${(!variant || variant === "primary") &&
    css`
      background: var(--color-primary-gradient-light);
      color: var(--color-fore);
      border-color: var(--color-fore);
    `}

    ${variant === "secondary" &&
    css`
      background-color: var(--color-back-lightest);
      color: var(--color-fore);
      border-color: var(--color-fore);
    `}

    ${variant === "tertiary" &&
    css`
      background-color: var(--color-back-lightest);
      color: var(--color-primary);
      border-color: transparent;

      &:active {
        background-color: var(--color-back-lighter);
      }
    `}
  `,
  { ...style },
]);

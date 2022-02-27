import styled, { css } from "styled-components";
import { CheckboxContainerProps } from "./checkbox.type";

export const Container = styled.div(
  ({ containerSx, checked }: CheckboxContainerProps) => css`
    border: 1px solid var(--color-fore-lighter);
    display: inline-block;
    padding: 0.8rem;
    transition: all 0.1s ease;

    ${checked &&
    css`
      border-color: var(--color-primary);
    `}

    &:hover {
      cursor: pointer;
    }

    input {
      display: none;
    }

    .checkbox-icon {
      margin-right: 0.4rem;
      margin-top: 0.2px;
      svg {
        font-size: 2rem;
        transition: all 0.1s ease;

        ${checked &&
        css`
          fill: var(--color-primary);
        `}
      }
    }

    label {
      font-size: 1.6rem;
      font-weight: 300;
      display: flex;
      margin-top: 1.2px;

      .label-text {
        margin-top: 1px;
      }

      &:hover {
        cursor: pointer;
      }
    }

    ${containerSx};
  `
);

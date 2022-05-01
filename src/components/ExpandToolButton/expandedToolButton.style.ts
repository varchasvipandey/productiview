import styled, { css } from "styled-components";

interface ContainerProps {
  expanded: boolean;
}

export const Container = styled.div(
  ({ expanded }: ContainerProps) => css`
    display: inline;
    button {
      border: none;
      background: none;
      svg {
        font-size: 2.4rem;
        transition: all 0.2s ease-in-out;
        transform: rotate(180deg);

        ${expanded &&
        css`
          transform: rotate(0deg);
        `}
      }
    }
  `
);

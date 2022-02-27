import styled, { css } from "styled-components";

interface ContainerProps {
  isSelected: boolean;
  color: string;
  highlightBy: string;
}

export default styled.div(
  ({ isSelected, color, highlightBy }: ContainerProps) => css`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${color};
    border: 2px solid transparent;
    transition: all 0.3s ease;

    ${isSelected &&
    css`
      border-color: ${highlightBy};
    `}

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  `
);

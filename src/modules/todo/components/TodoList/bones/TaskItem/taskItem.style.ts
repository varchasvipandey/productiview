import styled, { css } from "styled-components";

interface ContainerProps {
  completed: boolean;
}

export const Container = styled.div<ContainerProps>(
  ({ completed }) => css`
    &:not(:first-of-type) {
      padding-top: 1rem;
    }
    padding-bottom: 1rem;

    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }

    p.description {
      text-decoration: ${completed ? "line-through" : "none"};
    }
  `
);

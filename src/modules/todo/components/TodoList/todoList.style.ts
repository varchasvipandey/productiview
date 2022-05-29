import styled, { css } from "styled-components";

interface ContainerProps {
  isExpanded: boolean;
  haveTasks: boolean;
}

export const Container = styled.div<ContainerProps>(
  ({ isExpanded, haveTasks }) => css`
    height: 16rem;
    transition: all 0.2s ease-in-out;

    ${!haveTasks &&
    css`
      height: 0;
      padding: 0 !important;
    `}

    ${!isExpanded &&
    css`
      height: 0;
      padding: 0 !important;
    `}

    overflow-y: auto;
  `
);

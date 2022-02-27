import styled, { css } from "styled-components";

export const Container = styled.div(
  () => css`
    display: flex;
    flex-wrap: wrap;

    & > div {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  `
);

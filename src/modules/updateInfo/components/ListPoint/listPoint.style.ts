import styled, { css } from "styled-components";

export const Container = styled.div(
  () => css`
    .item-title {
      color: var(--color-primary);
      font-weight: 600;
      span {
        color: var(--color-white) !important;
        font-weight: 500;
      }
    }

    margin-bottom: 1.2rem;
  `
);

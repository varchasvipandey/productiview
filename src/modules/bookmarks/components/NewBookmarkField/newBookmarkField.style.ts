import styled, { css } from "styled-components";

export const Container = styled.form(
  () => css`
    .field {
      &:not(:last-child) {
        margin-bottom: 0.6rem;
      }
    }

    button {
      display: none;
    }
  `
);

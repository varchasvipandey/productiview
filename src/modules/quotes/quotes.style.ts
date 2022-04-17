import styled, { css } from "styled-components";

export const Container = styled.div(
  () => css`
    .quote {
      text-align: center;
    }

    .author {
      text-align: right;
      margin-top: 1.2rem;
    }
  `
);

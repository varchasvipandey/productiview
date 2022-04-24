import styled, { css } from "styled-components";

export const Container = styled.div(
  () => css`
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .timerType-text {
      font-size: 1.4rem;
    }
  `
);

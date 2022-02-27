import styled, { css } from "styled-components";

export const Container = styled.div(
  () => css`
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .actions-set {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .action {
      margin: 0 0.6rem;
    }

    .timerType-text {
      font-size: 1.4rem;
    }
  `
);

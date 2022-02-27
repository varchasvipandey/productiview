import styled, { css } from "styled-components";

export const Container = styled.div(
  () => css`
    height: 100vh;
    position: fixed;
    width: 100%;
    opacity: 0;

    animation: fadeIn 2s ease-in-out forwards;

    .exit-onboarding {
      animation: fadeOut 0.8s ease-in-out forwards;
    }
  `
);

import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
    .action-text {
      font-size: 3.2rem;
      text-align: center;
      color: var(--color-white);
      font-weight: 200;
      opacity: 0;
      animation: fadeIn 1s ease-in-out forwards;
      animation-delay: 6s;
    }
  `
);

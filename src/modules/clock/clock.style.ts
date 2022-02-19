import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
    .body {
      &__time {
        &__value {
          font-size: 8rem;
          color: var(--color-fore);

          span {
            margin: 0 6px;
            animation: tickSec 2s infinite;
          }
        }
      }
    }
  `
);

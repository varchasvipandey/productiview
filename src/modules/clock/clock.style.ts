import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
    margin-top: 12rem;
    animation: fadeIn 0.5s ease-in-out;
    .body {
      &__time {
        &__value {
          display: flex;
          font-size: 8rem;

          &__digit {
            font-size: 8rem;
            color: var(--color-white);
          }

          &__separator {
            animation: tickSec 2s infinite;
            margin-top: -6px;
            color: var(--color-white);
          }

          &__meridiem {
            font-weight: 100;
            margin-left: 12px;
            color: var(--color-white);
          }
        }
      }

      &__date {
        font-size: 2.4rem;
        color: var(--color-white);
        font-weight: 200;
      }
    }
  `
);

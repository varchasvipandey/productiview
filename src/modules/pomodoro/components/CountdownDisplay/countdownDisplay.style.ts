import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
    padding: 2rem;

    .time {
      display: flex;
      justify-content: center;

      &__separator {
        font-size: 5.4rem;
        margin-top: -4px;
      }

      &__unit {
        text-align: center;
        width: 10rem;
        &__digits {
          font-size: 5.4rem;
        }
        &__label {
          font-size: 1.4rem;
          font-weight: 300;
          letter-spacing: 4px;
          margin-right: -6px;
        }
      }
    }
  `
);

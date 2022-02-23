import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
    padding-top: 4.2rem;
    position: absolute;
    width: 100%;
    border-radius: 2rem;
    background: var(--color-back);
    animation: fadeIn 0.2s ease-in-out;

    .search-item {
      padding: 1.6rem 2rem;
      border: 1px solid transparent;

      &:focus {
        border-color: var(--color-primary);
      }
      &:hover {
        border-color: var(--color-primary);
        cursor: pointer;
      }

      &__info {
        &__term {
          font-size: 1.6rem;
          font-weight: 300;
        }
      }
    }
  `
);

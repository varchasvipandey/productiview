import styled, { css } from 'styled-components';

export const Container = styled.div(() => css``);

export const Item = styled.div(
  () => css`
    &:not(:last-child) {
      margin-bottom: 1.2rem;
    }

    display: flex;
    border: 1px solid var(--color-fore-lightest);

    .item-heading {
      flex: 0 0 20%;
      padding: 0.8rem;
      font-size: 1.4rem;
      font-weight: 300;
      border-right: 1px solid var(--color-fore-lightest);
    }

    .item-body {
      flex: 1;
      padding: 0.8rem;

      &__text {
        font-size: 1.4rem;
      }

      &__link {
        font-size: 1.4rem;
      }
    }
  `
);

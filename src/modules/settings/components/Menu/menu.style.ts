import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
    .title {
      margin-bottom: 3.2rem;
    }

    .section {
      margin-bottom: 2.4rem;
    }

    .row {
      &__item {
        &:not(:last-child) {
          margin-right: 1.6rem;
        }
      }
    }

    .theme-options {
      display: flex;
      div:not(:last-child) {
        margin-right: 1.6rem;
      }
    }
  `
);

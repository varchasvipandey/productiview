import styled, { css } from "styled-components";

export const Container = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 0.6rem;
    animation: fadeIn 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      background: var(--color-back-lighter);
    }

    .bookmark {
      display: flex;
      align-items: center;

      &__icon {
        margin-right: 1rem;
        img {
          width: 1.6rem;
        }
      }

      &__url {
        font-size: 1.2rem;
      }
    }

    .cta-delete {
      button {
        background: none;
        border: none;
        border-radius: 50%;
        padding: 2px;

        &:hover {
          background: var(--color-back);
          cursor: pointer;
        }

        svg {
          font-size: 1.2rem;
        }
      }
    }
  `
);

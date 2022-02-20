import styled, { css } from 'styled-components';

export const ToggleOnContainer = styled.div(
  () => css`
    .settings {
      background: transparent;
      border: none;

      &:focus {
        outline: none;

        & > svg {
          transform: scale(1.2) rotate(180deg);
        }
      }

      &:hover {
        cursor: pointer;

        & > svg {
          transform: scale(1.2) rotate(180deg);
        }
      }

      &:active {
        & > svg {
          transform: scale(0.9);
        }
      }

      &__icon {
        color: var(--color-white) !important;
        font-size: 2rem;
        transition: all 0.3s ease;
      }
    }
  `
);

export const MenuContainer = styled.div(
  () => css`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 100vh;
    background: var(--color-back);
    z-index: 100;

    animation: fadeIn 0.5s ease-in-out;

    .top-bar {
      padding: 2rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      &__action {
        background: transparent;
        border: none;

        &:focus {
          outline: none;
          cursor: pointer;
        }

        &:hover {
          cursor: pointer;
          & > svg {
            transform: scale(1.2) rotate(180deg);
          }
        }

        &__icon {
          color: var(--color-fore);
          font-size: 2rem;
          transition: all 0.3s ease;
        }
      }
    }

    .body {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
      /* overflow-y: auto; */
      height: 100%;
    }
  `
);

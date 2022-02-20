import styled, { css } from 'styled-components';

interface ContainerProps {
  open: boolean;
  disabled: boolean;
}

export const Container = styled.div(
  ({ open, disabled }: ContainerProps) => css`
    position: relative;
    ${disabled &&
    css`
      opacity: 0.2;
    `}

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.2rem;
      border: 1px solid var(--color-fore-lighter);
      transition: all 0.3s ease;

      ${open &&
      css`
        border-color: var(--color-primary);
      `}

      transition: all 0.3s ease;

      &__info {
        display: flex;
        align-items: center;
        justify-content: center;

        &__icon {
          margin-right: 1rem;
          svg {
            font-size: 2.4rem;
          }
        }

        &__text {
          &__description {
            font-size: 1.2rem;
            font-weight: 400;
          }
        }
      }

      &__action {
        svg {
          font-size: 2.4rem;
          transition: all 0.3s ease;
          ${open &&
          css`
            transform: rotate(180deg);
          `}
        }
      }

      &:hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }

    .body {
      border: 1px solid var(--color-fore-lightest);
      border-top: none;
      padding: 1.2rem;
      animation: fadeIn 0.3s ease-in-out;
    }
  `
);

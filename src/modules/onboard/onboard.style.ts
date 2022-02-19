import styled, { css } from 'styled-components';
import { StyledComponentProps } from 'theme';

interface ContainerProps extends StyledComponentProps {
  canProceed: boolean;
}

export const Container = styled.div(
  ({ canProceed }: ContainerProps) => css`
    background: var(--color-primary-gradient);
    height: 100vh;
    position: fixed;
    width: 100%;
    animation: fadeIn 2s ease-in-out;

    .title {
      color: var(--color-fore);
    }

    .input {
      position: relative;

      input {
        font-size: 4rem;
        font-weight: 400;
        background: transparent;
        border: none;
        border-bottom: 1px solid var(--color-back);
        padding: 2rem 0;
        color: var(--color-fore);
        transition: all 0.3s ease-in-out;

        &::placeholder {
          color: var(--color-back);
          font-weight: 400;
          opacity: 0.5;
          transition: all 0.3s ease-in-out;
        }

        &:focus {
          outline: none;
          border-bottom: 1px solid var(--color-fore);

          &::placeholder {
            color: var(--color-fore);
          }

          & + button {
            color: var(--color-fore);
            opacity: 1;
          }
        }
      }

      button {
        font-size: 4.8rem;
        color: var(--color-back);
        opacity: 0.5;
        background: transparent;
        border: none;

        position: absolute;
        right: 0;
        top: 60%;
        transform: translateY(-60%);
        transition: all 0.3s ease-in-out;

        svg {
          transition: all 0.3s ease-in-out;
        }

        &:hover {
          ${canProceed
            ? css`
                cursor: pointer;
                & > svg {
                  transform: scale(1.1);
                }
              `
            : css`
                cursor: not-allowed;
              `}
        }

        ${canProceed &&
        css`
          &:active {
            & > svg {
              transform: scale(0.95);
            }
          }
        `}
      }
    }
  `
);

import styled, { css } from "styled-components";

interface ContainerProps {
  expanded: boolean;
}

export const Container = styled.div(
  ({ expanded }: ContainerProps) => css`
    position: relative;
    .tray {
      transition: all 0.3s ease-in-out;
      display: flex;
      align-items: center;

      &:hover {
        cursor: pointer;
      }

      &__bookmark-list {
        display: flex;
        align-items: center;
      }

      &__empty-text {
        font-size: 1.6rem;
        margin-top: -4px;
        margin-right: 6px;
      }

      &__cta-more {
        button {
          background: none;
          border: none;
          font-size: 2rem;
          transition: all 0.3s ease-in-out;
          margin-bottom: -6px;

          & svg {
            transition: all 0.2s ease-in;
          }

          ${expanded &&
          css`
            & svg {
              transform: rotate(180deg) scale(1);
            }
          `}

          &:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
        }
      }
    }

    .menu {
      width: 24rem;
      height: 20rem;
      position: absolute;
      margin-top: 0.6rem;
      box-shadow: var(--shadow-primary);
      border-radius: var(--border-radius-base);
      animation: fadeIn 0.3s ease-in-out;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &__bookmark-list {
        height: 16rem;
        overflow-y: auto;
      }

      &__add {
        padding: 1.2rem;
      }
    }
  `
);

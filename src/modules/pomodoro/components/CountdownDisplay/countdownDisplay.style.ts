import styled, { css } from "styled-components";

interface ContainerProps {
  isExpanded: boolean;
}

export const Container = styled.div(
  ({ isExpanded }: ContainerProps) => css`
    .top-bar {
      padding: 2rem 2rem 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__time {
        display: flex;
        font-size: 2rem;

        &__separator {
          margin: -2px 2px 0 2px;
        }

        ${isExpanded &&
        css`
          &__digit,
          &__separator {
            display: none;
          }
        `}
      }

      &__cta {
        display: flex;
        align-items: center;

        &__timer-type {
          font-size: 1.6rem;
        }

        &__action {
          margin-left: 1.2rem;

          button {
            border: none;
            background: none;

            &:hover {
              cursor: pointer;
            }

            svg {
              font-size: 3.2rem;
              transition: all 0.2s ease-in-out;
              margin-bottom: -4px;
              transform: rotate(180deg);

              ${isExpanded &&
              css`
                transform: rotate(0deg);
              `}
            }
          }
        }
      }
    }

    .time {
      display: flex;
      justify-content: center;
      padding: 2rem;
      height: 12rem;
      transition: all 0.2s ease-in-out;

      ${!isExpanded &&
      css`
        height: 0rem;
        padding: 0;

        & div {
          display: none;
        }
      `}

      &__separator {
        font-size: 5.4rem;
        margin-top: -4px;
        animation: fadeIn 0.5s ease-in-out;
      }

      &__unit {
        text-align: center;
        width: 10rem;
        animation: fadeIn 0.5s ease-in-out;
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

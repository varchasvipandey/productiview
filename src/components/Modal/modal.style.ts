import styled, { css } from "styled-components";

export const Container = styled.div(
  () => css`
    .modal {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      overflow: hidden;
      z-index: 100;
      padding: 40px 20px 20px;
      animation: fadeIn 0.3s ease-in-out;

      &__backdrop {
        position: relative;
        height: 100vh;
        width: 100%;
      }

      &__content {
        position: absolute;
        left: 50%;
        top: 10%;
        transform: translateX(-50%);

        width: 100%;
        max-width: 600px;
        min-height: 24rem;

        font-size: 2rem;
        scale: 0.98;
        color: var(--color-white);

        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(10.5px);
        -webkit-backdrop-filter: blur(16.5px);

        border-radius: var(--border-radius-base);

        padding: 2rem;

        &__header {
          display: flex;
          justify-content: space-between;
          align-items: center;

          &__text {
          }

          &__action {
            background: transparent;
            border: none;
            cursor: pointer;
            svg {
              font-size: 2.4rem;
            }
          }
        }

        &__body {
          margin-top: 3.2rem;
        }
      }
    }
  `
);

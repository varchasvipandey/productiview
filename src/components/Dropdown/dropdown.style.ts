import styled, { css } from "styled-components";

export const Container = styled.div(
  () => css`
    border: 1px solid var(--color-primary-light);
    width: 60px;
    height: 100%;
    position: relative;
    transition: all 0.2s;

    &:hover {
      border-color: var(--color-primary);
    }

    .value-container {
      height: 3.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.2rem;

      &__icon {
        margin-top: 3.2px;
      }
    }

    .options {
      position: absolute;
      width: 100%;
      max-height: 10rem;
      overflow-y: auto;
    }
  `
);

export const Option = styled.div(
  () => css`
    padding: 1.2rem;
    transition: all 0.2s;

    &:hover {
      opacity: 0.6;
      cursor: pointer;
    }
  `
);

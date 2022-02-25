import styled, { css } from 'styled-components';

export const Container = styled.button(
  () => css`
    border: none;
    background: var(--color-back);
    border: 1px solid var(--color-fore-lightest);
    width: 3.2rem;
    height: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.1s ease-in;

    &:hover {
      cursor: pointer;
      border-color: var(--color-fore-light);
    }

    &:active {
      transform: scale(0.95);
      opacity: 0.6;
    }
  `
);

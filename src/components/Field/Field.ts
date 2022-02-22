import styled, { css } from 'styled-components';

export const TextField = styled.input(
  () => css`
    border: none;
    font-size: 1.4rem;
    color: var(--color-fore);
    background-color: var(--color-back);
    padding: 0.8rem;
    width: 100%;
    border: 1px solid transparent;
    border-radius: var(--border-radius-base);
    transition: all 0.2s ease-in-out;

    &:focus {
      outline: none;
      border-color: var(--color-primary);
    }
  `
);

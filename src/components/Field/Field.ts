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

    &:focus {
      outline: none;
      border-color: var(--color-primary);
    }
  `
);

import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
    height: 100vh;
    background: var(--color-primary-gradient);
    color: var(--color-white);
    padding: 2rem;

    .title-text {
      font-size: 3.2rem;
      font-weight: 900;
    }

    .desc-text {
      font-size: 1.6rem;
    }
  `
);

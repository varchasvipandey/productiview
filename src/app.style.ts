import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: var(--color-back);
`;

export const ModulesContainer = styled.div(
  () => css`
    display: flex;
    height: 100%;
  `
);

export const ModuleSection = styled.div(
  () => css`
    flex: 1;
    padding: 2rem;
  `
);

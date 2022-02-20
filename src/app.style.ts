import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
  `
);

export const TopBarContainer = styled.div(
  () => css`
    flex: 0 0 10%;
    display: flex;
    justify-content: space-between;
  `
);

export const TopBarSection = styled.div(
  () => css`
    padding: 2rem;
  `
);

export const ModulesContainer = styled.div(
  () => css`
    flex: 1;
    display: flex;
  `
);

export const ModuleSection = styled.div(
  () => css`
    flex: 1;
    padding: 2rem;
  `
);

export const Modules = {
  Container: ModulesContainer,
  Section: ModuleSection
};

export const TopBar = {
  Container: TopBarContainer,
  Section: TopBarSection
};

import styled, { css } from "styled-components";

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
    &:not(:last-child) {
      margin-right: 4rem;
    }
  `
);

export const ModuleContentWrapper = styled.div(
  () => css`
    margin-top: 4rem;
  `
);

export const Modules = {
  Container: ModulesContainer,
  Section: ModuleSection,
  Wrapper: ModuleContentWrapper,
};

export const TopBar = {
  Container: TopBarContainer,
  Section: TopBarSection,
};

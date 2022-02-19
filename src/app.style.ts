import styled, { css } from 'styled-components';

interface ContainerProps {
  backgroundImage: string;
  appTheme?: 'dark' | 'default';
}

export const Container = styled.div(
  ({ appTheme, backgroundImage }: ContainerProps) => css`
    height: 100vh;
    display: flex;
    flex-direction: column;

    ${appTheme === 'default'
      ? css`
          background: ${`url(${backgroundImage})`};
        `
      : css`
          background: ${`linear-gradient(var(--color-back-light), var(--color-back-lighter)), url(${backgroundImage})`};
        `};

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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

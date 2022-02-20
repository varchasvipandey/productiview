import styled, { css } from 'styled-components';

interface ContainerProps {
  backgroundImage: string;
  opacity?: number;
  theme?: 'dark' | 'default';
}

export const Container = styled.div(
  ({ backgroundImage, opacity, theme }: ContainerProps) => css`
    position: absolute;
    z-index: -1;
    ${theme === 'default'
      ? css`
          background: ${`url(${backgroundImage})`};
        `
      : css`
          background: ${`linear-gradient(var(--color-back-light), var(--color-back-lighter)), url(${backgroundImage})`};
        `};
    opacity: ${opacity ? opacity : 1};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
  `
);

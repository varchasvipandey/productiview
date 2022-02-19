import { createGlobalStyle, css } from 'styled-components';
import { Theme } from 'theme';

export interface GlobalStylesProps {
  theme: Theme;
}

export default createGlobalStyle(
  ({ theme }: GlobalStylesProps) => css`
    @import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      font-size: 62.5%;

      @media (max-width: ${theme.breakpoints.xl}) {
        font-size: 57.5%;
      }
      @media (max-width: ${theme.breakpoints.lg}) {
        font-size: 52.5%;
      }
      @media (max-width: ${theme.breakpoints.md}) {
        font-size: 47.5%;
      }
    }

    :root {
      --color-primary: #538ffb;
      --color-primary-dark: #5b54fa;
      --color-primary-gradient: linear-gradient(
        to right,
        var(--color-primary),
        var(--color-primary-dark)
      );

      --color-fore: #fefefe;
      --color-back: #222;
    }

    body {
      margin: 0;
      font-family: 'Arimo', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Font sizes */
    .big-title {
      font-size: 8rem;
    }

    /* Spacing */
    .m {
      &t {
        margin-top: 2rem;
      }
      &r {
        margin-right: 2rem;
      }
      &b {
        margin-bottom: 2rem;
      }
      &l {
        margin-left: 2rem;
      }
      &y {
        margin: 2rem 0;
      }
      &x {
        margin: 0 2rem;
      }
    }

    /* Displaying */
    .flex-center-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .flex-center-spread-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    /* animations */
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes tickSec {
      0% {
        opacity: 0.4;
      }
      50% {
        opacity: 0.4;
      }
      51% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }
  `
);

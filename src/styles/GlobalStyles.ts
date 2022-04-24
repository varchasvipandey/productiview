import { createGlobalStyle, css } from "styled-components";
import { Theme } from "theme";

export interface GlobalStylesProps {
  theme: Theme;
}

export default createGlobalStyle(
  ({ theme }: GlobalStylesProps) => css`
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    * {
      transition: background-color 0.4s ease, color 0.3s ease;
      color: var(--color-fore);
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

      --color-white: #fefefe;
      --color-white-light: #fefefe99;
      --color-white-lighter: #fefefe50;
      --color-white-lightest: #fefefe10;

      --color-black: #222;
      --color-black-light: #22222299;
      --color-black-lighter: #22222250;
      --color-black-lightest: #22222210;

      --shadow-primary: 0 3px 10px rgba(0, 0, 0, 0.4);

      --border-radius-base: 0.5rem;
    }

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background-color: var(--color-white-lightest);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: var(--color-black);
    }

    /* Themes */
    .default-theme {
      --color-fore: var(--color-black);
      --color-fore-light: var(--color-black-light);
      --color-fore-lighter: var(--color-black-lighter);
      --color-fore-lightest: var(--color-black-lightest);

      --color-back: var(--color-white);
      --color-back-light: var(--color-white-light);
      --color-back-lighter: var(--color-white-lighter);
      --color-back-lightest: var(--color-white-lightest);

      .glass {
        background: rgba(0, 0, 0, 0.05);
        backdrop-filter: blur(50.5px);
        -webkit-backdrop-filter: blur(16.5px);
      }

      .glass-inverted {
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(10.5px);
        -webkit-backdrop-filter: blur(16.5px);
      }
    }

    .dark-theme {
      --color-fore: var(--color-white);
      --color-fore-light: var(--color-white-light);
      --color-fore-lighter: var(--color-white-lighter);
      --color-fore-lightest: var(--color-white-lightest);

      --color-back: var(--color-black);
      --color-back-light: var(--color-black-light);
      --color-back-lighter: var(--color-black-lighter);
      --color-back-lightest: var(--color-black-lightest);

      .glass {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10.5px);
        -webkit-backdrop-filter: blur(16.5px);
      }

      .glass-inverted {
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(10.5px);
        -webkit-backdrop-filter: blur(16.5px);
      }
    }

    .glass-primary-color {
      background: #538ffbc9;
      backdrop-filter: blur(10.5px);
      -webkit-backdrop-filter: blur(16.5px);
    }

    body {
      margin: 0;
      font-family: "Inter", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Font sizes */
    .title {
      font-size: 4rem;
      font-weight: 600;
    }

    .heading {
      font-size: 3.2rem;
      font-weight: 600;
    }

    .subHeading {
      font-size: 2.4rem;
      font-weight: 500;
    }

    .sectionHeading {
      font-size: 2rem;
      font-weight: 500;
    }

    .text {
      font-size: 1.6rem;
      font-weight: 400;
    }

    .caption {
      font-size: 1.2rem;
      font-weight: 400;
      opacity: 0.8;
    }

    /* Spacing */
    .m {
      margin: 2rem;
      &t {
        margin: 2rem 0 0 0;
      }
      &r {
        margin: 0 2rem 0 0;
      }
      &b {
        margin: 0 0 2rem 0;
      }
      &l {
        margin: 0 0 0 2rem;
      }
      &y {
        margin: 2rem 0;
      }
      &x {
        margin: 0 2rem;
      }
    }

    .p {
      &t {
        padding-top: 2rem;
      }
      &r {
        padding-right: 2rem;
      }
      &b {
        padding-bottom: 2rem;
      }
      &l {
        padding-left: 2rem;
      }
      &y {
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
      &x {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    /* Shaping */
    .border-radius-base {
      border-radius: var(--border-radius-base);
    }

    /* Displaying */
    .flex-center-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .flex-center-row {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .flex-center-spread-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .flex-spread-col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .flex-spread-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .row {
      display: flex;
      flex-wrap: wrap;

      &__item {
        flex: 1;
      }
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

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    @keyframes cinematicFadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes cinematicFadeOut {
      from {
        opacity: 1;
        transform: scale(1);
      }
      to {
        opacity: 0;
        transform: scale(0.95);
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

    @keyframes slidedown {
      0% {
        transform: translateY(-100%);
      }
    }

    .appear-slow {
      opacity: 0;
      animation: fadeIn 0.5s ease-in-out forwards;
      animation-delay: 2s;
    }
  `
);

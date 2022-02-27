import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
    position: relative;

    .image {
      opacity: 0;
      transform: scale(0.95);
      /* animation: cinematicFadeIn 0.5s ease-in-out forwards; */
      /* animation-delay: 1s; */

      img {
        width: 100rem;
      }
    }

    .animateImgIn {
      animation: cinematicFadeIn 0.5s ease-in-out forwards;
    }

    .animateImgOut {
      animation: cinematicFadeOut 0.1s ease-in-out forwards;
    }

    .action-text {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 2.4rem;
      color: var(--color-white);
      font-weight: 200;
      cursor: pointer;
      opacity: 0;
      animation: fadeIn 0.5s ease-in-out forwards;
      animation-delay: 1.5s;
    }
  `
);

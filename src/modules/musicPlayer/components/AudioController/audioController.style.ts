import styled, { css } from "styled-components";

interface ContainerProps {
  isPlaying: boolean;
}

export const Container = styled.div(
  ({ isPlaying }: ContainerProps) => css`
    padding: 2rem 2rem 0 2rem;

    .animated-disc {
      svg {
        font-size: 4.2rem;
        animation: spin 2s linear infinite;
        animation-play-state: paused;

        ${isPlaying &&
        css`
          animation-play-state: running;
        `}
      }
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `
);

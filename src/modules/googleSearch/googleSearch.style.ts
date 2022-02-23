import styled, { css } from 'styled-components';
import { TextField as DefaultTextField } from 'components';

export const Container = styled.div(
  () => css`
    position: relative;

    opacity: 0;
    animation: fadeIn 0.5s ease-in-out forwards;
    animation-delay: 2s;

    .google-icon {
      position: absolute;
      width: 2rem;
      left: 16px;
      top: 9.8px;
    }
  `
);

export const TextField = styled(DefaultTextField)(
  () => css`
    font-size: 1.6rem;
    padding: 10px 0;
    padding-inline-end: 44px;
    padding-inline-start: 52px;
    border-radius: 2rem;

    &::placeholder {
      color: var(--color-fore);
      opacity: 0.5;
    }
  `
);

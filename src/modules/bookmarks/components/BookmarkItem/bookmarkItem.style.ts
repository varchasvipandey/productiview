import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
    margin-right: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 1.6rem;
      height: 1.6rem;
    }
  `
);

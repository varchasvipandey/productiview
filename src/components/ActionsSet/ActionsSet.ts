import styled from "styled-components";

const ActionSetWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Action = styled.div`
  &:not(:last-child) {
    margin-right: 1.2rem;
  }
`;

export const ActionSet = {
  ActionSetWrapper,
  Action,
};

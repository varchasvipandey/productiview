import { memo } from "react";
import styled, { css, CSSObject } from "styled-components";

const LogoContainer = styled.div(
  ({ sx }: { sx: CSSObject }) => css`
    display: inline;
    font-size: 12rem;
    color: var(--color-white);
    font-weight: 900;
    ${sx};
  `
);

interface LogoProps {
  sx?: CSSObject;
}

const Logo = ({ sx = {} }: LogoProps) => {
  return <LogoContainer sx={sx}>Productiview</LogoContainer>;
};

export default memo(Logo);

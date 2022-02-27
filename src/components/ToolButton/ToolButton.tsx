import React, { memo, useMemo } from "react";
import { getIcon, Icons } from "icons";
import { Container } from "./toolButton.style";

export interface ToolButtonProps {
  iconName: Icons;
  onClick?: Function;
  ariaLabel?: string;
}

const ToolButton = ({ iconName, onClick, ariaLabel }: ToolButtonProps) => {
  const Icon = useMemo(() => getIcon(iconName), [iconName]);
  return (
    <Container
      onClick={() => onClick && onClick()}
      aria-label={ariaLabel || `action ${iconName}`}
    >
      <Icon />
    </Container>
  );
};

export default memo(ToolButton);

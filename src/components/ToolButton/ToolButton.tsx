import React, { memo, useMemo } from 'react';
import { getIcon, Icons } from 'icons';
import { Container } from './toolButton.style';

export interface ToolButtonProps {
  iconName: Icons;
  onClick?: Function;
}

const ToolButton = ({ iconName, onClick }: ToolButtonProps) => {
  const Icon = useMemo(() => getIcon(iconName), [iconName]);
  return (
    <Container onClick={() => onClick && onClick()}>
      <Icon />
    </Container>
  );
};

export default memo(ToolButton);

import { Icons } from "icons";

import ToolButton, { ToolButtonProps } from "../ToolButton/ToolButton";
import { Container } from "./expandedToolButton.style";

interface ExpandToolButtonProps extends Omit<ToolButtonProps, "iconName"> {
  expanded: boolean;
  iconName?: Icons;
}

const ExpandToolButton = (props: ExpandToolButtonProps) => {
  const { expanded, iconName, ...toolButtonProps } = props;
  return (
    <Container expanded={expanded}>
      <ToolButton iconName={iconName || "arrowDown"} {...toolButtonProps} />
    </Container>
  );
};

export default ExpandToolButton;

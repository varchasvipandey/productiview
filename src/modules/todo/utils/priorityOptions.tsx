import { DropdownOptionProps } from "components";
import { TodoTaskPriority } from "data";
import { getIcon } from "icons";

const NegligibleIcon = getIcon("doubleArrowDown");
const LowIcon = getIcon("arrowDown");
const MediumIcon = getIcon("equal");
const HighIcon = getIcon("arrowUp");
const CriticalIcon = getIcon("doubleArrowUp");

const commonStyles = {
  display: "flex",
  alignItems: "center",
};

const smallIconStyles = {
  ...commonStyles,
  fontSize: "2.4rem",
  marginLeft: "-4px",
};

const bigIconStyles = {
  ...commonStyles,
  fontSize: "1.6rem",
};

const priorityColors = {
  negligible: "#02B290",
  low: "#1B98F5",
  medium: "#F7CD2E",
  high: "#E07C24",
  critical: "#E21717",
};

export interface PriorityOption extends Omit<DropdownOptionProps, "value"> {
  value: TodoTaskPriority;
}

export const priorityOptions: PriorityOption[] = [
  {
    id: 1,
    label: (
      <NegligibleIcon
        style={{ ...bigIconStyles, fill: priorityColors.negligible }}
      />
    ),
    value: "negligible",
  },
  {
    id: 2,
    label: <LowIcon style={{ ...smallIconStyles, fill: priorityColors.low }} />,
    value: "low",
  },
  {
    id: 3,
    label: (
      <MediumIcon style={{ ...bigIconStyles, fill: priorityColors.medium }} />
    ),
    value: "medium",
  },
  {
    id: 4,
    label: (
      <HighIcon style={{ ...smallIconStyles, fill: priorityColors.high }} />
    ),
    value: "high",
  },
  {
    id: 5,
    label: (
      <CriticalIcon
        style={{ ...bigIconStyles, fill: priorityColors.critical }}
      />
    ),
    value: "critical",
  },
];

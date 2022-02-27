import { useMemo } from "react";
import { CheckboxProps } from "./checkbox.type";
import { Container } from "./checkbox.style";
import { sliceId } from "utils";
import { getIcon } from "icons";

const Checkbox = (props: CheckboxProps) => {
  const { id, containerSx, label, ...rest } = props;

  const elemId = useMemo(() => id || sliceId(), [id]);
  const CheckIcon = useMemo(
    () => (rest.checked ? getIcon("checked") : getIcon("unchecked")),
    [rest.checked]
  );

  return (
    <Container containerSx={containerSx} checked={rest.checked}>
      <input type="checkbox" {...rest} id={elemId} />

      <label htmlFor={elemId}>
        <div className="checkbox-icon">
          <CheckIcon />
        </div>
        <p className="label-text">{label}</p>
      </label>
    </Container>
  );
};

export default Checkbox;

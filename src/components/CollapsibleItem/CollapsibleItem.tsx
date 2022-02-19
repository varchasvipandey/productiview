import { FC, useState, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { Container } from './collapsibleItem.style';
import { getIcon, Icons } from 'icons';

interface CollapsibleItemProps {
  defaultSetOpen?: boolean;
  title: string;
  description?: string;
  Icon?: ReactNode;
  disabled?: boolean;
}

const ArrowDownIcon = getIcon('arrowDown');

const CollapsibleItem: FC<CollapsibleItemProps> = (props) => {
  const { children, title, description, Icon, disabled = false } = props;
  const [open, setOpen] = useState(false);

  const handleOpenToggle = () => !disabled && setOpen((prev) => !prev);

  return (
    <Container className="glass" open={open} disabled={disabled}>
      <div className="header" onClick={handleOpenToggle}>
        <div className="header__info">
          {Icon && <div className="header__info__icon">{Icon}</div>}
          <div className="header__info__text">
            <p className="header__info__text__heading sectionHeading">{title}</p>
            {!!description && <p className="header__info__text__description">{description}</p>}
          </div>
        </div>
        <div className="header__action">
          <ArrowDownIcon />
        </div>
      </div>

      {open && <div className="body">{children}</div>}
    </Container>
  );
};

export default CollapsibleItem;

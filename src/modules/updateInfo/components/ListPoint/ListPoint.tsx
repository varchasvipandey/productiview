import { Container } from "./listPoint.style";

interface ListPointProps {
  title: string;
  description?: string;
  caption?: string;
}

const ListPoint = ({ title, description, caption }: ListPointProps) => {
  return (
    <Container>
      <p className="item-title text">
        {title} {description && <span>- {description}</span>}
      </p>
      {caption && <p className="item-caption caption">{caption}</p>}
    </Container>
  );
};

export default ListPoint;

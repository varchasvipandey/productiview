import { Container, Item } from "./about.style";

const About = () => {
  return (
    <Container>
      <Item>
        <p className="item-heading">Version</p>
        <div className="item-body">
          <p className="item-body__text">1.0.0 Beta</p>
        </div>
      </Item>
      <Item>
        <p className="item-heading">Source code</p>
        <div className="item-body">
          <a
            href="https://github.com/varchasvipandey/productiview/tree/production"
            className="item-body__link"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/varchasvipandey/productiview/tree/production
          </a>
        </div>
      </Item>
      <Item>
        <p className="item-heading">Developer</p>
        <div className="item-body">
          <a
            href="https://linkedin.com/in/varchasvipandey"
            className="item-body__link"
            target="_blank"
            rel="noreferrer"
          >
            Varchasvi Pandey
          </a>
        </div>
      </Item>
    </Container>
  );
};

export default About;

import { memo, useEffect } from "react";
import { Logo } from "components";
import { Container } from "./welcome.style";

interface WelcomeProps {
  handleClick: () => void;
}

const Welcome = ({ handleClick }: WelcomeProps) => {
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <Container>
      <Logo
        sx={{
          opacity: 0,
          transform: "scale(0.95)",
          animation: "cinematicFadeIn 4s ease-in-out forwards",
          animationDelay: "2s",
        }}
      />

      <p className="action-text">Click anywhere to start</p>
    </Container>
  );
};

export default memo(Welcome);

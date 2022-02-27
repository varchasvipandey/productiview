import { memo, useState, useCallback, useRef, useEffect } from "react";
import { getOnboardingImage, totalOnboardingImages } from "../../utils";
import { Container } from "./imagesDisplay.style";

interface ImagesDisplayProps {
  handleProceed: () => void;
}

const ImagesDisplay = ({ handleProceed }: ImagesDisplayProps) => {
  const imageContainerElem = useRef<HTMLDivElement | null>(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = useCallback(() => {
    if (currentImageIndex < totalOnboardingImages - 1)
      setCurrentImageIndex((prev) => prev + 1);
    else handleProceed();
  }, [currentImageIndex]);

  useEffect(() => {
    const imageContainer = imageContainerElem.current;
    if (!imageContainer) return;

    if (currentImageIndex === 0) imageContainer.classList.add("animateImgIn");
    else {
      // inject fade in animation
      imageContainer.classList.remove("animateImgIn");
      imageContainer.classList.add("animateImgOut");

      setTimeout(() => {
        imageContainer.classList.remove("animateImgOut");
        imageContainer.classList.add("animateImgIn");
      }, 1500);
    }

    if (currentImageIndex === totalOnboardingImages - 1) {
      if (navigator)
        navigator.clipboard.writeText("https://productiview.netlify.app");
    }
  }, [currentImageIndex]);

  return (
    <Container>
      <div className="image animateImgIn" ref={imageContainerElem}>
        <img
          src={getOnboardingImage(currentImageIndex)}
          alt="Productiview onboarding"
          loading="eager"
        />
      </div>

      <p className="action-text" onClick={handleNext}>
        {currentImageIndex >= totalOnboardingImages - 1 ? "Let's Go" : "Next"}
      </p>
    </Container>
  );
};

export default memo(ImagesDisplay);

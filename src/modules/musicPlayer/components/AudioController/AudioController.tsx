import { Container } from "./audioController.style";
import { getIcon } from "icons";
import { ToolButton } from "components";
import { memo } from "react";

const DiscIcon = getIcon("disc");

interface AudioControllerProps {
  handlePlayPause: () => void;
  handleNext: () => void;
  handlePrev: () => void;
  isPlaying: boolean;
}

const AudioController = ({
  handlePlayPause,
  handleNext,
  handlePrev,
  isPlaying,
}: AudioControllerProps) => {
  return (
    <Container className="flex-spread-row" isPlaying={isPlaying}>
      <div className="animated-disc">
        <DiscIcon />
      </div>

      <div className="actions-set">
        <div className="action" title="Previous audio">
          <ToolButton
            iconName="backward"
            onClick={handlePrev}
            ariaLabel="Previous audio"
          />
        </div>
        <div
          className="action"
          title={isPlaying ? "Pause audio" : "Play audio"}
        >
          <ToolButton
            iconName={isPlaying ? "pause" : "play"}
            onClick={handlePlayPause}
            ariaLabel={isPlaying ? "Pause audio" : "Play audio"}
          />
        </div>
        <div className="action" title="Next audio">
          <ToolButton
            iconName="forward"
            onClick={handleNext}
            ariaLabel="Next audio"
          />
        </div>
      </div>
    </Container>
  );
};

export default memo(AudioController);

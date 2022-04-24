import { Container } from "./audioController.style";
import { getIcon } from "icons";
import { ToolButton, ActionSet } from "components";
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

      <ActionSet.ActionSetWrapper>
        <ActionSet.Action title="Previous audio">
          <ToolButton
            iconName="backward"
            onClick={handlePrev}
            ariaLabel="Previous audio"
          />
        </ActionSet.Action>
        <ActionSet.Action title={isPlaying ? "Pause audio" : "Play audio"}>
          <ToolButton
            iconName={isPlaying ? "pause" : "play"}
            onClick={handlePlayPause}
            ariaLabel={isPlaying ? "Pause audio" : "Play audio"}
          />
        </ActionSet.Action>
        <ActionSet.Action title="Next audio">
          <ToolButton
            iconName="forward"
            onClick={handleNext}
            ariaLabel="Next audio"
          />
        </ActionSet.Action>
      </ActionSet.ActionSetWrapper>
    </Container>
  );
};

export default memo(AudioController);

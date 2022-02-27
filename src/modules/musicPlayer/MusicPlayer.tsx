import { useState, useEffect, useCallback, useRef } from "react";
import { Container } from "./musicPlayer.style";
import { onlineMusicList } from "./utils";
import { AudioController, AudioInfo } from "./components";

const MusicPlayer = () => {
  const [music, setMusic] = useState({
    list: onlineMusicList,
    selectedIndex: 0,
    isPlaying: false,
  });

  const audioElem = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = useCallback(() => {
    setMusic((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
  }, []);

  const handleNext = useCallback(() => {
    setMusic((prev) => ({
      ...prev,
      selectedIndex: (prev.selectedIndex + 1) % prev.list.length,
    }));
  }, []);

  const handlePrev = useCallback(() => {
    setMusic((prev) => ({
      ...prev,
      selectedIndex:
        (prev.selectedIndex - 1 + prev.list.length) % prev.list.length,
    }));
  }, []);

  // loop buffer
  const handleBufferLoop = useRef(() => {
    const currentLoadedMusic = audioElem.current;
    if (!currentLoadedMusic) return;

    const buffer = 1;
    if (currentLoadedMusic.currentTime > currentLoadedMusic.duration - buffer) {
      currentLoadedMusic.currentTime = 0;
      currentLoadedMusic.play();
    }
  });

  // handle elem play pause and loop buffer based on state
  useEffect(() => {
    const currentLoadedMusic = audioElem.current;
    if (!currentLoadedMusic) return;

    currentLoadedMusic.addEventListener("timeupdate", handleBufferLoop.current);

    if (music.isPlaying) {
      currentLoadedMusic.play();
    } else {
      currentLoadedMusic.pause();
    }

    return () => {
      currentLoadedMusic.removeEventListener(
        "timeupdate",
        handleBufferLoop.current
      );
    };
  }, [music.isPlaying, music.selectedIndex]);

  return (
    <>
      <audio
        src={music.list[music.selectedIndex].url}
        ref={audioElem}
        style={{ display: "none" }}
      />

      <Container className="glass-inverted flex-spread-col appear-slow">
        <AudioController
          handlePlayPause={handlePlayPause}
          handleNext={handleNext}
          handlePrev={handlePrev}
          isPlaying={music.isPlaying}
        />
        <AudioInfo {...music.list[music.selectedIndex]} />
      </Container>
    </>
  );
};

export default MusicPlayer;

// components/AudioPlayer.tsx

import ReactPlayer from "react-player";
import { useRef, useState } from "react";
import { AudioDetails } from "./AudioDetails";

type Props = {
  url: string;
  title: string;
  author: string;
  thumbnail: string;
  others?: string;
};

export const AudioPlayer = ({ url, title, author, thumbnail }: Props) => {
  const playerRef = useRef<ReactPlayer | null>(null);

  // defining states for audio player
  const [playing, setPlaying] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [progress, setProgress] = useState<number>(0);
  const [loop, setLoop] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);

  // defining event handler functions
  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const toggleMute = () => {
    // TODO: Look up this code in the future and use setMuted(prevMuted => !prevMuted)
    setMuted(!muted);
  };

  const handleProgress = (state: any) => {
    setProgress(state.played);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const toggleLoop = () => {
    // TODO: Look up this code in the future and use setLoop(prevLoop => !prevLoop)
    setLoop(!loop);
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={playing}
        volume={volume}
        muted={muted}
        loop={loop}
        onPlay={handlePlay}
        onPause={handlePause}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />

      <div className="shadow rounded-xl">
        <AudioDetails title={title} author={author} thumbnail={thumbnail} />
      </div>
    </div>
  );
};

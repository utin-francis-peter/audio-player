// components/AudioPlayer.tsx

import ReactPlayer from "react-player";
import { useRef } from "react";

type Props = {
  url: string;
  title: string;
  author: string;
  thumbnail: string;
};

export const AudioPlayer = ({ url, title, author, thumbnail }: Props) => {
  const playerRef = useRef<ReactPlayer | null>(null);

  return (
    <div>
      <ReactPlayer ref={playerRef} url={url} />
    </div>
  );
};

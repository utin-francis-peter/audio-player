import { useRef, useState, useMemo } from "react";

type Props = {
  playerRef: any;
  playing: boolean;
  loop: boolean;
  volume: number;
  muted: boolean;
  progress: number;
  duration: number;

  handlePlay: () => void;
  toggleMute: () => void;
  toggleLoop: () => void;
  handlePause: () => void;
  handleVolumeChange: (newVolume: number) => void;
};

export const PlayerControls = ({
  playerRef,
  loop,
  playing,
  volume,
  muted,
  progress,
  duration,
  handlePlay,
  toggleLoop,
  handlePause,
  handleVolumeChange,
  toggleMute,
}: Props) => {
  const [played, setPlayed] = useState<number>(0);
  const [seeking, setSeeking] = useState<boolean>(false);

  const playPauseBtnRef = useRef<HTMLButtonElement | null>(null);

  // play and pause
  const togglePlayAndPause = () => {
    playing ? handlePause() : handlePlay();
  };

  // seeking
  const handleSeekMouseDown = (e: any) => {
    setSeeking(true);
  };
  const handleSeekChange = (e: any) => {
    setPlayed(parseFloat(e.target.value));
  };
  const handleSeekMouseUp = (e: any) => {
    playerRef.current?.seekTo(parseFloat(e.target.value));
    setSeeking(false);
  };

  // volume
  const handleChangeInVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleVolumeChange(Number(e.target.value));
  };

  // progress
  // useMemo(() => {
  //   setPlayed((prevPlayed) => {
  //     if (!seeking && prevPlayed !== progress) {
  //       return progress;
  //     }
  //   });
  // }, [progress, seeking]);

  return <div className="bg-gray-50  rounded-b-xl py-10"></div>;
};

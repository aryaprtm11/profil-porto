"use client";

import { useEffect, useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";

const track = {
  src: "/MP3/RUNWAY.mp3",
};

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      setHasError(true);
      setIsPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);
    audio.volume = 0.45;

    const playAudio = () => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    };

    const autoplayTimer = window.setTimeout(() => {
      playAudio();
    }, 3200);

    const handleFirstInteraction = () => {
      playAudio();
    };

    window.addEventListener("pointerdown", handleFirstInteraction, {
      once: true,
    });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });
    window.addEventListener("wheel", handleFirstInteraction, {
      once: true,
      passive: true,
    });
    window.addEventListener("touchstart", handleFirstInteraction, {
      once: true,
      passive: true,
    });

    return () => {
      window.clearTimeout(autoplayTimer);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("wheel", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio || hasError) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[80] rounded-full border border-black/10 bg-white/90 p-2 text-black shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-xl">
      <audio ref={audioRef} src={track.src} preload="auto" autoPlay loop />
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={isPlaying ? "Pause music" : "Play music"}
          onClick={togglePlayback}
          disabled={hasError}
          className="cursor-target inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:bg-black/25"
        >
          {isPlaying ? (
            <FiPause aria-hidden="true" className="h-5 w-5" />
          ) : (
            <FiPlay aria-hidden="true" className="h-5 w-5 translate-x-0.5" />
          )}
        </button>
        <div
          aria-hidden="true"
          className="flex h-8 items-end gap-1 pr-3"
        >
          {[0, 1, 2].map((bar) => (
            <span
              key={bar}
              className={`block w-1.5 rounded-full bg-black transition-all duration-300 ${
                isPlaying ? "animate-music-bar" : "h-2 opacity-35"
              }`}
              style={{ animationDelay: `${bar * 120}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

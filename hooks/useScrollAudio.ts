import { useEffect, useRef, useState } from "react";
import { audioFallback } from "@/utils/audioFallback";

interface UseScrollAudioProps {
  audioSrc: string;
  scrollThreshold?: number;
  volume?: number;
  loop?: boolean;
  enableFallback?: boolean;
}

export const useScrollAudio = ({
  audioSrc,
  scrollThreshold = 100,
  volume = 0.3,
  loop = true,
  enableFallback = true,
}: UseScrollAudioProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [userInteracted, setUserInteracted] = useState(true); // Start as true to allow immediate playback
  const [useFallback, setUseFallback] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [autoPlayTriggered, setAutoPlayTriggered] = useState(false);

  useEffect(() => {
    // Reset states
    setIsLoaded(false);
    setUseFallback(false);
    setAudioError(null);

    // Try to load audio file
    const audio = new Audio();
    audio.loop = loop;
    audio.volume = volume;
    audioRef.current = audio;

    // Handle audio loading
    const handleCanPlay = () => {
      setIsLoaded(true);
      setUseFallback(false);
      setAudioError(null);
    };

    const handleLoadError = (e: Event) => {
      console.warn("Failed to load birthday music file:", audioSrc);
      setIsLoaded(false);
      setAudioError("Failed to load audio file");

      if (enableFallback && audioFallback.isSupported()) {
        console.info("Using fallback birthday melody");
        setUseFallback(true);
        setIsLoaded(true); // Consider fallback as "loaded"
        setAudioError(null);
      }
    };

    // Set up event listeners before setting src
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("canplaythrough", handleCanPlay);
    audio.addEventListener("error", handleLoadError);
    audio.addEventListener("abort", handleLoadError);

    // Start loading the audio
    audio.src = audioSrc;
    audio.preload = "auto";

    // Set attributes that might help with autoplay
    audio.setAttribute("autoplay", "true");
    audio.setAttribute("muted", "false"); // We want sound
    audio.crossOrigin = "anonymous";

    // Test if file exists by trying to load it
    audio.load();

    // Cleanup
    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.removeEventListener("error", handleLoadError);
      audio.removeEventListener("abort", handleLoadError);
      audio.pause();
      audio.src = "";
      if (useFallback) {
        audioFallback.stop();
      }
    };
  }, [audioSrc, loop, volume, enableFallback]);

  // Auto-play on page load - try to start music immediately when loaded
  useEffect(() => {
    if (isLoaded && !autoPlayTriggered) {
      setAutoPlayTriggered(true);

      // Attempt to start playing immediately
      const attemptAutoPlay = () => {
        if (useFallback) {
          audioFallback
            .play(volume)
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.warn("Auto-play blocked by browser:", error);
              // Fallback will be triggered by scroll
            });
        } else if (audioRef.current) {
          audioRef.current
            .play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.warn("Auto-play blocked by browser:", error);
              // Try fallback if enabled
              if (enableFallback && audioFallback.isSupported()) {
                setUseFallback(true);
                audioFallback
                  .play(volume)
                  .then(() => {
                    setIsPlaying(true);
                  })
                  .catch((fallbackError) => {
                    console.warn(
                      "Fallback auto-play also blocked:",
                      fallbackError
                    );
                  });
              }
            });
        }
      };

      // Multiple attempts with different strategies
      attemptAutoPlay(); // Try immediately
      setTimeout(attemptAutoPlay, 100); // Try after DOM settles
      setTimeout(attemptAutoPlay, 500); // Try after page loads
      setTimeout(attemptAutoPlay, 1000); // Final attempt
    }
  }, [isLoaded, autoPlayTriggered, useFallback, volume, enableFallback]);

  // Scroll handler - music starts with minimal scrolling!
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Trigger on ANY scroll if music isn't already playing
      if (scrollY > scrollThreshold && !hasScrolled && isLoaded && !isPlaying) {
        setHasScrolled(true);

        // Try to start playing when user scrolls (backup method)
        const startMusic = () => {
          if (useFallback) {
            // Use fallback audio
            audioFallback
              .play(volume)
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                console.warn(
                  "Could not play fallback birthday music on scroll:",
                  error
                );
              });
          } else if (audioRef.current) {
            // Use regular audio file
            audioRef.current
              .play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                console.warn("Could not play birthday music on scroll:", error);
                // Try fallback if regular audio fails
                if (enableFallback && audioFallback.isSupported()) {
                  setUseFallback(true);
                  audioFallback
                    .play(volume)
                    .then(() => {
                      setIsPlaying(true);
                    })
                    .catch((fallbackError) => {
                      console.warn(
                        "Fallback audio also failed on scroll:",
                        fallbackError
                      );
                    });
                }
              });
          }
        };

        // Start music on scroll
        startMusic();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    scrollThreshold,
    hasScrolled,
    isLoaded,
    isPlaying,
    useFallback,
    volume,
    enableFallback,
  ]);

  const play = () => {
    if (!isLoaded) return;

    if (useFallback) {
      audioFallback
        .play(volume)
        .then(() => setIsPlaying(true))
        .catch((error) =>
          console.warn("Could not play fallback audio:", error)
        );
    } else if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.warn("Could not play audio:", error);
          // Try fallback if regular audio fails
          if (enableFallback && audioFallback.isSupported()) {
            setUseFallback(true);
            audioFallback
              .play(volume)
              .then(() => setIsPlaying(true))
              .catch((fallbackError) => {
                console.warn("Fallback audio also failed:", fallbackError);
              });
          }
        });
    }
  };

  const pause = () => {
    if (useFallback) {
      audioFallback.stop();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  const setVolume = (newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));

    if (useFallback) {
      audioFallback.setVolume(clampedVolume);
    } else if (audioRef.current) {
      audioRef.current.volume = clampedVolume;
    }
  };

  return {
    isPlaying,
    isLoaded,
    hasScrolled,
    userInteracted,
    useFallback,
    audioError,
    autoPlayTriggered,
    play,
    pause,
    setVolume,
    audioRef: audioRef.current,
  };
};

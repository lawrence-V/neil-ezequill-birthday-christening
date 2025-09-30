"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause, Music } from "lucide-react";

export const SimpleBirthdayMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Create audio element
    const audio = new Audio("/audio/birthday-theme.mp3");
    audio.loop = true;
    audio.volume = volume;
    audio.preload = "auto";
    audioRef.current = audio;

    // Function to start music
    const startMusic = () => {
      if (!hasStarted && audioRef.current) {
        setHasStarted(true);
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            console.log("🎵 Birthday music started!");
          })
          .catch((error) => {
            console.log("Audio file not found, using fallback melody");
            playFallbackMelody();
          });
      }
    };

    // Scroll listener
    const handleScroll = () => {
      if (window.scrollY > 20) {
        startMusic();
      }
    };

    // Try to start immediately (might be blocked)
    setTimeout(() => {
      startMusic();
    }, 1000);

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [hasStarted, volume]);

  // Simple fallback melody using Web Audio API
  const playFallbackMelody = () => {
    try {
      const audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();

      const playNote = (frequency: number, duration: number, delay: number) => {
        setTimeout(() => {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          oscillator.frequency.value = frequency;
          oscillator.type = "sine";

          gainNode.gain.setValueAtTime(0, audioContext.currentTime);
          gainNode.gain.linearRampToValueAtTime(
            0.1,
            audioContext.currentTime + 0.01
          );
          gainNode.gain.exponentialRampToValueAtTime(
            0.01,
            audioContext.currentTime + duration - 0.01
          );

          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + duration);

          setIsPlaying(true);
        }, delay);
      };

      // Happy Birthday melody
      const notes = [
        { freq: 261.63, duration: 0.5, delay: 0 }, // C
        { freq: 261.63, duration: 0.5, delay: 500 }, // C
        { freq: 293.66, duration: 0.8, delay: 1000 }, // D
        { freq: 261.63, duration: 0.8, delay: 1800 }, // C
        { freq: 349.23, duration: 0.8, delay: 2600 }, // F
        { freq: 329.63, duration: 1.2, delay: 3400 }, // E
      ];

      notes.forEach((note) => {
        playNote(note.freq, note.duration, note.delay);
      });

      // Loop the melody
      setInterval(() => {
        notes.forEach((note) => {
          playNote(note.freq, note.duration, note.delay);
        });
      }, 5000);
    } catch (error) {
      console.warn("Fallback melody failed:", error);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => playFallbackMelody());
      }
    } else {
      playFallbackMelody();
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMuted = !isMuted;
      setIsMuted(newMuted);
      audioRef.current.volume = newMuted ? 0 : volume;
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current && !isMuted) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      {/* Music Status Indicator */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-4 py-2 shadow-xl">
          <div className="flex items-center space-x-2">
            <Music className={`w-4 h-4 ${isPlaying ? "animate-bounce" : ""}`} />
            <span className="text-sm font-medium">
              {isPlaying
                ? "🎵 Playing"
                : hasStarted
                ? "⏸️ Paused"
                : "🎵 Scroll for music!"}
            </span>
          </div>
        </div>
      </div>

      {/* Simple Audio Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-xl p-3">
          <div className="flex items-center space-x-3">
            <button
              onClick={togglePlay}
              className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300"
              title={isPlaying ? "Pause music" : "Play music"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-16 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      {/* {!hasStarted && (
        <div className="fixed bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-2xl border-2 border-blue-200 animate-bounce">
            <div className="flex items-center space-x-2 text-blue-700">
              <Music className="w-5 h-5 animate-pulse" />
              <span className="font-medium">Scroll down for birthday music! 🎵</span>
              <div className="animate-bounce">↓</div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

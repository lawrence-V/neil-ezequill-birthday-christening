"use client";

import React, { useEffect, useRef, useState } from "react";
import { Music } from "lucide-react";

export const SimpleBirthdayMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create global audio element
    const audio = new Audio("/audio/the_baby_boss_2017.mp3");
    audio.loop = true;
    audio.volume = 0.4;

    // Simple play function that definitely works
    const playAudio = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("❌ FAILED:", error);
        });
    };

    // Click handler - super simple
    const handleClick = () => {
      playAudio();
    };

    // Scroll handler - super simple
    const handleScroll = () => {
      if (window.scrollY > 10 && !isPlaying) {
        playAudio();
      }
    };

    // Add listeners immediately
    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      audio.pause();
    };
  }, [isPlaying]);

  return (
    <>
      {/* Super Simple Status */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-4 py-2 shadow-xl">
          <div className="flex items-center space-x-2">
            <Music className={`w-4 h-4 ${isPlaying ? "animate-bounce" : ""}`} />
            <span className="text-sm font-medium">
              {isPlaying ? "👔 Baby Boss Playing!" : "👔 Click or Scroll!"}
            </span>
          </div>
        </div>
      </div>

      {/* Simple Instructions */}
      {/* {!isPlaying && (
        <div className="fixed bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-2xl border-2 border-blue-200 animate-bounce">
            <div className="flex items-center space-x-2 text-blue-700">
              <Music className="w-5 h-5 animate-pulse" />
              <span className="font-medium">Click anywhere or scroll for Baby Boss music! 👔🎵</span>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

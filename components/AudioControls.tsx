"use client";

import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';

interface AudioControlsProps {
  isPlaying: boolean;
  isLoaded: boolean;
  userInteracted: boolean;
  onPlay: () => void;
  onPause: () => void;
  onVolumeChange: (volume: number) => void;
  initialVolume?: number;
}

export const AudioControls: React.FC<AudioControlsProps> = ({
  isPlaying,
  isLoaded,
  userInteracted,
  onPlay,
  onPause,
  onVolumeChange,
  initialVolume = 0.3
}) => {
  const [volume, setVolume] = useState(initialVolume);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleVolumeChange = (newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolume(clampedVolume);
    onVolumeChange(isMuted ? 0 : clampedVolume);
  };

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    onVolumeChange(newMutedState ? 0 : volume);
  };

  const togglePlay = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
  };

  // Show loading message while audio is loading
  if (!isLoaded) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-3 shadow-xl animate-pulse border-2 border-white/20 backdrop-blur-sm">
          <div className="flex items-center space-x-2">
            <Music className="w-5 h-5 animate-spin" />
            <span className="text-sm font-medium">Loading birthday music... 🎵</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 overflow-hidden">
        <div className="flex items-center p-4">
          {/* Music Icon & Status */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <Music className={`w-6 h-6 text-white ${isPlaying ? 'animate-bounce' : ''}`} />
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-800">Birthday Music</span>
              <span className="text-xs text-gray-600">
                {!isLoaded ? 'Loading...' : isPlaying ? 'Playing 🎵' : 'Paused'}
              </span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={togglePlay}
              disabled={!isLoaded}
              className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              title={isPlaying ? 'Pause music' : 'Play music'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              title="Volume controls"
            >
              <Volume2 className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Expanded Volume Controls */}
        {isExpanded && (
          <div className="border-t border-gray-200 p-4 bg-white/95 backdrop-blur-md">
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleMute}
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              <div className="flex-1">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #8b5cf6 ${volume * 100}%, #e5e7eb ${volume * 100}%, #e5e7eb 100%)`
                  }}
                />
              </div>

              <span className="text-xs text-gray-600 w-8 text-center">
                {Math.round(volume * 100)}%
              </span>
            </div>
            
            <div className="mt-3 text-center">
              <span className="text-xs text-gray-500">
                🎂 Music starts with just one tiny scroll! 🎈
              </span>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          border: 2px solid white;
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
};
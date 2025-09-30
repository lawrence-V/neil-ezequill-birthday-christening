/**
 * Simple script to create a test audio file using Web Audio API
 * Run this in browser console to generate a short birthday tune
 */

function createBirthdayAudio() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const sampleRate = audioContext.sampleRate;
  const duration = 8; // 8 seconds
  const frameCount = sampleRate * duration;
  
  // Create an audio buffer
  const arrayBuffer = audioContext.createBuffer(1, frameCount, sampleRate);
  const channelData = arrayBuffer.getChannelData(0);
  
  // Happy Birthday melody frequencies (Hz)
  const notes = [
    261.63, 261.63, 293.66, 261.63, 349.23, 329.63, // Happy Birthday to
    261.63, 261.63, 293.66, 261.63, 392.00, 349.23, // you, Happy Birthday to
    261.63, 261.63, 523.25, 440.00, 349.23, 329.63, 293.66, // you, Happy Birthday dear
    466.16, 466.16, 440.00, 349.23, 392.00, 349.23   // [Name], Happy Birthday to you
  ];
  
  const noteDuration = 0.3; // Each note lasts 0.3 seconds
  
  // Generate audio data
  for (let i = 0; i < frameCount; i++) {
    const time = i / sampleRate;
    const noteIndex = Math.floor(time / noteDuration);
    
    if (noteIndex < notes.length) {
      const frequency = notes[noteIndex];
      const volume = 0.3;
      
      // Create a simple sine wave with envelope
      const envelope = Math.max(0, 1 - (time % noteDuration) / noteDuration);
      channelData[i] = Math.sin(2 * Math.PI * frequency * time) * volume * envelope;
    } else {
      channelData[i] = 0;
    }
  }
  
  return arrayBuffer;
}

function downloadAudioBuffer(buffer, filename = 'birthday-theme.wav') {
  // Convert AudioBuffer to WAV
  const length = buffer.length;
  const numberOfChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const arrayBuffer = new ArrayBuffer(44 + length * 2);
  const view = new DataView(arrayBuffer);
  
  // WAV header
  const writeString = (offset, string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };
  
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + length * 2, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numberOfChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numberOfChannels * 2, true);
  view.setUint16(32, numberOfChannels * 2, true);
  view.setUint16(34, 16, true);
  writeString(36, 'data');
  view.setUint32(40, length * 2, true);
  
  // Convert float samples to 16-bit PCM
  const channelData = buffer.getChannelData(0);
  let offset = 44;
  for (let i = 0; i < length; i++) {
    const sample = Math.max(-1, Math.min(1, channelData[i]));
    view.setInt16(offset, sample * 0x7FFF, true);
    offset += 2;
  }
  
  // Create and download blob
  const blob = new Blob([arrayBuffer], { type: 'audio/wav' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// To use: run this in browser console
// const audioBuffer = createBirthdayAudio();
// downloadAudioBuffer(audioBuffer);
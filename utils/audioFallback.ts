/**
 * Audio fallback utility for birthday music
 * Creates a simple programmatic birthday melody when no audio file is available
 */

export class AudioFallback {
  private audioContext: AudioContext | null = null;
  private gainNode: GainNode | null = null;
  private isPlaying = false;
  private oscillators: OscillatorNode[] = [];

  constructor() {
    // Initialize Web Audio API if available
    if (typeof window !== 'undefined' && (window.AudioContext || (window as any).webkitAudioContext)) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  // Happy Birthday melody notes (simplified)
  private readonly birthdayMelody = [
    { note: 261.63, duration: 0.5 }, // C4 - Hap-
    { note: 261.63, duration: 0.5 }, // C4 - py
    { note: 293.66, duration: 1.0 }, // D4 - Birth-
    { note: 261.63, duration: 1.0 }, // C4 - day
    { note: 349.23, duration: 1.0 }, // F4 - to
    { note: 329.63, duration: 2.0 }, // E4 - you
    
    { note: 261.63, duration: 0.5 }, // C4 - Hap-
    { note: 261.63, duration: 0.5 }, // C4 - py
    { note: 293.66, duration: 1.0 }, // D4 - Birth-
    { note: 261.63, duration: 1.0 }, // C4 - day
    { note: 392.00, duration: 1.0 }, // G4 - to
    { note: 349.23, duration: 2.0 }, // F4 - you
  ];

  private createBeep(frequency: number, duration: number, volume: number = 0.1): Promise<void> {
    return new Promise((resolve) => {
      if (!this.audioContext || !this.gainNode) {
        resolve();
        return;
      }

      const oscillator = this.audioContext.createOscillator();
      const envelope = this.audioContext.createGain();
      
      // Connect nodes
      oscillator.connect(envelope);
      envelope.connect(this.gainNode);
      
      // Configure oscillator
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
      
      // Configure envelope for smooth sound
      envelope.gain.setValueAtTime(0, this.audioContext.currentTime);
      envelope.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.05);
      envelope.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration - 0.05);
      
      // Store oscillator reference
      this.oscillators.push(oscillator);
      
      // Start and stop
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration);
      
      // Clean up
      oscillator.onended = () => {
        const index = this.oscillators.indexOf(oscillator);
        if (index > -1) {
          this.oscillators.splice(index, 1);
        }
        resolve();
      };
    });
  }

  async play(volume: number = 0.1): Promise<void> {
    if (!this.audioContext) {
      console.warn('Web Audio API not available, cannot play fallback audio');
      return;
    }

    if (this.isPlaying) {
      return;
    }

    this.isPlaying = true;

    // Resume audio context if suspended
    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }

    // Create gain node if not exists
    if (!this.gainNode) {
      this.gainNode = this.audioContext.createGain();
      this.gainNode.connect(this.audioContext.destination);
    }

    try {
      // Play the melody
      for (const note of this.birthdayMelody) {
        if (!this.isPlaying) break;
        await this.createBeep(note.note, note.duration, volume);
        // Small pause between notes
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      // Add a longer pause before potentially looping
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.warn('Error playing fallback audio:', error);
    } finally {
      this.isPlaying = false;
    }
  }

  stop(): void {
    this.isPlaying = false;
    
    // Stop all active oscillators
    this.oscillators.forEach(osc => {
      try {
        osc.stop();
      } catch (e) {
        // Oscillator might already be stopped
      }
    });
    this.oscillators = [];
  }

  setVolume(volume: number): void {
    if (this.gainNode) {
      this.gainNode.gain.setValueAtTime(volume, this.audioContext?.currentTime || 0);
    }
  }

  isSupported(): boolean {
    return !!this.audioContext;
  }

  cleanup(): void {
    this.stop();
    if (this.audioContext && this.audioContext.state !== 'closed') {
      this.audioContext.close();
    }
    this.audioContext = null;
    this.gainNode = null;
  }
}

// Export a singleton instance
export const audioFallback = new AudioFallback();
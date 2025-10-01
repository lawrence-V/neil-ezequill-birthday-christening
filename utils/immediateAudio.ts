/**
 * Immediate audio playback utility
 * Attempts to play audio as soon as possible on page load
 */

export class ImmediateAudio {
  private static instance: ImmediateAudio | null = null;
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;

  static getInstance(): ImmediateAudio {
    if (!ImmediateAudio.instance) {
      ImmediateAudio.instance = new ImmediateAudio();
    }
    return ImmediateAudio.instance;
  }

  async createAndPlayAudio(
    src: string,
    volume: number = 0.3,
    loop: boolean = true
  ): Promise<boolean> {
    try {
      // Create audio element with maximum compatibility settings
      this.audio = document.createElement("audio");
      this.audio.src = src;
      this.audio.volume = volume;
      this.audio.loop = loop;
      this.audio.preload = "auto";

      // Add to DOM (some browsers require this)
      this.audio.style.display = "none";
      document.body.appendChild(this.audio);

      // Multiple compatibility attributes
      this.audio.setAttribute("autoplay", "autoplay");
      this.audio.setAttribute("preload", "auto");
      this.audio.muted = false;

      // Load and attempt to play
      await this.audio.load();

      // Try to play with promise handling
      const playPromise = this.audio.play();

      if (playPromise !== undefined) {
        await playPromise;
        this.isPlaying = true;

        return true;
      }

      return false;
    } catch (error) {
      console.warn("Immediate autoplay failed:", error);
      return false;
    }
  }

  stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isPlaying = false;

      // Remove from DOM
      if (this.audio.parentNode) {
        this.audio.parentNode.removeChild(this.audio);
      }
      this.audio = null;
    }
  }

  getIsPlaying(): boolean {
    return this.isPlaying;
  }

  getAudioElement(): HTMLAudioElement | null {
    return this.audio;
  }
}

// Global function to attempt immediate audio playback
export const attemptImmediatePlayback = async (
  src: string,
  volume: number = 0.3
): Promise<boolean> => {
  const immediateAudio = ImmediateAudio.getInstance();
  return await immediateAudio.createAndPlayAudio(src, volume);
};

# Birthday Music Files 🎵

This directory contains audio files for the birthday invitation's scroll-triggered music feature.

## Required Audio Files

Place the following audio file in this directory:
- `birthday-theme.mp3` or `birthday-theme.wav` - The main birthday music that plays when users scroll

## Recommended Kid-Friendly Birthday Music Options

### Option 1: Create Your Own (Recommended)
You can use any of these kid-friendly birthday songs:
- "Happy Birthday to You" (instrumental version)
- "Birthday Party" by The Kiboomers
- "It's Your Birthday" by VeggieTales
- "Birthday Song" by Super Simple Songs
- Custom instrumental versions of classic birthday tunes

### Option 2: Royalty-Free Music Sources
- **Freesound.org** - Community-driven audio library
- **YouTube Audio Library** - Free music for creators
- **Incompetech** - Kevin MacLeod's royalty-free music
- **Bensound** - Royalty-free music library
- **Zapsplat** - Sound effects and music library

### Option 3: Create a Simple Birthday Melody
Use online tools like:
- **GarageBand** (Mac) - Simple music creation
- **Audacity** (Free) - Audio editing and creation
- **Chrome Music Lab** - Browser-based music creation
- **BeepBox** - Simple chiptune music maker

## Audio File Requirements

- **Format**: MP3, WAV, or OGG
- **Duration**: 30 seconds to 2 minutes (will loop automatically)
- **Volume**: Normalized to prevent audio clipping
- **Size**: Under 5MB for optimal loading
- **Sample Rate**: 44.1 kHz or 48 kHz
- **Bit Depth**: 16-bit or 24-bit

## File Naming Convention

Use one of these exact filenames:
- `birthday-theme.mp3` (preferred)
- `birthday-theme.wav`
- `birthday-theme.ogg`

## Copyright Notice

⚠️ **Important**: Ensure you have the proper rights to use any audio files you place here. For commercial use or public hosting, use only:
- Royalty-free music
- Creative Commons licensed music
- Original compositions
- Music you have explicit permission to use

## Testing Your Audio

1. Place your audio file in this directory (named `birthday-theme.mp3`, `birthday-theme.wav`, or `birthday-theme.ogg`)
2. Run the development server: `npm run dev`
3. Open the birthday invitation in your browser
4. Click anywhere on the page to enable audio (required by browsers)
5. Scroll down just 50 pixels and music will **automatically start playing**!

### No Audio File? No Problem!

If you don't have an audio file, the app will automatically use a built-in birthday melody created with Web Audio API. The music will still play when you scroll!

### Quick Test Audio Generation

1. Open your browser's developer console (F12)
2. Copy and paste this code:
   ```javascript
   // Copy the code from create-test-audio.js file
   const audioBuffer = createBirthdayAudio();
   downloadAudioBuffer(audioBuffer);
   ```
3. A `birthday-theme.wav` file will download
4. Place it in this `/public/audio/` directory

## Volume and Quality Tips

- Keep the volume moderate (the component defaults to 30% volume)
- Use upbeat, cheerful melodies suitable for children
- Avoid sudden loud sounds or jarring transitions
- Test on different devices and browsers
- Consider file size for mobile users

---

🎂 **Happy Birthday Neil Ezequiel!** 🎈
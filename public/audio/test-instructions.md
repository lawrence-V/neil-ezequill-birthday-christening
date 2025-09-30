# Test Audio Instructions

## Quick Test (No Audio File Needed)

The app includes a built-in "Happy Birthday" melody generator that works without any audio files! Just:

1. Run `npm run dev`
2. Open http://localhost:3001
3. Scroll down (even just a tiny bit)
4. You should hear the birthday melody!

## How to Add Your Own Music

1. Find a birthday song you like (MP3, WAV, or OGG format)
2. Rename it to: `birthday-theme.mp3` 
3. Place it in this `/public/audio/` folder
4. Refresh the page - your music will play instead of the fallback melody!

## Current Implementation

- **Scroll trigger**: Music starts when you scroll more than 20 pixels
- **Auto-attempt**: Also tries to play after 1 second (might be blocked)
- **Fallback melody**: Built-in "Happy Birthday" tune if no file found
- **Visual feedback**: Shows status in top-right corner
- **Controls**: Play/pause and volume in bottom-right corner

## Troubleshooting

If no music plays at all:
1. Check browser console for error messages
2. Try refreshing the page
3. Make sure you're scrolling (even a little bit)
4. Check if browser has audio blocked (look for speaker icon in URL bar)
# Category to work reveal

Four two-second, silent authored transitions connect existing metallic symbols to real public work. The composition is editable in Remotion. No runtime React or Remotion code is shipped to the Astro site.

From this folder:

```powershell
npm ci
npm run render
ffmpeg -y -i ../public/media/motion/category-reveals.mp4 -ss 0 -t 2 -an -c:v libx264 -crf 24 -pix_fmt yuv420p ../public/media/motion/story.mp4
ffmpeg -y -i ../public/media/motion/category-reveals.mp4 -ss 2 -t 2 -an -c:v libx264 -crf 24 -pix_fmt yuv420p ../public/media/motion/learning.mp4
ffmpeg -y -i ../public/media/motion/category-reveals.mp4 -ss 4 -t 2 -an -c:v libx264 -crf 24 -pix_fmt yuv420p ../public/media/motion/digital.mp4
ffmpeg -y -i ../public/media/motion/category-reveals.mp4 -ss 6 -t 2 -an -c:v libx264 -crf 24 -pix_fmt yuv420p ../public/media/motion/systems.mp4
```

The website uses the rendered MP4 only after the section enters view. A static image and accessible HTML text remain available when motion is reduced or video cannot play.

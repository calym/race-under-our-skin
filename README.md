# race-under-our-skin
This project is built using the video-subtitles project as a base:
https://github.com/scimusmn/video-subtitles

A separate repository was created because it includes large changes specific to the Under Our Skin component in the Race2.0 exhibit.

Most players using the video app so far have between 1-3 videos; this one has 12. 
The styles in the VideoList component have been changed to accommodate a larger list.

This content was created outside the museum  by The Seattle Times, so an "About" button and route to 
provide context and attribution was added.

The subtitles are in .vtt format and, for convenience for this project, are included in the repo. The video assets are here:
https://drive.google.com/drive/u/0/folders/1obbM3j2PmoXCF7xybPsyecZo-1_mdjMD

Subtitles were created using amara.org. If edits need to be made, they should be updated both here and there.
Documentation for Amara and subtitle creation is here: https://smm.atlassian.net/wiki/spaces/EXHIBTS/pages/38895689/Creating+Captions+Subtitles

The contents of the original video-subtitles project is below.

The key goal is a reusable video player/caption component that uses html to display subtitles instead of having them baked into the video file.
It uses .vtt files referenced in the html video track tag to support subtitles in multiple languages for museum kiosks.

To run:
npm install
npm start

The player uses a JSON object to reference video assets and their associated vtt files and language options.
The root path assumes a list of videos for a touch screen interface.

There are many video kiosks running without a touch screen. To accommodate this, the /single route can be used to display a single looped video that does not display transport or language controls.

Components:
VideoList
  Renders a screen saver/landing page, list of video selections, and language selection button

SubtitleVideo:
  Renders a selected video with transport controls and language selection

## Documentation
Internal SMM docs: https://smm.atlassian.net/wiki/spaces/MED/pages/20971530/Kiosk+software+-+Video+player

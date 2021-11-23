# TLDR;
A mini-web-app to play random tracks at random starting point for a specified amount of time.

## Options
A few buttons available:
1. `Play New` - plays a random track from the existing list of tracks, 
1. `! I know` - in other words "get me the answer"
1. `Stop` - Stop current playing track
1. `Re-play`
1. `Different Time` - Replay the same track, but a different section of it (for a specified amount of time)

## Settings:
1. `Duration` - number of seconds to play(minimum 3)
1. `Playlist` - text area with the list of filenames in `/music` directory. Single track per line.
1. `Save` - save the settings above.

---

# Long Story:
During my college time, my girlfriend(now my wifey) had music classes (sequence of 2 or 3 terms) in which she had to memorize **A LOT** of music tracks. She had test/exams where an instructor would play random tracks for *15-30 seconds* and students needed to *guess* the name of the track. 

**I tried** helping her study - played random music tracks, let her think, come up with a guess, then I had to verify if she was correct. It was fun time! Ex: every time she was wrong and I gave her the correct track name she would say "that was the first thing in mind". HOWEVER, I was also a student with part time work at the time and didn't have much time to help her study across these terms. My girlfriend was exhausted and stressed out.

I decided to surprise her with a little help. *Overnight*, I wrote an initial version of this mini-web-app where she could play a random tracks for specified amount of time. In the next few days, I had to improve it to the point where she would be able to manage the list of tracks.

**End result** -- the app was VERY helpful to my girlfriend. She passed her classes. It was a fun project for me as well.

## Managing the list of tracks
1. The list of `.mp3`(or [other acceptable formats by your browser](https://www.w3schools.com/jsref/dom_obj_audio.asp)) should be stored in `/music` directory(relative to this file). 
1. The list of the files need to be in the `Playlist:` section.
	- If empty, on initial page load, the app will try to load the original playlist(files committed here/at the very bottom of the page).
	- This list can also be updated. Ex: if you sure you know some tracks and you don't want to randomly play them, you can remove them from the list and focus on the ones you NEED to learn(no need to remove these from the `/music` directory).
1. Don't forget to click `Save` on update.

## A few NOTEs:
- I use browser's localStorage for storing the data. So settings persist across browser page refresh. 
- There's no backend/server needed for this app.


# UI Credits below:
Fractal by HTML5 UP
html5up.net | @n33co
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


A simple landing page template for showcasing mobile apps (although it'll definitely work
for other stuff if you get rid of the phone :) Lightweight, fully responsive, and built on
Skel 3, Sass, and flexbox.

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = not included)

AJ
n33.co @n33co dribbble.com/n33


Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fortawesome.github.com/Font-Awesome)

	Other:
		jQuery (jquery.com)
		html5shiv.js (@afarkas @jdalton @jon_neal @rem)
		CSS3 Pie (css3pie.com)
		Respond.js (j.mp/respondjs)
		jquery.scrolly (n33.co)
		Skel (skel.io)

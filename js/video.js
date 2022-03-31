var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log('The current volume is ' + video.volume);
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
});

document.querySelector('#pause').addEventListener('click', function() {
	console.log('Pause Video');
	video.pause();
});

document.querySelector('#slower').addEventListener('click', function() {
	console.log('The playbackrate was ' + video.playbackRate);
	video.playbackRate *= 0.95;
	console.log('The new playback rate is ' + video.playbackRate);
});

document.querySelector('#faster').addEventListener('click', function() {
	console.log('The playback rate was ' + video.playbackRate);
	video.playbackRate /= 0.95;
	console.log('The new playback rate is ' + video.playbackRate);
});

// finished to this point

document.querySelector('#skip').addEventListener('click', function() {
	video.currentTime += 15;
	console.log('The current location of the video is ' + video.currentTime + ' seconds');
});

document.querySelector('#mute').addEventListener('click', function() {
	video.muted = true;
	console.log('The value of mute is ' + video.muted);

	if (video.muted == true) {

	};
});

document.querySelector('#slider').addEventListener('click', function() {
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'
});
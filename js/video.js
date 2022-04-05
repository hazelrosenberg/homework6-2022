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

document.querySelector('#skip').addEventListener('click', function() {
	if ((video.currentTime + 15) < video.duration) {
		video.currentTime += 15;
	}
	else {
	video.currentTime = 0;
	};
	console.log('The current location of the video is ' + video.currentTime + ' seconds');
});

document.querySelector('#mute').addEventListener('click', function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'Unmute';
		console.log('The value of mute is ' + video.muted);
	}
	else {
	 	video.muted = false;
	 	document.querySelector('#mute').innerHTML = 'Mute';
		console.log('The value of mute is ' + video.muted);
	};
});

document.querySelector('#slider').addEventListener('click', function() {
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'
});

document.querySelector('#vintage').addEventListener('click', function() {
	video.setAttribute('class', 'oldSchool');
	console.log('The style of the video element is old school')
});

document.querySelector('#orig').addEventListener('click', function() {
	video.removeAttribute('class');
	console.log('The style of the video element is original')
});
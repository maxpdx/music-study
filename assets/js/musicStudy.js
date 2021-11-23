var PLAY_DURATION = 15;		// how long the music is going to play (10 sec.)
var DIRECTORY = "music/";	// folder in which music exists


var playlist = [];			// final collection of sounds to play
var timer;
var stopTimer = [];
var currentAudioId = null;
var currentAudio = null;
var currentStartTime = null;

var Track = function(id, name, src) {
	this.id = id;
	this.name = name;
	this.src = src;
	this.render = function () { return new Audio(this.src);	};
};

// the songs to be played!
init();

// remap audios to a buffered collection
function init() {
	var playlistArray = [];
	
	if(typeof(Storage) === "undefined") {
		alert("NO LOCAL STORAGE. See MAX!");
		return;
	}
	
	// Collection storage is NOT empty
	if (typeof localStorage.collection === 'undefined' || 
		localStorage.collection === null
	)
	{
		$('#music-collection').val($("#originalList").val());
	}
	else
	{
		playlistArray = JSON.parse(localStorage.collection);
		var text = "";
		for(var l = 0; l < playlistArray.length; ++l)
			text += playlistArray[l].name + "\n";
		
		// Removing last "\n", don't need it.
		text = text.substring(0, text.length - 1);
		$('#music-collection').val(text);
	}
	
	$('#music-duration').val(localStorage.playDuration || PLAY_DURATION);
	
	save();
}

function save() {
	stop();
	
	var musicDuration = $('#music-duration').val();
	if(musicDuration && musicDuration > 3)
		localStorage.playDuration = musicDuration;
	else
	{
		localStorage.playDuration = PLAY_DURATION;
		$('#music-duration').val(localStorage.playDuration);
	}
	
	var collectionLines = $('#music-collection').val().split('\n');
	if (collectionLines != "")
	{
		localStorage.removeItem("collection");
		playlist = [];
		for(var i = 0; i < collectionLines.length; i++)
			playlist.push(new Track(i, collectionLines[i], DIRECTORY + collectionLines[i]));
		
		localStorage.collection = JSON.stringify(playlist);
		console.log("New playlist saved");
	}
	else
		console.log("Can't save playlist, it is empty. :-(");
	
	playRandom();
}

// play random song
function playRandom() {
	stop();
	
	currentAudioId = Math.floor(Math.random() * (playlist.length-1));
	currentAudio = playlist[currentAudioId].render();
	
	currentAudio.addEventListener("loadedmetadata", function () {
		// Getting random time to start.
		getRandomStart();
	
		play();
	});
}

function getRandomStart()
{
	var minStart = currentAudio.duration - parseInt(localStorage.playDuration);
	if(minStart < 0)
		currentStartTime = 0;
	else
		currentStartTime = Math.round(Math.random() * (minStart));
}

function play() {
	stop();
	
	var t = 1;
	timer = setInterval(function(){ $("#timer").text(t++); }, 1000);
	
	currentAudio.currentTime = currentStartTime;
	currentAudio.addEventListener("canplaythrough", function () {
		currentAudio.play();
		stopTimer[stopTimer.length+1] = setTimeout(function(){ stop(); }, parseInt(localStorage.playDuration) * 1000);
	}, false);
}

function stop() {
	if(currentAudio)
		currentAudio.pause();
	for(var t=0; t < stopTimer.length; t++)
		clearTimeout(stopTimer[t]);
	clearInterval(timer);
}

function getAnswer() {
	var name = currentAudio.src.replace(/^.*[\\\/]/, '').replace(/(%20)/g, ' ');
	var end = currentStartTime + parseInt(localStorage.playDuration);
	var start = "Played: " + currentStartTime + " to " + end + " sec";
	var total = "Length: " + Math.ceil(currentAudio.duration) + " sec";
	var current = "Current Duration: " + localStorage.playDuration + " seconds";
	alert( name + "\n\n" + start + "\n" + total + "\n" + current);
}

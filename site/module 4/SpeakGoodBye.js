(function (window) {
	var byeSpeaker = {};
	var speakWord = "Good bye";
	byeSpeaker.saygoodbye = function speak(name) {
    console.log(speakWord + " " +name);
}

 window.byeSpeaker= byeSpeaker;

})(window);




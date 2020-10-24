
(function(window){
var helloSpeaker = {};
var speakWord = "Hello";
helloSpeaker.name = function(name) {
  console.log(speakWord + " " + name);
}

window.helloSpeaker = helloSpeaker;

})(window);


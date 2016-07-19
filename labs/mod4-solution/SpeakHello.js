(function (window) {
  var helloSpeaker = {} // helloSpeaker object
  var speakWord = "Hello"; // what to say
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker; // expose to global
})(window);


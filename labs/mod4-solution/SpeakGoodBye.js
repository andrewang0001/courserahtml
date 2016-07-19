(function (window) {
  var speakWord = "Good Bye";   // what to say
  var byeSpeaker = {};          // byeSpeaker object

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker; // expose to global
})(window);

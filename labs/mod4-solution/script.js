(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var n in names) {
    var name = names[n];
    var firstLetter = name.charAt(0).toLowerCase(); // take first letter, set to lowercase
    if (firstLetter == 'j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }

  };
  })(); 


(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

  
  var firstLetter = names[i].charAt(0).toLowerCase("j");

  if (firstLetter === 'j') {
    byeSpeaker.saygoodbye(names[i]);
  } else {
    helloSpeaker.sayhello(names[i]);
  }
}

})();

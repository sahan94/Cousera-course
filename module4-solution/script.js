
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var name in names) {
  L_name = names[name].toLowerCase();
  f_lettr = L_name[0] ;

  if (f_lettr == "j") {
    byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.name(names[name]);
  }
}


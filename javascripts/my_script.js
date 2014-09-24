window.upperCase = function(elem){
  var text = elem.val();
  elem.val(text.toUpperCase());
}
window.lowerCase = function(elem){
  var text = elem.val();
  elem.val(text.toLowerCase());
}

window.capitalize = function(elem){
  var regex = /^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g;
  var text = elem.val();
  text = text.toLowerCase().replace(regex, function(letter) {
    return letter.toUpperCase();
  });
  elem.val(text);
}

window.random = function(elem){
  var text = elem.val().toLowerCase();
  var new_text = "";
  for(var i=0;i<text.length;i++){
    var c = text[i];
    if(Math.random()>0.5)
      new_text+= c.toUpperCase();
    else
      new_text+= c;
  }
  elem.val(new_text); 
}
window.getTextArea = function(){
  return $('#text-pool');
}

window.upperCase = function(){
  var elem = getTextArea();
  var text = elem.val();
  elem.val(text.toUpperCase());
}
window.lowerCase = function(){
  var elem = getTextArea();
  var text = elem.val();
  elem.val(text.toLowerCase());
}

window.capitalize = function(){
  var elem = getTextArea();
  var regex = /^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g;
  var text = elem.val();
  text = text.toLowerCase().replace(regex, function(letter) {
    return letter.toUpperCase();
  });
  elem.val(text);
}

window.random = function(){
  var elem = getTextArea();
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

window.regex = function(src,dest){
  var elem = getTextArea();
  var text = elem.val().toLowerCase();
  var src_text  = $('#regex-src').val();
  var dest_text = $('#regex-dest').val();
  var src_regex = new RegExp(src_text,'g');
  elem.val(text.replace(src_regex,dest_text))
}





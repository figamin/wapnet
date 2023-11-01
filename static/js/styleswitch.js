window.onload = function() {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let [key,value] = el.split('=');
    cookie[key.trim()] = value;
  })
  setStylesheet(cookie["style"])
}

function chooseStyle(styletitle) { 
    setStylesheet(styletitle);
    setCookie(styletitle);
}

function setStylesheet(styletitle) {
  document.getElementById('switchcontrol').value = styletitle;
  document.getElementsByTagName('body')[0].className = styletitle;
}

function setCookie(styletitle) {
  document.cookie = "style=" + styletitle + ";path=/;SameSite=Strict;";
}
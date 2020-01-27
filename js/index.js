var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var myURL = 'https://app.fakejson.com/q/6NyONp5Y';
var token = 'Gfce9JoM4L6XSxiifVT_jw';
xhr.open('GET', `${myURL}?token=${token}`);
xhr.send();
xhr.onload = function() {
  if (xhr.status != 200) { 
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
  } else {
    // console.log(`JSON: ${xhr.responseText}`);
    var myJson = JSON.parse(xhr.responseText)["goods"];
    console.log(myJson);
  }
  };

console.log('myJson');

// xhr = JSON.parse(xhr.responseText);

var xhr = new XMLHttpRequest();
var myURL = 'https://app.fakejson.com/q/6NyONp5Y';
var token = 'Gfce9JoM4L6XSxiifVT_jw';
xhr.open(GET, `${myURL}?token=${token}`);
xhr.send();
xhr.onload = function() {
    console.log(this);
  };
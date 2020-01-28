//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var myURL = 'https://app.fakejson.com/q/6NyONp5Y';
var token = 'Gfce9JoM4L6XSxiifVT_jw';
xhr.open('GET', `${myURL}?token=${token}`);
xhr.send();
xhr.onload = function() {
  if (xhr.status != 200) { 
    console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
  } else {
    // console.log(`JSON: ${xhr.responseText}`);
    var goods = JSON.parse(xhr.responseText)["goods"];
    if (goods.length > 0) {
       for (var i = 0; i < goods.length; i++) {
          var col = document.createElement('div');
          col.className = 'col-md-3';
          col.id = `col${i}`;
          var item = document.createElement('div');
          item.className = 'item';
          item.id = `item${i}`;
          var item_visible = document.createElement('div');
          item_visible.className = 'item_visible';
          item_visible.id = `item_visible${i}`;
          var item_img = document.createElement('div');
          item_img.className = 'item_img';
          var item_name = document.createElement('h3');
          item_name.className = "item_text";
          var textName = document.createTextNode(goods[i]["name"]);
          item_name.appendChild(textName);
          var item_price = document.createElement('h4');
          item_price.className = "item_text orange";
          var textPrice = document.createTextNode(`${goods[i]["price"]}$`);
          item_price.appendChild(textPrice);
          document.getElementById("goods").appendChild(col);

          document.getElementById(`col${i}`).appendChild(item);

          document.getElementById(`item${i}`).appendChild(item_visible);

          document.getElementById(`item_visible${i}`).appendChild(item_img);
          document.getElementById(`item_visible${i}`).appendChild(item_name);
          document.getElementById(`item_visible${i}`).appendChild(item_price);
          
      }
    };
  }
  };



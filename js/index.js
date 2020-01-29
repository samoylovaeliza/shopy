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

          var item_info = document.createElement('div');
          item_info.className = 'item_info';
          item_info.id = `item_info${i}`;

          var item_visible = document.createElement('div');
          item_visible.className = 'item_visible';
          item_visible.id = `item_visible${i}`;

          var item_img = document.createElement('div');
          item_img.className = 'item_img';

          var item_name_vis = document.createElement('h3');
          item_name_vis.className = "item_text";
          var textNameVis = document.createTextNode(goods[i]["name"]);
          item_name_vis.appendChild(textNameVis);

          var item_price = document.createElement('h4');
          item_price.className = "item_text orange";
          var textPrice = document.createTextNode(`${goods[i]["price"]}$`);
          item_price.appendChild(textPrice);

          var item_name = document.createElement('h3');
          item_name.className = "item_info_text orange";
          var textName = document.createTextNode(goods[i]["name"]);
          item_name.appendChild(textName);

          var item_quantity = document.createElement('h3');
          item_quantity.className = "item_info_text";
          var textQuantityWord =  document.createTextNode('Quantity ');
          item_quantity.appendChild(textQuantityWord);
          var textQuantityNumber = document.createElement('span');
          textQuantityNumber.className = "orange";
          textQuantityNumber.appendChild(document.createTextNode(`${goods[i]["quantity"]}`));
          item_quantity.appendChild(textQuantityNumber);

          var item_size = document.createElement('h4');
          item_size.className = "item_info_text";
          var textSize = document.createTextNode(`Size ${goods[i]["sizes"]}`);
          item_size.appendChild(textSize);

          var order_btn = document.createElement('button');
          order_btn.className = "order_btn";
          var textBtn = document.createTextNode('Order now');
          order_btn.appendChild(textBtn);

          var stars_wrap = document.createElement('div');
          stars_wrap.className = "stars_wrap";
          stars_wrap.id = `stars_wrap${i}`;
          //var star = document.createElement('i');
          //star.className = "fas fa-star";
          var rating = parseInt(goods[i]["rating"]);


          document.getElementById("goods").appendChild(col);

          document.getElementById(`col${i}`).appendChild(item);
          document.getElementById(`item${i}`).appendChild(item_info);
          document.getElementById(`item${i}`).appendChild(item_visible);



          document.getElementById(`item_visible${i}`).appendChild(item_img);
          document.getElementById(`item_visible${i}`).appendChild(item_name_vis);
          document.getElementById(`item_visible${i}`).appendChild(item_price);
          
          document.getElementById(`item_info${i}`).appendChild(item_name);
          document.getElementById(`item_info${i}`).appendChild(item_quantity);
          document.getElementById(`item_info${i}`).appendChild(item_size);
          document.getElementById(`item_info${i}`).appendChild(stars_wrap);

          for (var j = 0; j < 5; j++) {
            var star = document.createElement('i');
            star.className = "fas fa-star";
            if (rating >= j ) {
              star.className = "fas fa-star orange";
            }
            document.getElementById(`stars_wrap${i}`).appendChild(star);
          };

          document.getElementById(`item_info${i}`).appendChild(order_btn);

          
          
      }
    };
  }
  };



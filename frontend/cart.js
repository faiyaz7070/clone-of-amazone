var cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];

function display(cartdata) {
  document.getElementById("container").innerText = "";
  cartdata.map(function (elem, index) {
    var childDiv = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", elem.img);
    var name = document.createElement("div");
    name.innerText = elem.name;
    var price = document.createElement("p");
    price.innerText ="₹" + 1 * elem.price ;
    var qntydiv = document.createElement("div");
    qntydiv.setAttribute("id", "innerdiv");
    var qtyno = document.createElement("p");
    qtyno.innerText = elem.quantity;
    var btn = document.createElement("img");
    btn.addEventListener("click", function () {
      increaseqnty(index);
    });
    btn.setAttribute("src","https://www.1mg.com/images/plus-cart.svg")
    var btn2 = document.createElement("img");
    btn2.addEventListener("click", function () {
      decreaseqnty(index);
    });
    btn2.setAttribute("src","https://www.1mg.com/images/minus-cart.svg")

    var btn_div1 = document.createElement("div")
    var btn_div2 = document.createElement("div")

    btn_div1.append(btn)
    btn_div2.append(btn2)

    qntydiv.append(btn_div1, qtyno, btn_div2);

    childDiv.append(img, name, price, qntydiv);
    document.querySelector("#container").append(childDiv);
    
  });
}

display(cartdata);
var total = cartdata.reduce(function (acc, data) {
  return acc + data.price * data.quantity;
}, 0);

function showtotal() {
  var total = cartdata.reduce(function (acc, data) {
    return acc + data.price * data.quantity;
  }, 0);
  document.querySelector("#total").innerText = "₹"+total;
  var taxtotal = total+18/100*total;
  document.querySelector("#ordertotal").innerText = "₹"+ taxtotal.toFixed(2)
}

function items_no() {
  var itemsno = cartdata.length;
  document.querySelector("#item_no").innerText = itemsno;
}

document.getElementById("apply_promo_btn").addEventListener("click", promocode);
var count = 0;
var countarr = [];
function promocode() {
  var inputpromo = document.querySelector("#inputpromo").value;
  if (inputpromo == "masai" && count==0) {
    // var total = Number(document.querySelector("#total").innerText);
    var promototal = total-30/100*total;
    countarr.push(1);
    localStorage.setItem("count",JSON.stringify(countarr))
    count++;
    document.querySelector("#ordertotal").innerText = "₹"+ Math.floor(promototal.toFixed(2))
    document.querySelector("#discount").innerText = "-30%"
    display(cartdata);
  }
  else if(count>0){
    alert("Promocode Is Already Used");
  }
  else{
    alert("Invalid Promocode")
  }
}

showtotal();
items_no();

// document.querySelector("#home").addEventListener("click", home);

// function home() {
//   window.location.href = "Shop.html";
// }

document.querySelector("#checkout_btn").addEventListener("click",checkout)

function checkout() {
  window.location.href="address.html"
}

function increaseqnty(index) {
  cartdata[index].quantity++;
  localStorage.setItem("cartdata", JSON.stringify(cartdata));
  display(cartdata);
  showtotal();
  items_no();
}

function decreaseqnty(index) {
  if (cartdata[index].quantity * 1 > 1) {
    cartdata[index].quantity--;
    localStorage.setItem("cartdata", JSON.stringify(cartdata));
    display(cartdata);
  } else {
    cartdata.splice(index, 1);
    localStorage.setItem("cartdata", JSON.stringify(cartdata));
    display(cartdata);
  }
  showtotal();
  items_no();
}



document.querySelector(".paymentmake").addEventListener("click", pay);
var carddetails = JSON.parse(localStorage.getItem("carddetails"));

function pay() {
  var card_num = document.querySelector("#cardnum").value;
  var month = document.querySelector("#month").value;
  var year = document.querySelector("#year").value;
  var cvv = document.querySelector("#cvv").value;
  if (
    card_num == carddetails[0].cardnum &&
    month == carddetails[0].month &&
    year == carddetails[0].year &&
    cvv == carddetails[0].cvv
  ) {
    window.location.href = "otp.html";
  } else {
    alert("Error");
  }
}

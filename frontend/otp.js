document.querySelector("#otpform").addEventListener("submit", submitOtp);

   var OTP = '2345';

   alert("OTP send to your Number")
function submitOtp(event) {
  event.preventDefault();
  var input_otp1 = document.querySelector("#otp1").value;
  var input_otp2 = document.querySelector("#otp2").value;
  var input_otp3 = document.querySelector("#otp3").value;
  var input_otp4 = document.querySelector("#otp4").value;
  if (
    input_otp1 == OTP[0] &&
    input_otp2 == OTP[1] &&
    input_otp3 == OTP[2] &&
    input_otp4 == OTP[3]
  ) {
    alert("Payment Successful");
    window.location.href = "index.html";
  } else {
    alert("wrong otp");
  }
}

let userData=JSON.parse(localStorage.getItem("task-list"))||[]
userData.forEach(element => {
document.querySelector(".num_resend").innerHTML= element.custmobile
});
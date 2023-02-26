let userData=JSON.parse(localStorage.getItem("task-list"))||[]
let vaccinform=document.querySelector("form").addEventListener("submit", save);
let save_btn=document.getElementById("save_btn")
let cancel_btn=document.getElementById("continue_btn")
cancel_btn.value="CANCEL"
save_btn.value="SAVE"

function save(){

    event.preventDefault()
let flat=document.getElementById("flatno")
let landmark=document.getElementById("landmarkno")
let Pincodeno=document.getElementById("Pincodeno")
let localityno=document.getElementById("localityno")
let cityno=document.getElementById("cityno")
let stateno=document.getElementById("stateno")
let custname=document.getElementById("custname")
let custmobile=document.getElementById("custmobile")
let selected=document.querySelector("input[name='Home']:checked")
let obj={
    flat:flat.value,
    landmark:landmark.value,
    Pincodeno:Pincodeno.value,
    localityno:localityno.value,
    cityno:cityno.value,
    stateno:stateno.value,
    custname:custname.value,
    custmobile:custmobile.value,
    selected:selected.value
}
if(obj.flat=="" || obj.Pincodeno=="" || obj.localityno=="" || obj.cityno=="" || obj.custname=="" || obj.custmobile==""){
    alert("please fill your address")
}
else{
    userData.push(obj)
    localStorage.setItem("task-list",JSON.stringify(userData))
    save_btn.addEventListener("click", function () {
        window.location.href = "finalpayment.html";
      });
    
console.log(userData);

}

  
}
cancel_btn.addEventListener("click", function () {
    window.location.href = "index.html";
  });


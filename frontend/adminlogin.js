


let btn=document.getElementById("login_button")
btn.addEventListener("click",()=>{
    let obj={
      name:  document.getElementById("username").value,
     
      password:document.getElementById("pass").value
    }
if(obj.name=="faiyaz"  && obj.password=="friends"){
    window.location.href = "admin.html";
}else{
    alert("cannot identify")
}
})
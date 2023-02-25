import {todaydeal} from "./todaydeal.js"
console.log(todaydeal)

// todaydeal
let todaydealbtnprev=document.getElementById("today-deal-btn-prev")
let todaydealbtnnext=document.getElementById("today-deal-btn-next")
let todaydealproductitem=document.querySelectorAll(".today-deals-product-items")
console.log(todaydealproductitem);
let startproduct=0;
todaydealbtnprev.addEventListener("click",()=>{
  
})
todaydealbtnnext.addEventListener("click",()=>{
    // alert("done")

    startproduct-=500
    console.log(startproduct);
  todaydealproductitem.forEach((el)=>{
    // alert("done")
   let x= el.style.transform=`translateX(${startproduct}%)`;
   console.log(x)
  })
})
let todaydealcontainer=document.querySelector(".today-deals-product-list")
// console.log(todaydealcontainer);
let todaydealproducthtml=""
let todaydeallength=todaydeal.length
for(let i=0;i<todaydeallength;i++){
todaydealproducthtml+=`
      <div class="today-deals-product-items">
  
     
      <img src=${todaydeal[i].img} />

    
       <div class="discount-container">
        <a href="#">Up to ${todaydeal[i].discount} off</a>
        <a  href="#">${todaydeal[i].DealofDay}</a>
         </div>
       <p>${todaydeal[i].desc}</p>

     </div>
    `
}
todaydealcontainer.innerHTML=todaydealproducthtml

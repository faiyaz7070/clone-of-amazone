let btn=document.getElementById("btn")
const total=document.getElementById("todalcount")


btn.addEventListener("click",()=>{
    let obj={
        id:document.getElementById("id").value,
        title:document.getElementById("title").value,
        image:document.getElementById("image").value,
        rating:document.getElementById("rating").value,
        price:document.getElementById("price").value
    }
    fetch("https://amazon-v93x.onrender.com/addmobile",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        console.log(res)
      
        
     
    }).catch((err)=>{
    
        console.log(err);
    })
    
   
  // 
})
let btn1=document.getElementById("btn1")
btn1.addEventListener("click",()=>{
    let Id=document.getElementById("id1").value
    let obj={
        id:Id,
        title:document.getElementById("title1").value,
        image:document.getElementById("image1").value,
        rating:document.getElementById("rating1").value,
        price:document.getElementById("price1").value
        // 
    }
    fetch(`https://amazon-v93x.onrender.com/updatemobile/${Id}`,{
        method:"PATCH",
        headers:{
            "Content-type":"application/json"
           
        },
        body:JSON.stringify(obj)
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        console.log(res)
       
      
    }).catch((err)=>{
        console.log(err.message);
    })
   
    
})
let btn2=document.getElementById("btn2")
btn2.addEventListener("click",()=>{
    let Id=document.getElementById("id2").value
  
    fetch(`https://amazon-v93x.onrender.com/delete/${Id}`,{
        method:"DELETE",
       
        // body:JSON.stringify(obj)
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        console.log(res)
       
      
    }).catch((err)=>{
        console.log(err.message);
    })
   
    
})



function total1(totaldata){
   total.innerHTML=`Total Products:-${totaldata.length}`
}





multi();
async function multi() {
    try {

        let res = await fetch("https://amazon-v93x.onrender.com/mobiles")

        let data = await res.json();


        displaymg(data);
        total1(data)
        console.log(data)

    }
    catch (e) {
        console.log("err:", e);
    }
}






// console.log(value)


function displaymg(mg_data) {
    
    document.querySelector("#Api_section").innerHTML = ""
    mg_data.map(function (ele) {
        let div1 = document.createElement("div");
       
        let img = document.createElement("img")
        img.setAttribute("src", ele.image);
        img.setAttribute("class", "proClass")
        let name_div = document.createElement("div")
        name_div.setAttribute("class", "name_div");
        let name = document.createElement("p");
        name.textContent = ele.title;
        name_div.append(name)
        name.setAttribute("class", "proname");
        let rating_div = document.createElement("div");
        rating_div.setAttribute("class", "div5")
        let rating = document.createElement("p");
        rating_div.textContent = ele.rating;
        rating.setAttribute("class", "rating");
        rating_div.append(rating);
        let mrp = document.createElement("p");
        let span2 = document.createElement("span");  
        span2.textContent ="MRP ₹"+ Math.floor((ele.price) * 0.24);
        span2.setAttribute("class", "mrp");
        let span = document.createElement("span");
        span.innerText = `24 %off`;
        mrp.append(span2, span);
        var discount=document.createElement("p");
        discount.textContent=ele.discount;
        span.setAttribute("class", "dis");
        let lastSection = document.createElement("div");
        lastSection.setAttribute("class", "lastSection")
        let price = document.createElement("p");
        price.textContent = "₹"+ele.price ;
        price.setAttribute("class", "price")
        let ADC = document.createElement("button");
        ADC.setAttribute("class", "adc")
        // ADC.innerText = "Edit";
        lastSection.append(price)
        div1.append(img, rating_div, name_div, mrp, lastSection);

        document.querySelector("#Api_section").append(div1);



        let data_send = {
            img: ele.image,

            // name:ele.desc,
            quantity: 1,



            name: ele.desc,




            price: ele.price

        }
        ADC.onclick = () => {

            var cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
            let flag=false;
            for(let i=0;i<cartdata.length;i++){
                if(cartdata[i].name==ele.desc){
                    flag=true
                }
            }
            if(flag==true){
                alert("product already in cart")
            }else{
                cartdata.push(data_send)

                localStorage.setItem('cartdata', JSON.stringify(cartdata));
                alert("product added to card")
                console.log(cartdata)

            }
           
            cartnum();

            displaymg(mg_data)

function cartnum(){
if(cartdata!=[])
{
  document.querySelector(".count").innerText=cartdata .length;
  displaymg(mg_data)
}
}

        }
    });
}



        //  window.location.href="productPage.html"



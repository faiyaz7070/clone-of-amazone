multi();
async function multi() {
    
    try {

        let res = await fetch("https://amazon-v93x.onrender.com/mobiles")

        let data = await res.json();


        displaymg(data);
        console.log(data)
    }
    catch (e) {
        console.log("err:", e);
    }
}
let value = document.querySelectorAll(".filt");
for (let btn of value) {
    btn.addEventListener("click", (e) => {
     
        filter(btn.value)
    })
}
async function filter(value) {
    try {
        let res = await fetch(`https://amazon-v93x.onrender.com/${value}`);
        let ans = await res.json();
        console.log(ans)
        displaymg(ans)
    } catch (error) {
        console.log(error)

    }
}
let btn1=document.getElementById("search-icon1")
let value1=document.getElementById("searchinput")
btn1.addEventListener("click",()=>{
search(value1.value)

})

async function search(input){
    try {
        let response = await fetch(`https://amazon-v93x.onrender.com/${input}`);
        let answer = await response.json();
        console.log(answer)
        displaymg(answer)
    } catch (error) {
        console.log(error)

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
        ADC.innerText = "ADD";
        lastSection.append(price, ADC)
        div1.append(img, rating_div, name_div, mrp, lastSection);

        document.querySelector("#Api_section").append(div1);


        let data_send = {
            img: ele.image,

            // name:ele.desc,
            quantity: 1,



            name: ele.title,




            price: ele.price

        }

        ADC.onclick = () => {
            

            var cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
            let flag=false;
            for(let i=0;i<cartdata.length;i++){
                if(cartdata[i].name==ele.title){
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



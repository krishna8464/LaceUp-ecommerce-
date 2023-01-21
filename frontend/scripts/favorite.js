let existingdata = [];
let existingdatalength = 0;
let searchquery = sessionStorage.getItem("searchquery")
let access_token = sessionStorage.getItem("Access_tocken")
//console.log(access_token)
async function getData(){
try {
  let res = await fetch("http://localhost:6060/masterdata")
  let out = await res.json();
//console.log(out)
  let filterdata=await out.filter(function(item){
    
    //console.log(item.name.toLowerCase())
     return item.tilname.toLowerCase().includes(searchquery.toLowerCase());
});
  //console.log(filterdata)
  displayData(filterdata)
//   console.log(out.length)
  existingdata = filterdata
  existingdatalength = filterdata.length
} catch (error) {

}
}
getData();
// base code 

let userStatus = sessionStorage.getItem("acive")
// console.log(userStatus);
function doit(){
if(userStatus){
    let appendhere = document.getElementById("header")
    let data = `
    <header>Long weekend sale: Take an extra 40% off items labeled EXTRA 40% OFF. Plus save 25-40% on a large selections of items. Ends 31/01/2023.</header>
    <div id="options"><span><a href="index.html">Stores & events</a> | <a href="">Shopping services</a> | <a href="#">INR</a></span><span><a href="favorite.html">Favorite❤️</a> | <a href="cart.html">Cart🛒</a> |<a href="index.html" onclick="logout()">Logout👋</a></span></div><hr>
    `
    appendhere.innerHTML=data
}
}
doit()

function logout(){
    sessionStorage.clear()
}




let searchbar = document.getElementById("search");
let searchbtn = document.getElementById("srchbtn");


function srchbtn(){
    
    if(searchbar.value===""){
            searchbar.placeholder="Please enter the Query"
            setTimeout(() => {
                searchbar.placeholder="Search"
            }, 1000);
    }else{
    sessionStorage.setItem("searchquery",searchbar.value);
    setTimeout(() => {
        window.location.href="search.html"
    },1000);
}
}


// const hide = document.querySelector(".goto")
const womendrop = document.getElementById("womendrop")
const mendrop = document.getElementById("mendrop")
const kiddrop = document.getElementById("kiddrop")
const accdrop = document.getElementById("accdrop")
const atletdrop = document.getElementById("atletdrop")
const branddrop = document.getElementById("branddrop")
const cleardrop = document.getElementById("cleardrop")


function women(){
   
    mendrop.style.display="none"
    kiddrop.style.display="none"
    accdrop.style.display="none"
    atletdrop.style.display="none"
    branddrop.style.display="none"
    cleardrop.style.display="none"
    if(womendrop.style.display==="none"){
        womendrop.style.display="flex"
       // hide.style.display="none"
       }else{
       // hide.style.display="flex"
        womendrop.style.display="none"
       }
}

function men(){
    womendrop.style.display="none"
    kiddrop.style.display="none"
    accdrop.style.display="none"
    atletdrop.style.display="none"
    branddrop.style.display="none"
    cleardrop.style.display="none"
    if(mendrop.style.display==="none"){
        mendrop.style.display="flex"
       // hide.style.display="none"
       }else{
       // hide.style.display="flex"
        mendrop.style.display="none"
       }
}

function kids(){
    womendrop.style.display="none"
    mendrop.style.display="none"
    accdrop.style.display="none"
    atletdrop.style.display="none"
    branddrop.style.display="none"
    cleardrop.style.display="none"
    if(kiddrop.style.display==="none"){
        kiddrop.style.display="flex"
        //hide.style.display="none"
       }else{
       // hide.style.display="flex"
        kiddrop.style.display="none"
       }

}

function accessories(){
    womendrop.style.display="none"
    mendrop.style.display="none"
    kiddrop.style.display="none"
    atletdrop.style.display="none"
    branddrop.style.display="none"
    cleardrop.style.display="none"
    if(accdrop.style.display==="none"){
        accdrop.style.display="flex"
       // hide.style.display="none"
       }else{
       // hide.style.display="flex"
        accdrop.style.display="none"
       }
}

function athletic(){
    womendrop.style.display="none"
    mendrop.style.display="none"
    kiddrop.style.display="none"
    accdrop.style.display="none"
    branddrop.style.display="none"
    cleardrop.style.display="none"
    if(atletdrop.style.display==="none"){
        atletdrop.style.display="flex"
       // hide.style.display="none"
       }else{
       // hide.style.display="flex"
        atletdrop.style.display="none"
       }
}

function brands(){
    womendrop.style.display="none"
    mendrop.style.display="none"
    kiddrop.style.display="none"
    accdrop.style.display="none"
    atletdrop.style.display="none"
    cleardrop.style.display="none"
    if(branddrop.style.display==="none"){
        branddrop.style.display="flex"
       // hide.style.display="none"
       }else{
       // hide.style.display="flex"
        branddrop.style.display="none"
       }

}

function clearance(){
    womendrop.style.display="none"
    mendrop.style.display="none"
    kiddrop.style.display="none"
    accdrop.style.display="none"
    atletdrop.style.display="none"
    branddrop.style.display="none"
    if(cleardrop.style.display==="none"){
        cleardrop.style.display="flex"
       // hide.style.display="none"
       }else{
      //  hide.style.display="flex"
        cleardrop.style.display="none"
       }
}
// don't touch the above code

async function getfav(){
    try {
        let add_fav = await fetch(`http://localhost:6060/user/fav`,{
            method:"GET",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `${access_token}`
            }
        })
        if(add_fav.ok){
           // console.log("done")
            let out = await add_fav.json() ;
            displayfav(out)
          
        }else{
            alert("Please login first")
            setTimeout(() => {
                window.location.href="login.html"
            }, 1000);
        }
    } catch (error) {
        console.log(error)
    }
}

getfav();



//appends starts
function displayfav(data) {
    let trendingDiv = document.getElementById("appendhere");
    trendingDiv.innerHTML=""
    if(data.length == 0){
        let img = document.createElement("img");
        img.setAttribute("id","errorimg");
        img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5mn5cXlLdM3bGIXAjF1ockb3O4qSORAjwA&usqp=CAU");
        let error = document.createElement("h1");
        error.innerText = "Nothing Fond";
        trendingDiv.append(img,error)
    }else{
    data.forEach((item) => {
      let div = document.createElement("div");
      div.setAttribute("id","productDiv");
      let img = document.createElement("img");
      img.setAttribute("src", item.product);
      let title = document.createElement("h4");
      title.innerText = item.tilname;
      let brand = document.createElement("h6");
      brand.innerText = item.name;
      let price = document.createElement("p");
      price.innerText = `$ ${item.price}`;
      let btnDiv=document.createElement("div");
      btnDiv.setAttribute("id","btnDiv");
      let delBtn=document.createElement("button");
      delBtn.setAttribute("id","buyBtn");
      delBtn.innerText="Delete";
      delBtn.addEventListener("click",function(){
        let id = item._id;
        delfav(id)
      })
      
      
      let addCartBtn=document.createElement("button");
      addCartBtn.setAttribute("id","addCartBtn");
      addCartBtn.innerText="Add to cart";
      addCartBtn.addEventListener("click",function(){
        let obj = {
            "product": item.product,
            "name": item.name,
            "tilname": item.tilname,
            "price": item.price,
            "compvalue": item.compvalue,
            "stars": item.stars,
            "rating": item.price,
            "type": item.type,
            "category": item.category
        }
        addtocart(obj)
        delfav1(item._id)
    })

      btnDiv.append(addCartBtn,delBtn);
      div.append(img,title,brand,price,btnDiv);
      trendingDiv.append(div);
  });
  }
  }
//appends ends

async function delfav1(id){
    try {
        let add_fav = await fetch(`http://localhost:6060/user/fav/delete/${id}`,{
            method:"DELETE",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `${access_token}`
            }
        })
        if(add_fav.ok){
           // console.log("done")
            let out = await add_fav.json() ;
            // alert(`${out.msg} to ❤️`)
            getfav()
          
        }else{
            alert("Please login first")
            setTimeout(() => {
                window.location.href="login.html"
            }, 1000);
        }
    } catch (error) {
        console.log(error)
    }
}


async function delfav(id){
    try {
        let add_fav = await fetch(`http://localhost:6060/user/fav/delete/${id}`,{
            method:"DELETE",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `${access_token}`
            }
        })
        if(add_fav.ok){
           // console.log("done")
            let out = await add_fav.json() ;
            alert(`${out.msg} in ❤️`)
            getfav()
          
        }else{
            alert("Please login first")
            setTimeout(() => {
                window.location.href="login.html"
            }, 1000);
        }
    } catch (error) {
        console.log(error)
    }
}


async function addtocart(obj){
    try {
        let add_cart = await fetch(`http://localhost:6060/user/cart`,{
            method:"POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `${access_token}`
            },
            body:JSON.stringify(obj)
        })
        if(add_cart.ok){
            // console.log("done")
            let out = await add_cart.json() ;
            alert(`${out.msg} to 🛒`)
          
        }else{
            alert("Please login first")
            setTimeout(() => {
                window.location.href="login.html"
            }, 1000);
        }
    } catch (error) {
        console.log(error)
    }
}

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


const hide = document.querySelector(".goto")
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
        hide.style.display="none"
       }else{
        hide.style.display="flex"
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
        hide.style.display="none"
       }else{
        hide.style.display="flex"
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
        hide.style.display="none"
       }else{
        hide.style.display="flex"
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
        hide.style.display="none"
       }else{
        hide.style.display="flex"
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
        hide.style.display="none"
       }else{
        hide.style.display="flex"
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
        hide.style.display="none"
       }else{
        hide.style.display="flex"
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
        hide.style.display="none"
       }else{
        hide.style.display="flex"
        cleardrop.style.display="none"
       }

}


// search bar code
/* <input id="search" type="text" placeholder="Search Brands" name="search">
</input><button id="srchbtn" type="submit"><i class="fa fa-search"></i></button> */

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










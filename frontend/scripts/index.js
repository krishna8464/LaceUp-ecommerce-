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
       }else{
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
       }else{
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
       }else{
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
       }else{
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
       }else{
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
       }else{
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
       }else{
        cleardrop.style.display="none"
       }

}

















// DROPDOWNS
// let shoes = document.getElementById("shoes");
// let shoedrop = document.getElementById("drop");

// let bags = document.getElementById("handbag");
// let bagdrop = document.getElementById("bagdrop");

// let jwell = document.getElementById("jwell");
// let jwelldrop = document.getElementById("jwelldrop");


// shoes.addEventListener("mouseover", myFunction);
// shoedrop.addEventListener("mouseout", myFunction);
// function myFunction() {
//   bagdrop.style.display = "none";
//   jwelldrop.style.display = "none";
//   if (shoedrop.style.display === "none") {
//     shoedrop.style.display = "flex";
//   } else if (drop.style.display === "flex") {
//     shoedrop.style.display = "none";
//   } else {
//     shoedrop.style.display = "flex";
//   }
// }

// bags.addEventListener("mouseover", myFunction2);
// bagdrop.addEventListener("mouseout", myFunction2);
// function myFunction2() {
//   shoedrop.style.display = "none";
//   jwelldrop.style.display = "none";
//   if (bagdrop.style.display === "none") {
//     bagdrop.style.display = "flex";
//   } else if (bagdrop.style.display === "flex") {
//     bagdrop.style.display = "none";
//   } else {
//     bagdrop.style.display = "flex";
//   }
// }

// jwell.addEventListener("mouseover", myFunction3);
// jwelldrop.addEventListener("mouseout", myFunction3);
// function myFunction3() {
//   shoedrop.style.display = "none";
//   bagdrop.style.display = "none";
//   if (jwelldrop.style.display === "none") {
//     jwelldrop.style.display = "flex";
//   } else if (jwelldrop.style.display === "flex") {
//     jwelldrop.style.display = "none";
//   } else {
//     jwelldrop.style.display = "flex";
//  }
// }
const imgElement = document.querySelector("img");
const btnElement = document.querySelector("input");
const myHeading = document.querySelector("h1");

let img1URL = "images/alatoo-logo.png";
let img2URL = "images/alatoo.jpg";

function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1URL) {
        imgElement.setAttribute("src",img2URL);
    }
    else{
        imgElement.setAttribute("src",img1URL);
    }
}
//imgElement.onclick = changePhoto;

imgElement.addEventListener("click", changePhoto);

let btn = "submit";
let name = document.getElementById("name");

function changeHeader(){
    let name= document.getElementById("name").value;
    myHeading.textContent = "Welcome, " + name;     
}
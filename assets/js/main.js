document.addEventListener("DOMContentLoaded",function(){
const h=document.getElementById("hamburger");
const m=document.getElementById("navMenu");
if(h){h.onclick=()=>m.classList.toggle("active");}
});
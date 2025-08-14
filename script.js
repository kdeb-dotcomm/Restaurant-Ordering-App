import { item } from "./data.js";

const menuBtn = document.querySelector(".menu");
const bigSection = document.getElementById('big-section')

bigSection.style.display = 'none';
menuBtn.addEventListener('click', pageDisplay); 

function pageDisplay(){
    if (bigSection.style.display === 'none') {
        bigSection.style.display = 'block';
    } else {
        bigSection.style.display = 'none';
    }
}
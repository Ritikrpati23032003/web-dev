// let tag=document.querySelector("h1");
// // console.log(head);
// tag.innerText=tag.innerText+"By Ritik";
// console.dir(tag.innerText);

let divs=document.querySelectorAll('.box');
let idx=1;
for(let  div of divs)
{
    div.innerText=`new val ${idx}` 
    idx++;  
}
// divs[0].innerText='new val 1'
// divs[1].innerText='new val 2'
// divs[2].innerText='new val 3'
// console.log(divs[0]);







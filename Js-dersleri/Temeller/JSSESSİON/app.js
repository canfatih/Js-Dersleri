// console.log(window);
 

//butonlar
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear =document.querySelector("#clear");

//inputlar

const addkey =document.querySelector("#addkey");
const value =document.querySelector("#addvalue");
const deletekey=document.querySelector("#deletekey");

add.addEventListener("click",additem);
del.addEventListener("click",clearitem);
clear.addEventListener("click",clearall);


function additem(a){

    sessionStorage.setItem(addkey.value,addvalue.value);
}
function clearitem(a){
sessionStorage.removeItem(deletekey.value);
}
function clearall(a){
sessionStorage.clear();
}

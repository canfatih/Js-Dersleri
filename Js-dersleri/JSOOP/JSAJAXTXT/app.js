

document.getElementById("btn").addEventListener("click",function(){

//xmlhttprequest
const x=new XMLHttpRequest();

x.onprogress=function(){
console.log("process işleniyor..",this.readyState);
}
x.onload=function(){
    if(this.status==200){
        // console.log(this.responseText);
      document.getElementById("oppi").textContent=this.responseText;
    }
}


x.open("GET","deneme.txt",true);
x.send();

})

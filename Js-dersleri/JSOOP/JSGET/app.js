class Request{

constructor(){
    this.xhr =new XMLHttpRequest();
}

get(url,callback){

this.xhr.open("GET",url);

this.xhr.onload= () => {

    if(this.xhr.status ===200){

        console.log(this.xhr.responseText);
    }
}
this.xhr.send();

};



}

const request=new Request();
request.get("https://jsonplaceholder.typicode.com/todos/3",function(response){
    console.log(response);
});

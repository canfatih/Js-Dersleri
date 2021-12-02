let value;


const programmer ={
name: "Fatih Can",
age: 23,
email: "canfatih1905@gmail.com",
langs:["javascript","HTML","CSS"],

adress:{
    city:"İstanbul",
    street:"Ataşehir"

},
   work :function(){
       console.log("İş arıyor...");
   }
  
}

value=programmer;

// value=programmer.email;
// value=programmer.work;
// value=programmer.adress.street;
// value=programmer.langs;
//bu şekilde istediğini de çağırabiliyorsun.



console.log(value);
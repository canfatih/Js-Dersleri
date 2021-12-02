



function Users(name,age,salary){//yapıcı fonksiyon constructor yani yazarken ilk harf büyük olmalı.
this.name=name;
this.age=age;
this.salary=salary;
this.showinfo =function(){

    console.log(this.name,this.age,this.salary);
    }
}


const user1=new Users("mustafa",25,3000);
const user2=new Users("fatih",23,6000);

user1.showinfo();
user2.showinfo();
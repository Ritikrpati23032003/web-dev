A. let,var,const:--
var : It can be re-declared & updated and it can be global scope variable.

let : can't be re-declared but can upadate. It is block scope variable.

const ; it can not be redeclared and update and block scope variable.


B. datatypes in javascript:-
1.Primitive datatypes(Fixed)
a.number
b.string
3.boolean
4.undefind
5.null
6.bigint  ex-> let a = bigint("123");  o/p-123n
7.symbol  let a = symbol("hello");

2.Non-primitive data types
i> object-
a.functions
b.arrays

C. Loops:
-> Execute piece of code againa and again

for -of-loop :-

->use for str and array-string
 let str='Apna College';
 let size=0;
  for(let i of str){   //iterator/charactor
    console.log("i=",i);
    size++;
  }
  console.log(size);

For in loop:-

-> It is use for object and also array
let student={
    name : "Ritik Ranjan Pati",
    age :21,
    cgpa :5.6,
    isPass :true,
};
for (let i in student){
    console.log(i);
}  //It gives key values of object


TEMPLATE LITERALS:=

 let a={
    price:100,
    item:"pen",
 };
 let op=`The item ${a.item} is price ${a.price}`;
 console.log(op);

E. functions IN JS:-------

1.    function myfunction()// fdefination of function
 {
    console.log("WE are ready");
    console.log("Get started");
 }
  myfunction(); // call function

  function myfunction(msg,n){
     console.log(msg,n)
  }
  myfunction("Ritk",100);


2. function sum(a,b){
   s= a+b;
   return s;
}
 let val=sum(10,20);
 console.log(val);

 3. Vowel

 function vowel(str) {
   let count=0;
   for (let char of str)
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
         console.log(char);
         count++;
      }
      return count;
}


F. Arrow function:------

 - compact way to writing a function or optiimizing the function

 1. let vowel=(str)=> {
   let count=0;
   for (let char of str)
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
         console.log(char);
         count++;
      }
      return count;
}

G. forEach Loop in arrays:------

- It is a call backfunction is used to exdecute foe each element in array.
- A callbsck function passed as an argument to another function

ex- arr.foreach(callBackFunction)

1. let arr =["Ritk","ranjan","pati"];
 arr.forEach(function Myfunction(str){
   console.log(str);
 });

 or

 let arr =["Ritk","ranjan","pati"];
 arr.forEach(str=>{
   console.log(str);
 });

 2. let ar=[1,2,3,4];
let sq=(num)=>{
   console.log(num*num);
};
ar.forEach(sq);

H. MAp Method:-------

- create a new array with the results of some operations.The value its callback returns to form new array.
- arr.map(callback(val,index,array)).

syntax-
let newArray=arr.map ((val)=>{return val*2})
- 
let ar=[1,2,3,4];
let newA=ar.map((num)=>{
    return num*num;
});
console.log(newA); 


-----Bsic difference between Map and foreach is-----------
- foreach use for normally calculation
- Map used value to create new array


I. Filter Method:--

- It can be used for filtering the element from original array but not change original array.

let arr=[1,2,3,4,5,6,7,45,65,98,45,,47,,45,46,50,26]
let na=arr.filter((val)=>{
   return 50<val;
});
console.log(na);

J. Reduce .....
- it return single value.
- Performs some operstions and reduce the array to single value.
- result will be upadate and we use cuueernt value for any opertaion
- it cab use for two number/value.
example 1:--
let ar=[1,2,3,5];
let op=ar.reduce((result,current)=>{
   return a+b;
});
console.log(op); 
//where result is initially value and current is current value

Example 2 :---
let n =prompt("Enter a number: ");
 let arr=[];
 for(let i=1;i<=n;i++)
 {
   arr[i-1]=i;
 }
 console.log(arr)
  let sum=arr.reduce((pre,curr)=>
{
   return pre+curr;
});
console.log(sum);
  let mul=arr.reduce((pre,curr)=>
{
   return pre*curr;
});
console.log(mul);


J.Include mrthod:
- it give true/false dfor the item is present in that array.
let fruits=['banana','appple'];
console.log(fruits.includes('banana'));


K.get Element by tag/class/id:-

- let head=document.getElementsByTagName("h1");
 // console.log(head);
 console.dir(head);

 let mclass=document.getElementsByClassName("head");
// console.log(head);
console.dir(mclass);

let _id=document.getElementById("btn");
// console.log(head);
 console.dir(_id);

L.QUERY SELECTOR:-

// let tag1=document.querySelectorAll("p");
// // console.log(head);
// console.dir(tag1);

// let tag1=document.querySelectorAll(".p"); //by class name
// // console.log(head);
// console.dir(tag1);

// let tag1=document.querySelector("#p");   //By ID name
// // console.log(head);
// console.dir(tag1);

M.PROPERTIES:-
1. for tag we use tag variable name.tagName
2. for innerText  we use tag variable name.innerText
3. for innerHTML  we use tag variable name.HTML

N.get_Attribute:----
- A.  let div1=document.querySelector("div")
console.dir(div1)
let id=div1.getAttribute("id");
console.log(id);

let name=div1.getAttribute("name");
console.log(name);

- B. let Class1=document.querySelector("p");
console.log(Class1.getAttribute("Class"));

O.Set_attribute:-------

- let Class1=document.querySelector("p")
console.log(Class1.setAttribute("class","Chiku"));
 
P.style Attribue-------

let div=document.querySelector("div");
console.log(div);
div.style.backgroundColor="red";
div.style.fontSize="28px";
div.style.visibility="hidden";

R. Class LIst............
let op=document.querySelector("p")
op.classList.add("new class name");

S. EventListener:----

- <button ondblclick="console.log('button was click');alert('hello 2!')">Click  me 2</button> //button was click

- let btn1=document.querySelector("#btn");
btn1.addEventListener("click",()=>{
    console.log("button was clicked");
});
btn1.addEventListener("click",()=>{
    console.log("button was clicked by 2");
});  //button was clicked  button was clicked by 2


T.Prototype:----

- const employee={
    calTax(){
        console.log("tax is 10%");
    },
};
const chiku={
    salary:5000,
    calTax(){
        console.log("tax is 20%");
    },
};

chiku.__proto__= employee; // Tax is 20%

U.Class:----

- class is a program code for creating object.
- Objects have some state(variables) and behaviours(functions) inside it.

class Car{
   start(){
      console.log("...")
   }
}
let car=new Car();
car.strat();//....

V.Constructor-----
- It is a function that initialize the object when it is created or create for obj.

class Car{
    constructor(brand,mileage){
        console.log("Invoked")
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("car is strat");
    }
    stop(){
        console.log("car is stop")
    }
}

let Tcar=new Car("Toyota",20);
console.log(Tcar);
let Fcar=new Car("Fortu",65);
console.log(Fcar);
// car.setBrand("Fortuner");
// car.start();
// car.stop();

W. Inheritance-----
- it invoke parent properyies to child class

class Person{
    constructor(Species){
        this.species="HomO";
    }
    eat(){
        console.log("Eat")
    }
    sleep(){
        console.log("Sleep")
    }
    work(){
        console.log("nothing")
    }
}

class Eng extends Person{
    work(){
        console.log("Work")
    }
}

let r= new Eng();
let p= new Person();

-->Method Overriding--
when parent and child class has same method then child method will be used.

X. Super();-----
- to invoke parent class constructor.
class Person{
    constructor(name){
       
        this.species="HomO";
        this.name=name;
    }
    eat(){
        console.log("Eat")
    }
    sleep(){
        console.log("Sleep")
    }
    
}

class Eng extends Person{
    constructor(name){
        
        super(name);// to invoke parent class constructor
        // this.branch=branch;
       
    }
    work(){
        console.log("Work")
    }
}

let r= new Eng("Ritik");
// let p= new Person();

Y. Try.. catch()
- let a=10;
let b=20;
console.log(a+b);
console.log(a-b);
try{
console.log(a+c);
} catch(err)
{
console.log(err)
}
console.log(a*b);


Z.Callback :---
- Callback function passed an argument to another function.


// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("THREE")
// },3000);
// console.log("four");

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,callbackFun){
//     callbackFun(a,b);
// }
// calculator(3,4,sum);


a.callback hell.....


// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data", dataId);
//         getNextData();
//     },2000);
// }

// getData(1, ()=>{
//     console.log("getting data....")
//     getData(2, ()=>{
//         console.log("getting data....")
//         getData(3)
//     })
// })


b. Promises....
- promises use to solve callback hell

function getData(dataId, getNextData){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log("data", dataId);
        resolve("success");
        if(getNextData){
            getNextData();
        }
        },4000);
    });
}








 
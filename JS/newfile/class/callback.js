//1. synchronous.....

// console.log("one");
// console.log("two");
// console.log("3");
// console.log("4");

//2.Asynchronous..... 

// console.log("one");
// console.log("two");
// setTimeout(()=>{ 
//     console.log("Ritk")
// },4000)
// console.log("3");
// console.log("4");

//3.  callback....

// function sum(a,b){
//     console.log(a+b);
// }


// function calculator(a,b,sumCall){
//     sumCall();
// }
// calculator(1,2,sum);


// function hello() {
//     console.log('hello');
// }
// function hi() {
//     console.log('hi');
// }
//  function calculator(a, b, hello) {
//     console.log(a + b);
//         hello(); 
//     // if (extraCallback) {
//     //     extraCallback();
//     //     } 
// };

// calculator(1, 2, hello);
// calculator(10, 2,()=>{
//     setTimeout(()=>{
//         console.log("completd")
//     },2000)
//    console.log('by');
// });


//Callback hell.........

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData)
//         {
//             getNextData();
//         }
//     },2000)
//  }

//  getData(1,()=>{
//     console.log("getting data2......")
//     getData(2,()=>{
//         console.log("getting data3....")
//         getData(3,()=>{
//             console.log("getting data 4")
//             getData(4)
//         })
//     })
//  })



//Promises...........

// let promise=new Promise((resolve,reject)=>{
//     console.log("Promised")
//     // resolve("Finaalyu done")
//     reject("some error")
// })


// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             //resolve("success")
//             reject("erreor")
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000)
//     })
// }


//.then() &.catch

// const getPromise=()=>{
//     return new Promise((resolve, reject) =>{
//         console.log("I am promised..");
//         //resolve("Success");
//          reject("error found");
//     });
// };

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("Promise fullfilled",res)
// });

// promise.catch((err)=>{
//     console.log("Promise rejected",err)
// })



//Promise chain.....
//ex-1....

// function async1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 1")
//             resolve("succes")
//         },4000);
//     });
// }
// function async2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 2")
//             resolve("succes")
//         },4000);
//     });
// }

// console.log("fetching data1...")
// let p1=async1()
// p1.then((res)=>{
//     console.log("fetching data2...")
//     let p2=async2()
//     p2.then((res)=>{})
// })



//ex-2...

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataId);
//         resolve('Success')
//     },2000)
// })
//  }

//  // Promise chain....

// //console.log("fetching data 1....")
// getData(1).then((res)=>{
//   //  console.log("fetching data 2....")
//     getData(2).then((res)=>{ 
//     //    console.log("fetch data 3...")
//         getData(3).then(()=>{
//             console.log(res);});
//     });
// });

//ex-3...

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("completed")
//         resolve('success')
//     },1000)
// })
// promise1.then((res)=>{
//     console.log(res)
// })


//ex-4...

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("completed")
//         resolve('success')
//     },1000)
// }).then((res)=>{
//     console.log(res)
// })

//ex-5...

// const promisethree=new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         reject({username:"Ritik",email:"ritikranjanpati@gmail.com"})
//     },2000);
// });

// promisethree.catch(function(user){
//     console.log(user)
// })

//EX-6..

// const promisefour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         if (!error) {
//             resolve({
//                 username: "Ritik",
//                 password: '852456'
//             })
//         }else{
//             reject({Error:'Something went wrong'})
//         }

//     }, 1000)
// });
// promisefour
// .then((user)=>{
//     console.log(user)
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
   
// })
// .catch((err)=>{
//     console.log(err)
// })
// promisefour
// .then((user)=>{
//     console.log(user)
//     return user.password
// })
// .then((password)=>{
//     console.log(password);
   
// })
// .catch((err)=>{
//     console.log(err)
// })

//ex-7....

// const promisefour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false; // Change to true to test rejection case
//         if (!error) {
//             resolve({
//                 username: "Ritik",
//                 password: "852456"
//             });
//         } else {
//             reject({ error: "Something went wrong" }); // Changed key from 'Error' to 'error'
//         }
//     }, 1000);
// });

// promisefour
//     .then((user) => {
//         console.log(user); // { username: "Ritik", password: "852456" }
//         return user.username;
//     })
//     .then((username) => {
//         console.log(username); // Ritik
//         return "Some password"; // To keep the promise chain going
//     })
//     .then((pass) => {
//         console.log(pass); // "Some password"
//         return pass; // Pass remains a string
//     })
//     .then((password) => {
//         console.log(password); // "Some password"
//     })
//     .catch((err) => {
//         console.log(err); // { error: "Something went wrong" } if rejected
//     });

//ex-8...

// const promisefive = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             let error = false; // Change to true to test rejection case
//             if (!error) {
//                 resolve({
//                     username: "Ritik",
//                     password: "852456"
//                 });
//             } else {
//                 reject({ error: "JS went wrong" }); // Changed key from 'Error' to 'error'
//             }
//         }, 1000);
//     });


//c.async and await......

// async function hello(){
//     console.log("hello")
// }

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Weather fordcasting')
//             resolve(200);
//         },2000)
//     })   
// }
// async function weather(){
//     await api()
//     await api()
// } 

//ex-3

// function getData(dataId, getNextData) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("data", dataId);
//                 resolve("success")
                
//             }, 2000)
//         })
//     }

// call manually in console......
//  async function getdata(){
//     console.log('getting data 1....')
//     await getData(1);
//     console.log('getting data 2....')
//     await getData(2);
//     console.log('getting data 3....')
//     await getData(3);
//     console.log('getting data 4....')
//     await getData(4);
//  };

// call by Immidiately Invoked Function Expression
// (async function getdata(){
//     console.log('getting data 1....')
//     await getData(1);
//     console.log('getting data 2....')
//     await getData(2);
//     console.log('getting data 3....')
//     await getData(3);
//     console.log('getting data 4....')
//     await getData(4);
//  })();


//AA.API:-------------------------


// https://cat-fact.herokuapp.com/facts
// https://cat-fact.herokuapp.com

//ex-1

// const url="https://cat-fact.herokuapp.com";
// const getfacts= async()=>{
// console.log("getting data.....")
// let response= await fetch(url)
// //console.log(response.status)
// console.log(response) //JSON format
// let data= await response.json();
// console.log(data);
// };
// getfacts();


//ex-2..

const url="https://cat-fact.herokuapp.com";
const factpara=document.querySelector("#fact")
const btn1=document.querySelector("#btn")

const getfacts= async()=>{
console.log("getting data.....")
let response= await fetch(url)
//console.log(response.status)
console.log(response) //JSON format
let data= await response.json();
//console.log(data);
//console.log(data);
factpara.innerText=data[0].text;
};
btn1.addEventListener("click",getfacts);



